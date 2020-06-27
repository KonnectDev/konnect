<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeedLikes extends Model
{
    protected $table = 'feed_likes';

    protected $fillable = ['message_id'];
}
