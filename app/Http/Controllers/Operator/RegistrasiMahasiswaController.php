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

        return inertia('Operator/Registrasi/DataRegistrasi', ['registrasi' => $regis]);
    }
}