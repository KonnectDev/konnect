<?php

use App\Guild;
use Illuminate\Database\Seeder;

class GuildTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param $groupCount
     * @return void
     */
    public function run($groupCount)
    {
        $faker = \Faker\Factory::create();

        for($i = 0; $i < $groupCount; $i++) {
            Guild::create([
                'name' => $faker->name,
                'info' => $faker->text
            ]);
        }
    }
}
