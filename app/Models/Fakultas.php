<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fakultas extends Model
{
    use HasFactory;
    protected $table = 'fakultas';
    protected $guarded = [];
    public function mahasiswa(){
        return $this->hasMany(Profil::class, 'fakultas_id');
    }
    public function prodi(){
        return $this->hasMany(ProgramStudi::class, 'fakultas_id');
    }
}