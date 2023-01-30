<?php

namespace App\Http\Middleware;

use App\Models\Bank;
use App\Models\Fakultas;
use App\Models\JenisRegistrasi;
use App\Models\ProgramStudi;
use App\Models\Registrasi;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // dd($request->user() );
        return array_merge(parent::share($request), [
            'flash' => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'roles' => $request->user() ? $request->user()->roles()->first() : null,
            'fakultas' => Fakultas::get(),
            'prodi' => ProgramStudi::get(),
            'bank' => Bank::get(),
            'profil' => $request->user() ? $request->user()->profile()->with(['fakultas','prodi'])->first() : null,
            'jenis_registrasi' => JenisRegistrasi::all(),
            'message_registrasi' => Registrasi::with('profil')->where('status_lihat_registrasi', 'belum di lihat')->get(),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
