<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserFriends extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_friendships', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('friend_id');
        });

        Schema::create('user_friendrequests', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('friend_id');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
