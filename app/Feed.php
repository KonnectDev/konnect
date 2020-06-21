<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\FeedLikes;

class Feed extends Model
{
    protected $table = 'feed_messages';

    protected $fillable = ['user_id', 'message'];

    public function likes() {
        return $this->hasMany('App\FeedLikes', 'message_id', 'id');
    }

    public function replies() {
        return $this->belongsTo('feed_messages', 'message_id');
    }


}
