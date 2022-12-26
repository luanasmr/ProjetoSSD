<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Fases;


class FasesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Fases::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'nome' => ['required', 'unique:fases'],
            'ordem' => ['required'],
        ]);
        if (Fases::create($request->all())) {
            return response('Fase cadastrada!');
        }
        return response('Fase não cadastrada', 502);                                     // todas as requisições com $request
    }

    public function show($id)
    {
        return Fases::findOrFail($id); //receber id
    }


    public function update(Request $request, $id)
    {
        $fases = Fases::findOrFail($id);
        if ($fases->update($request->all())) {
            return response('Fase atualizada!');
        }
        return response('Fase não atualizada!', 502);
    }

    public function destroy($id)
    {
        $fases = Fases::findOrFail($id);
        if ($fases->delete()) {
            return response('Fase removida!');
        }
        return response('Fase não removida!', 502);
    }
}
