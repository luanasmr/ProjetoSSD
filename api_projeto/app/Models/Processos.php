<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Processos extends Model
{
    use HasFactory;
    protected $fillable = [
        'status_processos', 'vaga_id', 'candidato_id', 'fase_id'
    ];
}
