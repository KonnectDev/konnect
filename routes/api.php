<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
use App\Guild;
use App\GuildMember;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('user/{id}', function($id) {
    return User::find($id);
});

Route::get('users', function() {
    return User::all();
});

Route::get('guilds', function() {
    return Guild::all();
});

Route::get('guild/{id}', function($id) {
    return Guild::find($id);
});
