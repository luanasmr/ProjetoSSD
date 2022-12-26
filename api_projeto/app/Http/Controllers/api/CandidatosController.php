<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Candidatos;


class CandidatosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Candidatos::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'nome' => ['required', 'max:255'],
            'email' => ['required', 'unique:candidatos', 'max:255'],
            'telefone' => ['required', 'max:255'],
            'endereco' => ['required', 'max:255'],
        ]);
        if (Candidatos::create($request->all())) {
            return response('Candidato cadastrado!');
        }
        return response('Candidato não cadastrado', 502);                                     // todas as requisições com $request
    }

    public function show($id)
    {
        return Candidatos::findOrFail($id); //receber id
    }


    public function update(Request $request, $id)
    {
        $candidatos = Candidatos::findOrFail($id);
        if ($candidatos->update($request->all())) {
            return response('Candidato atualizado!');
        }
        return response('Candidato não atualizado!', 502);
    }

    public function destroy($id)
    {
        $candidatos = Candidatos::findOrFail($id);
        if ($candidatos->delete()) {
            return response('Candidato removido!');
        }
        return response('Candidato não removido!', 502);
    }
}
