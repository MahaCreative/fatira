<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Profil;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */

     public function profileStore(Request $request){

        $user = $request->user();

        $url = $request->file('thumbnail') ? $request->file('thumbnail')->store('public/images/profile') : null;
        // dd($request->all());
        $roles = $request->user()->roles()->first();
       if($roles->name === 'mahasiswa'){
         $request->validate([
            'nama_lengkap' => ['required', 'min:4'],
            'ttl' => ['required', 'date', 'before:now'],
            'telp' => ['required', 'numeric',],
            'alamat' => ['required'],
            'nim' => ['required', 'unique:profils,nim,except,id'],
            'fakultas_id' => ['required'],
            'prodi_id' => ['required'],
            'semester' => ['required'],
            'thumbnail' => ['image', 'mimes:png,jpg,jpeg'],
        ]);
       }else{
        $request->validate([
            'nama_lengkap' => ['required', 'min:4'],
            'ttl' => ['required', 'date', 'before:now'],
            'telp' => ['required', 'numeric',],
            'alamat' => ['required'],
            'thumbnail' => ['image', 'mimes:png,jpg,jpeg'],
        ]);
       }

       Profil::create([
            'nama_lengkap' => $request->nama_lengkap,
            'ttl' => $request->ttl,
            'telp' => $request->telp,
            'alamat' => $request->alamat,
            'nim' => $request->nim,
            'fakultas_id' => $request->fakultas_id,
            'prodi_id' => $request->prodi_id,
            'user_id' => $request->user()->id,
            'semester' => $request->semester,
            'thumbnail' => $url,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengupdate Profil'
        ]);
     }
    public function profileUpdate(Request $request){

        $user = $request->user()->profile;
        $url = $request->file('thumbnail') ? $request->file('thumbnail')->store('public/images/profile') : $user->thumbnail;
        $user->update([
            'nama_lengkap' => $request->data['nama_lengkap'],
            'ttl' => $request->data['ttl'],
            'telp' => $request->data['telp'],
            'alamat' => $request->data['alamat'],
            'nim' => $request->data['nim'],
            'fakultas_id' => $request->data['fakultas_id'],
            'prodi_id' => $request->data['prodi_id'],
            'user_id' => $request->user()->id,
            'semester' => $request->data['semester'],
            'thumbnail' => $url,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengupdate Profil'
        ]);
    }

    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengupdate Profil'
        ]);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}