<?php

namespace App\Http\Controllers;

use App\Feed;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function getMessages($id = 'all') {
        if(is_numeric($id)) {
            $messages = Feed::find($id);
            $messages['likes'] = Feed::find($id)->likes()->count();
        } else {
            $messages = Feed::all();
            foreach($messages as $message) {
                $message['likes'] = $message->likes()->count();
            }
        }

        return response()->json($messages);

    }
}
