<?php

namespace App\Http\Controllers;

use App\Models\DataBankTomakaka;
use Illuminate\Http\Request;

class DataBankTomakakaController extends Controller
{
    public function index(){
        $bank = DataBankTomakaka::all();
        return inertia('DataBank/Databank', ['bank' => $bank]);
    }
    public function store(Request  $request){
        DataBankTomakaka::create([
            'bank_id' => $request->bank_id,
            'nama_rekening' => $request->nama_rekening,
            'nomor_rekening' => $request->nomor_rekening,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menambah Data'
        ]);
    }
    public function update(Request  $request){
        $bank = DataBankTomakaka::findOrFail($request->bank_id);
        $bank->update([
            'bank_id' => $request->bank_id,
            'nama_rekening' => $request->nama_rekening,
            'nomor_rekening' => $request->nomor_rekening,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengedit Data'
        ]);
    }
}