<?php

use App\Guild;
use App\GuildMember;
use App\User;
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
        // $this->call(UserSeeder::class);
        $this->call(UserTableSeeder::class);
        $users = User::all();


        $faker = \Faker\Factory::create();
        $i = 0;
        $guild = '';
        foreach ($users as $user) {
            if ($i == 4) $i = 0;

            if ($i == 0) {
                //Create a guild.
                $guild = Guild::create([
                    'name' => $faker->name,
                    'info' => $faker->text
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
