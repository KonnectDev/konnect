<?php

namespace App\Http\Controllers;

use App\Guild;
use App\GuildMember;
use Illuminate\Http\Request;

class GuildController extends Controller
{
    public function getGuilds($id = 'all') {
        if(is_numeric($id)) {
            $guilds = Guild::find($id);
        } else {
            $guilds = Guild::all();
        }
        return response()->json($guilds, 200);
    }

    public function getGuildMembers($guildId) {
        $guildMembers = GuildMember::where('guild_id', $guildId)->join('users', function ($join) {
            $join->on('users.id', '=', 'guild_members.user_id');
        })->get(['users.id', 'users.username', 'users.img_small', 'users.level', 'guild_members.guild_rank']);
        return response()->json($guildMembers, 200);
    }

    public function getUserGuilds($userId) {
        $guilds = Guild::join('guild_members.guild_id', '=', 'guild.id')->where('guild_members.user_id', $userId)->get();
    }
}
