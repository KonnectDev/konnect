<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserFriendship extends Model
{
    /**
     * @var string
     */
    protected $table = 'user_friendships';

    /**
     * @var bool
     */
    public $timestamps = false;
}
