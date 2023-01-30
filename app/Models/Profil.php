<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profil extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function fakultas(){
        return $this->belongsTo(Fakultas::class, 'fakultas_id');
    }
    public function prodi(){
        return $this->belongsTo(ProgramStudi::class, 'prodi_id');
    }
}