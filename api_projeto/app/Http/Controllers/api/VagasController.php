<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vagas;


class VagasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Vagas::all();
    }


    public function store(Request $request)
    {
        $request->validate([
            'cargo' => ['required', 'max:255'],
            'descricao' => ['required', 'unique:vagas', 'max:255'],
            'horario' => ['required', 'max:255'],
            'cidade' => ['required', 'max:255'],
            'remuneracao' => ['required', 'max:255'],
            'quantidade' => ['required'],
            'requesitos' => ['required'],
            'status' => ['required'],
            'empresa_id' => ['required'],
        ]);
        if (Vagas::create($request->all())) {
            return response('Vaga Cadastrada!');
        }
        return response('Vaga não cadastrado', 502);
    }

    public function show($id)
    {
        return Vagas::findOrFail($id); //receber id
    }


    public function update(Request $request, $id)
    {
        $vagas = Vagas::findOrFail($id);
        if ($vagas->update($request->all())) {
            return response('Vaga atualizada!');
        }
        return response('Vaga não atualizada', 502);
    }

    public function destroy($id)
    {
        $candidatos = Vagas::findOrFail($id);
        if ($candidatos->delete()) {
            return response('Vaga Finalizada!');
        }
        return response('Vaga não finalizada!', 502);
    }
}
