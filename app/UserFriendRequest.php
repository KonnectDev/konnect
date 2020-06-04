<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserFriendRequest extends Model
{
    /**
     * @var string
     */
    protected $table = 'user_friendrequests';

    /**
     * @var bool
     */
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'friend_id'
    ];

}
