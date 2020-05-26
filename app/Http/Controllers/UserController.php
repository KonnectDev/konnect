<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {

        return User::all(['id', 'username', 'firstname', 'lastname', 'img_small'] );

    }

    public function show($id)
    {

        return User::find($id, ['username', 'firstname', 'lastname', 'img_medium', 'bio']);

    }

    public function login(Request $request)
    {

        return DB::table('users')->where([
            'username' => $request['username'],
            'password' => md5($request['password'])
        ])->get(['id','username', 'auth_key']);

    }

    public function register(Request $request)
    {
        $request['auth_key'] = md5($request['username'] . time());
        $request['password'] = md5($request['password']);
        $user = User::create($request->all());
        return response()->json($user, 201);

    }
}
