<?php

namespace App\Http\Controllers;

use App\UserFriendRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserFriendController extends Controller
{

    public function add(Request $request)
    {
        if($this->verifyAuthKey($request['user_id'], $request['auth_key'])) {
            $friendRequest = new UserFriendRequest();
            $friendRequest->user_id = $request['user_id'];
            $friendRequest->friend_id = $request['friend_id'];
            $friendRequest->save();
        }
        return 'invalid';
    }

    public function remove(Request $request)
    {
        if($this->verifyAuthKey($request['user_id'], $request['auth_key'])) {
            $friendRequest = UserFriendRequest::where('user_id', $request['user_id'])->first();
            $friendRequest->delete();
        }
        return 'invalid';
    }

    public function accept(Request $request)
    {

    }

    public function decline(Request $request)
    {
        //Remove a friend from user friendrequests
        // delete friendrequest
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
