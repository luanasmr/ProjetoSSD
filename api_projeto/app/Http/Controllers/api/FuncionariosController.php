<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionarios;


class FuncionariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Funcionarios::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'nome' => ['required', 'max:255'],
            'email' => ['required', 'unique:funcionarios', 'max:255'],
            'cargo' => ['required', 'max:255'],
            'telefone' => ['required', 'max:255'],
            'endereco' => ['required', 'max:255'],
        ]);
        if (Funcionarios::create($request->all())) { // todas as requisições com $request
            return response('Funcionário cadastrado!');
        }
        return response('Funcionário não cadastrado', 502);
    }

    public function show($id)
    {
        return Funcionarios::findOrFail($id); //receber id
    }


    public function update(Request $request, $id)
    {
        $funcionarios = Funcionarios::findOrFail($id);
        if ($funcionarios->update($request->all())) {
            return response('Funcionário atualizado!');
        }
        return response('Funcionário não atualizado!', 502);
    }

    public function destroy($id)
    {
        $funcionarios = Funcionarios::findOrFail($id);
        if ($funcionarios->delete()) {
            return response('Funcionário removido!');
        }
        return response('Funcionário não removido!', 502);
    }
}
