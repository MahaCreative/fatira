<?php

namespace App\Http\Controllers;

use App\Models\BuktiRegistrasi;
use App\Models\Registrasi;
use Illuminate\Http\Request;

class ProsesRegistrasiController extends Controller
{
    public function store(Request $request){
        // dd($request->all());
        $regis = Registrasi::with('profil','bukti_pembayaran')->where('id',$request->id)->first();

        $regis->update([
            'petugas_id' => $request->user()->id,
            'tanggal_disetujui' => now()->format('Y-m-d'),
            'status_registrasi' => 'Registrasi Telah Di Terima',
            'status_pembayaran' => 'Pembayaran Di Terima',
        ]);
        $regis->bukti_pembayaran()->update([
            'petugas_id' => $request->user()->id,
            'tanggal_disetujui' => now()->format('Y-m-d'),
            'status_pembayaran' => 'Pembayaran Di Terima',
        ]);

        $bukti_regis = BuktiRegistrasi::create([
            'petugas_id' => $request->user()->id,
            'mahasiswa_id' => $regis->profil->id,
            'registrasi_id' => $regis->id,
            'bukti_pembayaran_id' => $regis->bukti_pembayaran->id,
            'tanggal_di_setujui' => now()->format('Y-m-d'),
        ]);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Registrasi Telah Di Terima'
                ]
        );
    }
}