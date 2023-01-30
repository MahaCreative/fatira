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
        Schema::create('registrasis', function (Blueprint $table) {
            $table->id();
            $table->string('kd_registrasi');
            $table->foreignId('jenis_registrasi_id');
            $table->foreignId('user_id');
            $table->foreignId('profil_id');
            $table->foreignId('petugas_id')->nullable();
            $table->date('tanggal_registrasi');
            $table->date('tanggal_disetujui')->nullable();
            $table->string('status_lihat_registrasi')->default('belum di lihat');
            $table->string('status_registrasi')->default('menunggu pengecekan data');
            $table->string('status_pembayaran')->default('Menunggu Proses Pembayaran');
            $table->string('semester');
            $table->string('pdpt');
            $table->string('kwitansi');
            $table->string('krs');
            $table->string('blanko_registrasi');
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
        Schema::dropIfExists('registrasis');
    }
};