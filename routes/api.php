<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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


// api/users
Route::get('users', 'UserController@index');

// api/user
Route::get('user/{id}', 'UserController@show');
Route::get('user/{id}/{string}', 'UserController@showDetailed');
Route::post('user/login', 'UserController@login');
Route::put('user/register', 'UserController@register');
Route::post('user/password/forget', 'UserController@passwordRecovery');

// api/user/friend
Route::put('user/friend/add', 'UserFriendController@add');
Route::delete('user/friend/delete', 'UserFriendController@delete');
Route::put('user/friend/request/accept', 'UserFriendController@accept');
Route::delete('user/friend/request/decline', 'UserFriendController@decline');

Route::post('user/friends', 'UserFriendController@userFriends');
