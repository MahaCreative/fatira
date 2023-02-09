<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registrasi extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function profil(){
        return $this->belongsTo(Profil::class, 'profil_id');
    }
    public function petugas(){
        return $this->hasOne(User::class, 'petugas_id');
    }
    public function bukti_pembayaran(){
        return $this->hasOne(UploadPembayaranRegistrasi::class);
    }
    public function bukti_regis(){
        return $this->hasOne(BuktiRegistrasi::class, 'registrasi_id');
    }
}