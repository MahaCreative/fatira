<?php

use App\Http\Controllers\CetakBuktiRegistrasiController;
use App\Http\Controllers\DataBankTomakakaController;
use App\Http\Controllers\HistoryPembayaranController;
use App\Http\Controllers\HistoryRegistrasiController;
use App\Http\Controllers\Operator\FakultasController;
use App\Http\Controllers\Operator\ProdiController;
use App\Http\Controllers\Operator\RegistrasiMahasiswaController as OperatorRegistrasiMahasiswaController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProsesRegistrasiController;
use App\Http\Controllers\RegistrasiMahasiswaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});
Route::get('logout', function () {
    Auth::logout();
})->name('logout');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile', [ProfileController::class, 'profileStore'])->name('profile.profileStore');
    Route::put
    ('/profile', [ProfileController::class, 'profileUpdate'])->name('profile.profileUpdate');
    Route::middleware('isProfil')->group(function () {

    Route::get('transaksi-registrasi-mahasiswa', [RegistrasiMahasiswaController::class, 'index'])->name('transaksi-registrasi-mahasiswa');
    // Route::get('transaksi-registrasi-mahasiswa/{registrasi}', [RegistrasiMahasiswaController::class, 'show'])->name('transaksi-registrasi-mahasiswa.show');
    Route::post('transaksi-registrasi-mahasiswa', [RegistrasiMahasiswaController::class, 'store'])->name('transaksi-registrasi-mahasiswa');
    Route::put('transaksi-registrasi-mahasiswa', [RegistrasiMahasiswaController::class, 'update'])->name('transaksi-registrasi-mahasiswa');

    Route::get('history-registrasi-mahasiswa', [HistoryRegistrasiController::class, 'index'])->name('history-registrasi-mahasiswa');


    Route::get('history-pembayaran-registrasi', [HistoryPembayaranController::class, 'index'])->name('history-pembayaran-registrasi');
    Route::post('pembayaran-registrasi', [PembayaranController::class, 'store'])->name('pembayaran-registrasi.store');


    // Route Admin Controller
    Route::get('data-bank-tomakaka', [DataBankTomakakaController::class, 'index'])->name('bank-tomakaka');
    Route::post('data-bank-tomakaka', [DataBankTomakakaController::class, 'store'])->name('bank-tomakaka');
    Route::put('data-bank-tomakaka', [DataBankTomakakaController::class, 'update'])->name('bank-tomakaka');
    Route::delete('data-bank-tomakaka', [DataBankTomakakaController::class, 'delete'])->name('bank-tomakaka');

    Route::get('admin-registrasi-mahasiswa', [OperatorRegistrasiMahasiswaController::class, 'index'])->name('admin-registrasi-mahasiswa');

    Route::get('admin-prodi', [ProdiController::class, 'index'])->name('admin-prodi');
    Route::post('admin-prodi', [ProdiController::class, 'store'])->name('admin-prodi');
    Route::put('admin-prodi', [ProdiController::class, 'update'])->name('admin-prodi');
    Route::delete('admin-prodi', [ProdiController::class, 'delete'])->name('admin-prodi');

    Route::get('admin-fakultas', [FakultasController::class, 'index'])->name('admin-fakultas');
    Route::post('admin-fakultas', [FakultasController::class, 'store'])->name('admin-fakultas');
    Route::put('admin-fakultas', [FakultasController::class, 'update'])->name('admin-fakultas');
    Route::delete('admin-fakultas', [FakultasController::class, 'delete'])->name('admin-fakultas');
    // Route::get('admin-registrasi-mahasiswa', [OperatorRegistrasiMahasiswaController::class, 'index']);
    Route::post('proses-registrasi-mahasiswa', [ProsesRegistrasiController::class, 'store'])->name('proses-registrasi');
    });
    Route::get('cetak-bukti-registrasi/{id}', [CetakBuktiRegistrasiController::class, 'index'])->name('cetak-bukti-regi');
});

require __DIR__.'/auth.php';