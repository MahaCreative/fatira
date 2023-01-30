<?php

namespace App\Http\Controllers;

use App\Models\Registrasi;
use Illuminate\Http\Request;

class HistoryRegistrasiController extends Controller
{
    public function index(Request $request){
        $registrasi = Registrasi::with('bukti_pembayaran')->where('user_id', $request->user()->id)->latest()->get();
        // dd($registrasi);
        return inertia('History/HistoryRegistrasi', ['registrasi' => $registrasi]);
    }
}