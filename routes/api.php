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
Route::post('reset_password_without_token', 'UserController@validatePasswordRequest');
Route::post('reset_password_with_token', 'UserController@resetPassword');


// api/user/friend
Route::middleware([VerifyAuthKey::class])->put('user/friend/add', 'UserFriendController@add');
Route::middleware([VerifyAuthKey::class])->delete('user/friend/delete', 'UserFriendController@delete');
Route::middleware([VerifyAuthKey::class])->put('user/friend/request/accept', 'UserFriendController@accept');
Route::middleware([VerifyAuthKey::class])->delete('user/friend/request/decline', 'UserFriendController@decline');

//Must be get, but ain't working.
Route::middleware([VerifyAuthKey::class])->post('user/friends', 'UserFriendController@userFriends');
Route::middleware([VerifyAuthKey::class])->post('user/notfriends', 'UserFriendController@userNotFriends');
Route::middleware([VerifyAuthKey::class])->post('user/friends/requests', 'UserFriendController@userFriendRequests');

//Guilds
Route::middleware([VerifyAuthKey::class])->get('user/guilds', 'GuildController@getUserGuilds');
Route::middleware([VerifyAuthKey::class])->get('guilds', 'GuildController@getGuilds');
Route::middleware([VerifyAuthKey::class])->get('guild/{id}', 'GuildController@getGuilds');
Route::middleware([VerifyAuthKey::class])->get('guild/{id}/members', 'GuildController@getGuildMembers');

//Posts
Route::middleware([VerifyAuthKey::class])->get('posts', 'FeedController@getMessages');
Route::middleware([VerifyAuthKey::class])->get('post/{id}', 'FeedController@getMessages');
