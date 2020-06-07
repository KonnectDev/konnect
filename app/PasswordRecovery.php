<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasswordRecovery extends Model
{

    /**
     * @var string
     */
    protected $table = 'password_recovery';

    /**
     * @var bool
     */
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'token'
    ];

}
