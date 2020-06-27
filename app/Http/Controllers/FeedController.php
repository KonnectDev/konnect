<?php

namespace App\Http\Controllers;

use App\Feed;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function getMessages($id = 'all') {
        if(is_numeric($id)) {
            $message = Feed::whereNull('message_id')->find($id);
            $messages = $this->getMessage($message);
        } else {
            $messages = Feed::whereNull('message_id')->get();
            foreach($messages as $key =>$message) {
                $messages[$key] = $this->getMessage($message);
            }
        }

        return response()->json($messages);

    }

    private function getMessage($message) {
        $message['likes'] = $message->likes()->count();
        $user = $message->userinfo()->first(['username', 'img_small']);
        $message['username'] = $user->username;
        $message['img_small'] = $user->img_small;

        $comments = $message->replies();
        $message['comment_count'] = $comments->count();
        $message['comments'] = $comments->get();

        foreach($message['comments'] as $comment) {
            $reply = Feed::find($comment->id);
            $user = $reply->userinfo()->first(['username', 'img_small']);
            $comment['username'] = $user->username;
            $comment['img_small'] = $user->img_small;
            $comment['likes'] = $reply->likes()->count();
        }

        return $message;
    }
}
