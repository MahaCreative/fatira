<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use App\Models\Fakultas;
use Illuminate\Http\Request;

class FakultasController extends Controller
{
    public function index(){
        $fakultas = Fakultas::with('prodi')->get();
        return inertia('Operator/Fakultas/Fakultas', ['fakultas' => $fakultas]);
    }
    public function store(Request $request){
        $fakultas = Fakultas::create([
            'kd_fak' => $request->kd_fak,
            'fakultas' => $request->fakultas,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menambah Data'
        ]);
    }
    public function update(Request $request){
        // dd($request->all());
        $fakultas = Fakultas::findOrFail($request->id);
        $fakultas->update([
            'kd_fak' => $request->kd_fak,
            'fakultas' => $request->fakultas,]);
            return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengedit Data'
        ]);
    }
    public function delete(Request $request){
        $fakultas = Fakultas::findOrFail($request->id);
        $fakultas->delete();
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menghapus Data'
        ]);
    }
}