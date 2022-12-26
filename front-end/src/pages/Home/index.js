import React from 'react';
import "./styles.css";


import { TitlePage } from "../../components/Main";
import { Link } from 'react-router-dom';

import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cidade: '',
            Vagas: []
        }
    }

    handleSubmit(event) { //cadastrar empresa
        event.preventDefault();
        // const data = new FormData(event.target);

        fetch("http://127.0.0.1:8000/api/vagas")
        .then(resposta => resposta.json())
        .then(data => {
            this.setState({ Vagas: data })
        })
            .then(response => response.json())
            .then((data) => { //adicionar verificações
                alert('Consulta realizada com sucesso:', data);
                window.location.reload();
                this.setState({
                    errors: data.errors

                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <span className="login-form-title"> Buscar vagas </span>
                            <div className="text-center">
                                <span className="txt1">Procure dentre milhares de oportunidades nas empresas que usam o Sistema de Recrutamento. </span>
                            </div>
                            <br>
                            </br>

                            <span className="login-form-title">
                                {/* <img src={jpIMG} alt="logo" /> */}
                            </span>

                            <div className="wrap-input">
                                <input
                                    className="input"
                                    type="text"
                                />
                                <center><span className="focus-input" data-placeholder="Busque sua vaga por cidade"></span> </center>
                            </div>
                            <div className="container-login-form-btn">
                                <button className="login-form-btn">Buscar</button>
                            </div>

                                <br></br>
                                <TitlePage><b><center>Vagas Diponíveis</center></b></TitlePage>
                                <br></br>
                                <Table striped bordered hover size="sm" className="txt1">
                                    <thead>
                                        <tr>
                                            <th >Cargo</th>
                                            <th>Descrição</th>
                                            <th>Horário</th>
                                            <th>Cidade</th>
                                            <th>Remuneração</th>
                                            <th>Quantidade da Vaga</th>
                                            <th>Requisitos</th>
                                            <th>Status</th>
                                            <th>Empresa solicitante</th>
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
                                                        {/* <Button  className="login-form-btn2" variant="secondary"><Link to={"/MinhasVagas/" + Vagas.id} style={{ textDecoration: 'none', color: 'white' }} >Candidatar</Link></Button> */}

                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </Table>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default Page;