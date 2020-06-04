<?php

namespace App\Http\Controllers;

use App\UserFriendRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserFriendController extends Controller
{

    public function add(Request $request)
    {
        if ($this->verifyAuthKey($request['user_id'], $request['auth_key'])) {
            $friendRequest = new UserFriendRequest();
            $friendRequest->user_id = $request['user_id'];
            $friendRequest->friend_id = $request['friend_id'];
            $friendRequest->save();
            return response()->json($friendRequest, 201);

        }
        return 'invalid';
    }

    public function remove(Request $request)
    {
        //@todo code here is to remove friendrequest, not friend.
//        if ($this->verifyAuthKey($request['user_id'], $request['auth_key'])) {
//            $friendRequest = UserFriendRequest::where('user_id', $request['user_id'])->orWhere('friend_id', $request['user_id'])->orWhere('user_id', $request['friend_id'])->orWhere('friend_id', $request['friend_id'])->first();
//            $friendRequest->delete();
//            return response()->json($friendRequest, 201);
//
//        }
        return 'invalid';
    }

    public function accept(Request $request)
    {

    }

    public function decline(Request $request)
    {

        if ($this->verifyAuthKey($request['user_id'], $request['auth_key'])) {
            $friendRequest = UserFriendRequest::where(function ($query) use($request) {
                $query->where('user_id', '=', $request['user_id'])->where('friend_id', '=', $request['friend_id']);
            })->orWhere(function ($query) use($request) {
                $query->where('user_id', '=', $request['friend_id'])->where('friend_id', '=', $request['user_id']);
            });
            $friendRequest->delete();
            return response()->json($friendRequest, 201);

        }
        return 'invalid';
    }

    public function friends($show = 'all')
    {
        //Get all user friends
        // if show = 'online'
        // if show = 'offline'
    }

    public function userFriends($id, $show = 'all')
    {
        //Get all user friends by id
        // if show = 'online'
        // if show = 'offline'
    }
}
