<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{
    protected $table = 'guilds';

    /**
     * @var bool
     */
    public $timestamps = false;

    protected $fillable = [
        'name',
        'info',
        'image'
    ];
}
