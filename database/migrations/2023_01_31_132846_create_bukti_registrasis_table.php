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
        Schema::create('bukti_registrasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('petugas_id');
            $table->foreignId('mahasiswa_id');
            $table->foreignId('registrasi_id');
            $table->foreignId('bukti_pembayaran_id');
            $table->date('tanggal_di_setujui');
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
        Schema::dropIfExists('bukti_registrasis');
    }
};
