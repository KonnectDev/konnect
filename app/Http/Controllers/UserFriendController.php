<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserFriendController extends Controller
{

    public function add(Request $request)
    {
        if($this->verifyAuthKey($request['user_id'], $request['auth_key'])) {
            //Request to add friend to user_friendrequests
            // insert into user_friendrequests
            return $this->parseResponse();
        }
        return $this->parseResponse();
    }

    public function remove(Request $request)
    {
        //Remove a friend from user_friendships
        // delete user_friendship
    }

    public function accept(Request $request)
    {
        //Accept friendship request
        // delete friendrequest
        // insert into user_friendships
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
