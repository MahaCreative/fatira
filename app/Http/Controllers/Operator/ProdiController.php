<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use App\Models\ProgramStudi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    public function index(Request $request){
        $prodi = ProgramStudi::with('fakultas')->latest()->get();
        // dd($prodi);
        return inertia('Operator/Prodi/Prodi', ['prodi' => $prodi]);
    }
    public function store(Request $request){
        $prodi = ProgramStudi::create([
            'kd_prodi' => $request->kd_prodi,
            'fakultas_id' => $request->fakultas_id,
            'prodi' => $request->prodi,

        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menambah Data'
        ]);
    }
    public function update(Request $request){
        $prodi = ProgramStudi::findOrFail($request->id);
        $prodi->update([
            'kd_prodi' => $request->kd_prodi,
            'fakultas_id' => $request->fakultas_id,
            'prodi' => $request->prodi,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengedit Data'
        ]);

    }
    public function delete(Request $request){
        // dd($request->all());
        $prodi = ProgramStudi::findOrFail($request->id);
        $prodi->delete();
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menghapus Data'
        ]);
    }
}
