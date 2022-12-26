import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerPage, TitlePage } from "../../components/Main";
class Processos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Processos: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/processos")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ Processos: dados })
            })

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <ContainerPage>
                <br></br>
                <TitlePage><b><center>Processos Disponíveis</center></b></TitlePage>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Status do Processo</th>
                            <th>Vaga</th>
                            <th>Candidato</th>
                            <th>Fase</th>
                            <th>Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Processos.map((Processo) =>
                                <tr>
                                    <td>{Processos.status_processos}</td>
                                    <td>{Processos.vaga_id}</td>
                                    <td>{Processos.candidato_id}</td>
                                    <td>{Processos.fase_id}</td>
                                    <td>Atualizar/Excluir</td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </ContainerPage>
        );
    }

}

export default Processos;
