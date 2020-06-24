<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Feed extends Model
{
    protected $table = 'feed_messages';

    protected $fillable = ['user_id', 'message'];

    public function likes() {
        return $this->hasMany('App\FeedLikes', 'message_id', 'id');
    }

    public function userinfo() {
        return $this->hasOne('App\User', 'id', 'user_id');
    }

    public function replies() {
        return $this->hasMany('App\Feed', 'message_id', 'id');
    }


}
