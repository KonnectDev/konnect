<?php

use App\Http\Middleware\VerifyAuthKey;
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
Route::get('users/{string}', 'UserController@find');


// api/user
Route::get('user/{id}', 'UserController@show');
Route::get('user/{id}/{string}', 'UserController@showDetailed');
Route::post('user/login', 'UserController@login');
Route::put('user/register', 'UserController@register');
Route::post('user/forgotpassword','auth\ForgotPasswordController@ForgotPasswordController' );
Route::put('user/resetpassword','auth\resetpasswordcontroller@ResetPasswordController');

// api/user/friend
Route::middleware([VerifyAuthKey::class])->put('user/friend/add', 'UserFriendController@add');
Route::middleware([VerifyAuthKey::class])->delete('user/friend/delete', 'UserFriendController@delete');
Route::middleware([VerifyAuthKey::class])->put('user/friend/request/accept', 'UserFriendController@accept');
Route::middleware([VerifyAuthKey::class])->delete('user/friend/request/decline', 'UserFriendController@decline');

//Must be get, but ain't working.
Route::middleware([VerifyAuthKey::class])->post('user/friends', 'UserFriendController@userFriends');
Route::middleware([VerifyAuthKey::class])->post('user/friends/requests', 'UserFriendController@userFriendRequests');
