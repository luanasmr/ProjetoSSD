import React from 'react';
import Form from 'react-bootstrap/Form';
import { ContainerPage, TitlePage } from "../../components/Main";
import { Link } from 'react-router-dom';

import { Table, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class CadastrarVaga extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cargo: '',
            descricao: '',
            horario: '',
            cidade: '',
            remuneracao: '',
            quantidade: '',
            requisitos: '',
            status: '',
            empresa_id: '',
            Vagas: [],
            empresas: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) { //cadastrar fase
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://127.0.0.1:8000/api/vagas', {
            method: 'POST',
            headers: { "Accept": "application/json" },
            body: data,
        })
            .then(response => response.json())
            .then((data) => { //adicionar verificações
                alert('Cadastrada com sucesso:', data);
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
        this.buscarVaga();
        this.buscarEmpresas();
    }


    buscarEmpresas = () => {
        fetch("http://127.0.0.1:8000/api/empresas")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ empresas: dados })
                console.log(dados);
            })

    }

    buscarVaga = () => {
        fetch("http://127.0.0.1:8000/api/vagas")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ Vagas: dados })
            })

    }



    deletarVaga = (id) => {
        fetch("http://127.0.0.1:8000/api/vagas/" + id, { method: 'DELETE' })
            .then(resposta => {
                if (resposta.ok) {
                    this.componentDidMount();
                }
            })
    }

    componentWillUnmount() {

    }


    submit() {
        // const fase = {
        //     nome: this.state.nome,
        //     ordem: this.state.ordem
        // }
        this.CadastrarVaga();

    }

    render() {

        return (
            <Container>
                <ContainerPage>
                    <br></br>
                    <TitlePage><b><center>Cadastrar Vagas</center></b></TitlePage>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="cargo">
                            <Form.Label>Cargo</Form.Label>
                            <input type="text" className="form-control" name="cargo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descricao">
                            <Form.Label>Descrição</Form.Label>
                            <input type="text" className="form-control" name="descricao" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="horario">
                            <Form.Label>Turno do Horário</Form.Label>
                            <input type="text" className="form-control" name="horario" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="remuneracao">
                            <Form.Label>Remuneração</Form.Label>
                            <input type="number" className="form-control" name="remuneracao" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantidade">
                            <Form.Label>Quantidade de vagas</Form.Label>
                            <input type="number" className="form-control" name="quantidade" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="requisitos">
                            <Form.Label>Requisitos para vaga</Form.Label>
                            <input type="text" className="form-control" name="requisitos" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Status</Form.Label>
                            <input type="text" className="form-control" name="status" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="empresa_id">
                            <Form.Label>Empresas</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                                {this.state.empresas.map((empresa) =>
                                    <option value={empresa.id}>{empresa.nome}</option>

                                )}
                            </Form.Select>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                        <Button variant="warning" onClick={this.reset}>
                            Novo
                        </Button>
                    </Form>

                    <br></br>

                    <TitlePage><b><center>Vagas Cadastradas</center></b></TitlePage>
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
                                            <Button variant="secondary"><Link to={"/EditarVaga/" + Vagas.id} style={{ textDecoration: 'none', color: 'white' }} >Atualizar</Link></Button>
                                            <Button variant="danger" onClick={() => this.deletarVaga(Vagas.id)}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </Table>
                    <br></br>
                    <br></br>
                </ContainerPage>
            </Container>


        );
    }

} export default CadastrarVaga;