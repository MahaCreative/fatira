<?php

namespace App\Http\Controllers;

use App\Models\UploadPembayaranRegistrasi;
use Illuminate\Http\Request;

class HistoryPembayaranController extends Controller
{
    public function index(Request $request){
        $pembayaran = UploadPembayaranRegistrasi::where('user_id', $request->user()->id)->latest()->get();
        return inertia('History/HistoryPembayaran', ['pembayaran' => $pembayaran]);
    }
}