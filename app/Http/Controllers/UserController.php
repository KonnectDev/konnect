<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {

        return User::all(['id', 'username', 'firstname', 'lastname', 'img_small', 'level']);

    }

    public function show($id)
    {
        if (is_numeric($id)) {
            $user = User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level']);
        } else {
            $user = User::where('username', $id)->first(['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level']);
        }
        if ($user) {
            return $user;
        }
        return ['User not found'];

    }

    public function find($string)
    {

        return User::where('username', 'LIKE', $string . '%')->get(['id', 'username', 'firstname', 'lastname', 'img_small', 'level']);

    }

    public function showDetailed($id, $string)
    {
        if (in_array($string, ['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level'])) {
            return User::find($id, [$string]);
        }
        return User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio', 'level']);

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

}
