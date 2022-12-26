<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Empresas;


class EmpresasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Empresas::all();
    }


    public function store(Request $request)
    {
        $request->validate([
            'nome' => ['required', 'max:255'],
            'cnpj' => ['required', 'unique:empresas', 'max:255'],
            'telefone' => ['required', 'max:255'],
            'endereco' => ['required'],
        ]);
        if (Empresas::create($request->all())) {
            return response('Empresa Cadastrada!');
        }
        return response('Empresa não cadastrada!', 502);
    }

    public function show($id)
    {
        return Empresas::findOrFail($id); //receber id
    }


    public function update(Request $request, $id)
    {
        $empresas  = Empresas::findOrFail($id);
        if ($empresas->update($request->all())) {
            return response('Empresa atualizada!');
        }
        return response('Empresa não atualizada!', 502);
    }

    public function destroy($id)
    {
        $empresas  = Empresas::findOrFail($id);
        if ($empresas->delete()) {
            return response('Empresa removida!');
        }
        return response('Empresa não removida!', 502);
    }
}
