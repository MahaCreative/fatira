<?php

namespace App\Http\Controllers;

use App\Models\Registrasi;
use Illuminate\Http\Request;

class RegistrasiMahasiswaController extends Controller
{
    public function index(){
        return inertia('Registrasi/RegistrasiMahasiswa');
    }
    public function store(Request $request){
        // dd($request->all());
        $countRegistrasi = Registrasi::count();
        $kd_registrasi = 'RG/'.now()->format('Y-m-d').'/FK/'.$request->fakultas_id.'/PD/'.$request->prodi_id.'/KD/00'. $countRegistrasi+1;
        $pdpt = $request->file('pdpt') ? $request->file('pdpt')->store($request->nim.'/File_Regis/pdpt') : null;
        $krs = $request->file('krs') ? $request->file('krs')->store($request->nim.'/File_Regis/krs') : null;
        $blanko = $request->file('blanko') ? $request->file('blanko')->store($request->nim.'/File_Regis/blanko') : null;
        $kwitansi = $request->file('kwitansi') ? $request->file('kwitansi')->store($request->nim.'/File_Regis/kwitansi') : null;
        $registrasi = Registrasi::create([
            'kd_registrasi' => $kd_registrasi,
            'jenis_registrasi_id' => $request->jenis_registrasi_id,
            'user_id' => $request->user()->id,
            'profil_id' => $request->user()->profile->id,
            'tanggal_registrasi' => now(),
            'pdpt' => $pdpt,
            'kwitansi' => $kwitansi,
            'semester' => $request->semester,
            'krs' => $krs,
            'blanko_registrasi' => $blanko,
        ]);
return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menambah Data'
        ]);
    }
}