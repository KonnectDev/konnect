<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {

        return User::all(['id', 'username', 'firstname', 'lastname', 'img_small', 'level', 'koins']);

    }

    public function show($id)
    {
        if (is_numeric($id)) {
            $user = User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level', 'koins']);
        } else {
            $user = User::where('username', $id)->first(['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level', 'koins']);
        }
        if ($user) {
            return $user;
        }
        return ['User not found'];

    }

    public function find($string)
    {

        return User::where('username', 'LIKE', $string . '%')->get(['id', 'username', 'firstname', 'lastname', 'img_small', 'level', 'koins']);

    }

    public function showDetailed($id, $string)
    {
        if (in_array($string, ['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level', 'koins'])) {
            return User::find($id, [$string]);
        }
        return User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level','koins']);

    }


    public function login(Request $request)
    {

        $user = DB::table('users')->where([
            'username' => $request['username'],
            'password' => md5($request['password'])
        ])->first(['id', 'username', 'auth_key']);
        return response()->json($user, 200);


    }

    public function register(Request $request)
    {
        $request['auth_key'] = md5($request['username'] . time());
        $request['password'] = md5($request['password']);
        $user = User::create($request->all());
        return response()->json($user, 201);

    }
    public function validatePasswordRequest (Request $request)
    {
        $user = DB::table('users')->where([
            'username' => $request['username']])
            ->first();
//Check if the user exists
        if (count($user) < 1) {
            return redirect()->back()->withErrors(['email' => trans('User does not exist')]);
        }

//Create Password Reset Token
        DB::table('password_resets')->insert([
            'username' => $request['username'],
            'token' => str_random(60),
            'created_at' => Carbon::now()
        ]);
//Get the token just created above
        $tokenData = DB::table('password_resets')
            ->where('username', $request['username'])->first();

        if ($this->sendResetEmail($request['email'], $tokenData->token)) {
            return redirect()->back()->with('status', trans('A reset link has been sent to your email address.'));
        } else {
            return redirect()->back()->withErrors(['error' => trans('A Network Error occurred. Please try again.')]);
        }
    }
    public function resetPassword(Request $request)
    {
        //Validate input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|confirmed'
        'token' => 'required' ]);

    //check if payload is valid before moving on
    if ($validator->fails()) {
        return redirect()->back()->withErrors(['email' => 'Please complete the form']);
    }

    $password = md5($request['password'];
// Validate the token
    $tokenData = DB::table('password_resets')
        ->where('token', $request->token)->first();
// Redirect the user back to the password reset request form if the token is invalid
    if (!$tokenData) return view('auth.passwords.email');

    $user = User::where('email', $tokenData->email)->first();
// Redirect the user back if the email is invalid
    if (!$user) return redirect()->back()->withErrors(['email' => 'user not found']);
//Hash and update the new password
    $user->password = \Hash::make($password);
    $user->update(); //or $user->save();

    //login the user immediately they change password successfully
    Auth::login($user);

    //Delete the token
    DB::table('password_resets')->where('email', $user->email)
        ->delete();

    //Send Email Reset Success Email
    if ($this->sendSuccessEmail($tokenData->email)) {
        return view('index');
    } else {
        return redirect()->back()->withErrors(['email' => trans('A Network Error occurred. Please try again.')]);
    }

}
}
