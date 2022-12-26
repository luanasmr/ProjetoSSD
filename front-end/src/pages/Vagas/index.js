import React from 'react';


import { ContainerPage, TitlePage} from "../../components/Main";
import { Link } from 'react-router-dom';

import { Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Vagas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Vagas: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/vagas")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ Vagas: dados })
            })

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <ContainerPage>
                <br></br>
                <TitlePage><b><center>Vagas Diponíveis</center></b></TitlePage>
                <br></br>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Cargo</th>
                            <th>Descrição</th>
                            <th>Horário</th>
                            <th>Cidade</th>
                            <th>Remuneração</th>
                            <th>Quantidade da Vaga</th>
                            <th>Requisitos</th>
                            <th>Status</th>
                            <th>Empresa solicitante</th>
                            <th>Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Vagas.map((Vagas) =>
                                <tr>
                                    <td>{Vagas.cargo}</td>
                                    <td>{Vagas.descricao}</td>
                                    <td>{Vagas.horario}</td>
                                    <td>{Vagas.cidade}</td>
                                    <td>{Vagas.remuneracao}</td>
                                    <td>{Vagas.quantidade}</td>
                                    <td>{Vagas.requisitos}</td>
                                    <td>{Vagas.status}</td>
                                    <td>{Vagas.empresa_id}</td>
                                    <td>
                                    <Button  className="login-form-btn2" variant="secondary"><Link to={"/MinhasVagas/" + Vagas.id} style={{ textDecoration: 'none', color: 'white' }} >Candidatar</Link></Button>
                                        <Button  variant="danger" onClick={() => this.deletarVaga(Vagas.id)}>Cancelar</Button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </ContainerPage>

        );
    }

} export default Vagas;