<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boards', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->comment('物品名');
            $table->string('label_number', 50)->nullable()->comment('テプラナンバー');
            $table->boolean('is_personal')->comment('私物かどうか');
            $table->string('image_path')->nullable()->comment('写真のURL');
            $table->string('detail', 200)->comment('紹介文');
            $table->softDeletes();
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
        Schema::dropIfExists('boards');
    }
}
