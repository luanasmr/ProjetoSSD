<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Processos;


class ProcessosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()-> json(Processos::all());

    }


    public function store(Request $request)
    {
        $request->validate([
            'status_processo' => ['required', 'max:255'],
            'vaga_id' => ['required', 'max:255'],
            'candidato_id' => ['required'],
            'fase_id' => ['required'],
        ]);
        if (Processos::create($request->all())) {
          return response('Processo seletivo aberto!');
        }
        return response('Erro ao abrir processo seletivo!', 502);                                     // todas as requisições com $request
    }

    public function show($id)
    {
        return Processos::findOrFail($id); //receber id
    }


    public function update(Request $request, $id)
    {
        $processos = Processos::findOrFail($id);
        if ($processos ->update($request->all())) {
            return response('Processo atualizado!');
        }
        return response('Processo não atualizado!', 502);
    }

    public function destroy($id)
    {
        $processos = Processos::findOrFail($id);
        if ($processos ->delete()) {
            return response('Processo Finalizado!');
        }
        return response('Processo não finalizado!', 502);
    }
}
