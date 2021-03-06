<?php

use App\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        User::truncate();
        for($i = 0; $i < 150; $i++) {
            $username = $faker->userName;
            User::create([
                'username' => $username,
                'email' => $faker->email,
                'firstname' => $faker->firstName,
                'lastname' => $faker->lastName,
                'password' => md5($username),
                'koins' => $faker->numberBetween(0, 99999),
                'phonenumber' => $faker->numberBetween(99999999, 999999999),
                'countrycode' => $faker->numberBetween(0, 99),
                'bio' => $faker->paragraph,
                'birthdate' => $faker->date(),
                'img_small' => 'https://dummyimage.com/120x120/a12fa1/ededed.png&text=' . substr($username, 0, 1),
                'img_medium' => 'https://dummyimage.com/250x250/a12fa1/ededed.png&text=' . substr($username, 0, 1),
                'auth_key' => md5($username . time()),
                'level' => mt_rand(1,100)
                ]);
        }
    }
}
