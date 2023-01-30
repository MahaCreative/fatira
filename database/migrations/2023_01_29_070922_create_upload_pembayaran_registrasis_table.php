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
        Schema::create('upload_pembayaran_registrasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('registrasi_id');
            $table->foreignId('user_id');
            $table->foreignId('profil_id');
            $table->foreignId('petugas_id')->nullable();
            $table->foreignId('bank_id');
            $table->string('nama_rekening');
            $table->string('nomor_rekening');
            $table->date('tanggal_pembayaran');
            $table->date('tanggal_disetujui')->nullable();
            $table->string('bukti_pembayaran');
            $table->string('status_pembayaran')->default('menunggu konfirmasi');

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
        Schema::dropIfExists('upload_pembayaran_registrasis');
    }
};