<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profils', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap');
            $table->string('ttl');
            $table->string('telp');
            $table->string('alamat');
            $table->string('nim')->unique()->nullable();
            $table->foreignId('fakultas_id')->nullable();
            $table->foreignId('prodi_id')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->tinyInteger('semester')->nullable();
            $table->string('thumbnail')->unique()->nullable();
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
        Schema::dropIfExists('profils');
    }
};