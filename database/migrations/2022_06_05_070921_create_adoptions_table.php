<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdoptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adoptions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->boolean('vaccinated');
            $table->boolean('neutered');
            $table->string('kind');
            $table->string('size');
            $table->integer('age');
            $table->string('race')->nullable();
            $table->string('gender');

            $table->string('primary_image');
            $table->string('secondary_image')->nullable();
            $table->string('thirdary_image')->nullable();

            $table->boolean('published')->default(false);

            $table->unsignedBigInteger('shelter_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('shelter_id')->references('id')->on('shelters');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adoptions');
    }
}
