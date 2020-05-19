<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index() {

        return User::all();

    }
    public function show($id) {

        return User::find($id);

    }
    public function login(Request $request) {

        return DB::table('users')->where([
            'username' => $request['username'],
            'password' => md5($request['password'])
        ])->get(['username', 'auth_key']);

    }
}
