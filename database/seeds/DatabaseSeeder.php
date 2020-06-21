<?php

use App\Feed;
use App\FeedLikes;
use App\Guild;
use App\GuildMember;
use App\User;
use App\UserFriendRequest;
use App\UserFriendship;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Guild::truncate();
        UserFriendship::truncate();
        UserFriendRequest::truncate();
        GuildMember::truncate();
        Feed::truncate();
        FeedLikes::truncate();

        $this->call(UserTableSeeder::class);
        $users = User::all();


        $faker = \Faker\Factory::create();
        $i = 0;
        $guild = '';

        $totalUsers = count($users) - 1;
        foreach ($users as $user) {
            //Get random user id's
            while (in_array(($randomUser = mt_rand(1, $totalUsers)), array($user->id))) ;
            while (in_array(($randomUser2 = mt_rand(1, $totalUsers)), array($user->id, $randomUser))) ;
            while (in_array(($randomUser3 = mt_rand(1, $totalUsers)), array($user->id, $randomUser, $randomUser2))) ;


            if ($i == 4) {
                $i = 0;
                //We want some friendrequests aswell.
                UserFriendRequest::create([
                    'user_id' => $user->id,
                    'friend_id' => $randomUser,
                ]);
                UserFriendRequest::create([
                    'user_id' => $user->id,
                    'friend_id' => $randomUser2,
                ]);
                UserFriendRequest::create([
                    'user_id' => $user->id,
                    'friend_id' => $randomUser3,
                ]);
                Feed::create([
                    'user_id' => $user->id,
                    'message' => $faker->realText()
                ]);
            } else {
                //Make friends
                UserFriendship::create([
                    'user_id' => $user->id,
                    'friend_id' => $randomUser,
                ]);
                UserFriendship::create([
                    'user_id' => $user->id,
                    'friend_id' => $randomUser2,
                ]);
                UserFriendship::create([
                    'user_id' => $user->id,
                    'friend_id' => $randomUser3,
                ]);
                FeedLikes::create([
                    'message_id' => mt_rand(1, 15),
                    'user_id' =>  $user->id]);
            }

            if ($i == 0) {
                //Create a guild.
                $guild = Guild::create([
                    'name' => $faker->name,
                    'info' => $faker->realText()
                ]);
            }
            GuildMember::create([
                'user_id' => $user->id,
                'guild_id' => $guild->id,
                'guild_rank' => rand(0, 5)
            ]);
            $i++;


        }

    }

}
