import React from 'react';



import {Routes, Route} from 'react-router-dom';
import Home from "../src/pages/Home";
import Empresa from "../src/pages/Empresa";
import EditarEmpresa from "../src/pages/Empresa/EditarEmpresa";
import CadastrarVaga from "../src/pages/Vagas/CadastrarVaga";
import EditarVaga from "../src/pages/Vagas/EditarVaga";
import EditarFase from "../src/pages/Fases/EditarFase";
import Vagas from "../src/pages/Vagas";
import Fases from "./pages/Fases";
import Processos from "./pages/Processos";

import Registrar from './pages/Registrar'




export default () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} >
            </Route>

            <Route exact path="/Vagas" element={<Vagas />} >
            </Route>

            <Route exact path="/CadastrarVaga" element={<CadastrarVaga />} >
            </Route>

            
            <Route path="/EditarVaga/:id" element={<EditarVaga />} >
            </Route>

            <Route path="/EditarEmpresa/:id" element={<EditarEmpresa />} >
            </Route>

            <Route path="/EditarFase/:id" element={<EditarFase />} >
            </Route>

            <Route exact path="/Empresa" element={<Empresa />} >
            </Route>

            <Route exact path="/Fases" element={<Fases />} >
            </Route>

            <Route exact path="/EditarFase" element={<EditarFase />} >
            </Route>

            <Route exact path="/Processos" element={<Processos />} >
            </Route>


            <Route exact path="/Registrar" element={<Registrar />} >
            </Route>
        </Routes>
    )

}