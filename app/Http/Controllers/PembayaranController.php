<?php

namespace App\Http\Controllers;

use App\Models\UploadPembayaranRegistrasi;
use Illuminate\Http\Request;

class PembayaranController extends Controller
{
    public function store(Request $request){
        $countPembayaran = UploadPembayaranRegistrasi::count();
        $code = 'PB/'.now()->format('Y-m-d').'/FK/'.$request->fakultas_id.'/PD/'.$request->prodi_id.'/KD00/'.$countPembayaran;
        $url = $request->file('bukti_pembayaran') ? $request->file('bukti_pembayaran')->store($request->nim. 'public/bukti_pembayaran') : null;
        $pembayaran = UploadPembayaranRegistrasi::create([
            'registrasi_id' => $request->registrasi_id,
            'user_id' => $request->user()->id,
            'profil_id' => $request->profil_id,
            'bank_id' => $request->bank_id,
            'nama_rekening' => $request->nama_rekening,
            'nomor_rekening' => $request->nomor_rekening,
            'tanggal_pembayaran' => $request->tanggal_pembayaran,
            'bukti_pembayaran' => $url,
        ]);
        $pembayaran->registrasi->update(
            ['status_pembayaran' => "Pembayaran Sedang Di Proses"]
        );
        // dd($request->all());
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menambah Data'
        ]);
    }
}