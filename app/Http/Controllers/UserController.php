<?php

namespace App\Http\Controllers;

use App\User;
use App\PasswordRecovery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {

        return User::all(['id', 'username', 'firstname', 'lastname', 'img_small']);

    }

    public function show($id)
    {

        return User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio']);

    }

    public function showDetailed($id, $string)
    {
        if (in_array($string, ['username', 'firstname', 'lastname', 'img_medium', 'bio'])) {
            return User::find($id, [$string]);
        }
        return User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio']);

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

    public function passwordRecovery(Request $request)
    {
        //@todo jake finish function
        $user = DB::table('users')->where([
            'email' => $request['email']
        ])->first(['id', 'email']);
        return response()->json($user, 200);


    }
}
