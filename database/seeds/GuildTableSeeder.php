<?php

use App\Guild;
use Illuminate\Database\Seeder;

class GuildTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for($i = 0; $i < 50; $i++) {
            Guild::create([
                'name' => $faker->name,
                'info' => $faker->text
            ]);
        }
    }
}
