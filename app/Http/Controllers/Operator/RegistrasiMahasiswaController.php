<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use App\Models\Registrasi;
use Illuminate\Http\Request;

class RegistrasiMahasiswaController extends Controller
{
    public function index(){
        $regis = Registrasi::with(['profil' => function($q) {
            $q->with('prodi','fakultas')->get();
        }, 'bukti_pembayaran' => function($q) {
            $q->get();
        }, 'bukti_regis'])->latest()->get();
        $registrasi = Registrasi::where('status_lihat_registrasi', 'belum di lihat')->get();
        foreach($registrasi as $item){
            $item->update([
                'status_lihat_registrasi' => 'di lihat',
            ]);
        }
        return inertia('Operator/Registrasi/DataRegistrasi', ['registrasi' => $regis]);
    }
}