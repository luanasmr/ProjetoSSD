<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionarios extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome', 'email', 'cargo', 'telefone', 'endereco','empresa_id'
    ];

}
