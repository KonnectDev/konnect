<?php

namespace App\Http\Controllers;

use App\UserFriendRequest;
use App\UserFriendship;
use App\User;
use Illuminate\Http\Request;


class UserFriendController extends Controller
{

    public function add(Request $request)
    {

        $friendRequest = new UserFriendRequest();
        $friendRequest->user_id = $request['user_id'];
        $friendRequest->friend_id = $request['friend_id'];
        $friendRequest->save();
        return response()->json($friendRequest, 200);

    }

    public function delete(Request $request)
    {
        $UserFriendship = UserFriendship::where(function ($query) use ($request) {
            $query->where('user_id', '=', $request['user_id'])->where('friend_id', '=', $request['friend_id']);
        })->orWhere(function ($query) use ($request) {
            $query->where('user_id', '=', $request['friend_id'])->where('friend_id', '=', $request['user_id']);
        });
        $UserFriendship->delete();
        return response()->json($UserFriendship, 200);


    }

    public function accept(Request $request)
    {
        $UserFriendship = new UserFriendship();
        $UserFriendship->user_id = $request['user_id'];
        $UserFriendship->friend_id = $request['friend_id'];
        $UserFriendship->save();
        $this->decline($request);
        return response()->json($UserFriendship, 200);


    }

    public function decline(Request $request)
    {
        $friendRequest = UserFriendRequest::where(function ($query) use ($request) {
            $query->where('user_id', '=', $request['user_id'])->where('friend_id', '=', $request['friend_id']);
        })->orWhere(function ($query) use ($request) {
            $query->where('user_id', '=', $request['friend_id'])->where('friend_id', '=', $request['user_id']);
        });
        $friendRequest->delete();
        return response()->json($friendRequest, 200);


    }

    public function userFriends(Request $request)
    {

        $userFriends = UserFriendship::where('users.id', '!=', $request['user_id'])->where('user_id', '=', $request['user_id'])->orWhere('friend_id', '=', $request['user_id'])
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'user_friendships.friend_id')->orOn('users.id', '=', 'user_friendships.user_id');
            })
            ->where('users.id', '!=', $request['user_id'])
            ->get(['users.id', 'users.username', 'users.img_small', 'users.level']);


        return response()->json($userFriends, 200);
    }
    public function userNotFriends(Request $request)
    {

        //Niet de beste manier maar het werkt dus he waarom niet.

        $notUserFriends  = (array) UserFriendship::where('user_id', '=', $request['user_id'])->where('users.id', '!=', $request['user_id'])->orWhere('friend_id', '=', $request['user_id'])
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'user_friendships.friend_id')->orOn('users.id', '=', 'user_friendships.user_id');
            })
            ->where('users.id', '!=', $request['user_id'])
            ->get(['users.id', 'users.username', 'users.img_small', 'users.level']);

        $users = User::all(['users.id', 'users.username', 'users.img_small', 'users.level']);


        foreach($users as $key => $user) {
            if(in_array($user, $notUserFriends)) {
                unset($users[$key]);
            }
        }
        return response()->json($users, 200);
    }

    public function userFriendRequests(Request $request)
    {


        $userFriendRequests = UserFriendRequest::where('friend_id', '=', $request['user_id'])
            ->join('users', function ($join) {
                $join->on('users.id', '=', 'user_friendrequests.friend_id')->orOn('users.id', '=', 'user_friendrequests.user_id');
            })
            ->where('users.id', '!=', $request['user_id'])->distinct('users.id')
            ->get(['users.id', 'users.username', 'users.img_small']);

        return response()->json($userFriendRequests, 200);
    }
}
