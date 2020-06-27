<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feed_messages', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('guild_id')->nullable();
            $table->longText('message');
            $table->integer('message_id')->nullable();
            $table->timestamps();
        });

        Schema::create('feed_likes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('message_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feed_messages');
        Schema::dropIfExists('feed_likes');
    }
}
