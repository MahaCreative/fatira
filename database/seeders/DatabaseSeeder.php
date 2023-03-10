<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Fakultas;
use App\Models\Profil;
use App\Models\ProgramStudi;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
DB::table('banks')->insert([
    ['nama_bank' => 'BRI']
]);

        DB::table('roles')->insert([
        [
            'name' => 'operator',
            'guard_name' => 'web'
        ],
        [
            'name' => 'mahasiswa',
            'guard_name' => 'web'
        ]
        ]);

        $userO= User::create([
            'name' => 'operator',
            'email' => 'operator@gmail.com',
            'password' => bcrypt('password')
        ]);
        $userO->assignRole('operator');
       $user= User::create([
            'name' => 'gunturmadjid',
            'email' => 'gunturmadjid.3@gmail.com',
            'password' => bcrypt('password')
        ]);
        $user->assignRole('mahasiswa');


        DB::table('fakultas')->insert([
            ['kd_fak' => 'FIKOM',
            'fakultas' => 'fakultas ilmu komputer',],
            ['kd_fak' => 'FT',
            'fakultas' => 'fakultas teknik']
        ]);
        DB::table('program_studis')->insert([
            [
                'fakultas_id' => 1,
                'prodi' => 'TEKNIK INFORMATIKA',
                'kd_prodi' => 'ti02'
            ],
            [
                'fakultas_id' => 1,
                'prodi' => 'SISTEM INFORMASI',
                'kd_prodi' => 'si01'
            ],
        ]);
        DB::table('jenis_registrasis')->insert([
            ['jenis_registrasi' => 'registrasi semester'],
            ['jenis_registrasi' => 'registrasi proposal'],
            ['jenis_registrasi' => 'registrasi hasil'],
            ['jenis_registrasi' => 'registrasi tutup'],
        ]);
    }
}