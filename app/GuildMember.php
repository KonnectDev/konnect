<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GuildMember extends Model
{
    /**
     * @var string
     */
    protected $table = 'guild_members';

    /**
     * @var bool
     */
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'guild_id',
        'guild_rank'
    ];
}
