<?php

namespace App\Http\Controllers;

use App\Feed;
use App\FeedLikes;
use Illuminate\Http\Request;

class FeedController extends Controller
{


    public function getMessages(Request $request, $id = 'all') {

        if(is_numeric($id)) {
            $message = Feed::whereNull('message_id')->find($id);
            $messages = $this->getMessage($message, $request['user_id']);
        } else {
            $messages = Feed::whereNull('message_id')->get();
            foreach($messages as $key =>$message) {
                $messages[$key] = $this->getMessage($message, $request['user_id']);
            }
        }

        return response()->json($messages);

    }

    public function likeMessage(Request $request, $id) {
        $message = Feed::find($id);
        $liked = $message->likedByUser($request['user_id']);
        if($liked->count() > 0) {
            //user liked the post, dislike
            $likedPost = $liked->first();
            $likedPost->delete();
        } else {
            //user hasn't liked the post, like.
            $likedPost = new FeedLikes;
            $likedPost->user_id = $request['user_id'];
            $likedPost->message_id = $id;
            $likedPost->save();
        }
        return response()->json(true);
    }

    public function replyMessage(Request $request, $id = 'new') {
        $post = new Feed;
        if(is_numeric($id)) {
            //Add reply to post
            $post->message_id = $id;
        }

        $post->message = $request['message'];
        $post->user_id = $request['user_id'];
        $post->save();
        return response()->json($post);
    }

    private function getMessage($message, $userId) {
        $message['likes'] = $message->likes()->count();
        $user = $message->userinfo()->first(['username', 'img_small']);
        $message['username'] = $user->username;
        $message['img_small'] = $user->img_small;
        $message['liked'] = $message->likedByUser($userId)->count() > 0;
        $comments = $message->replies();
        $message['comment_count'] = $comments->count();
        $message['comments'] = $comments->get();

        foreach($message['comments'] as $comment) {
            $reply = Feed::find($comment->id);
            $user = $reply->userinfo()->first(['username', 'img_small']);
            $comment['username'] = $user->username;
            $comment['img_small'] = $user->img_small;
            $comment['liked'] = $reply->likedByUser($userId)->count() > 0;
            $comment['likes'] = $reply->likes()->count();
        }

        return $message;
    }
}
