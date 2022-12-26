import React from 'react';
import { ContainerPage, TitlePage } from "../../components/Main";
import { Form, Table, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Empresa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cnpj: '',
            telefone: '',
            endereco: '',
            errors: [],
            empresa: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) { //cadastrar empresa
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://127.0.0.1:8000/api/empresas', {
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
        this.buscarEmpresas();
    }

    buscarEmpresas = () => {
        fetch("http://127.0.0.1:8000/api/empresas")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ empresa: dados })
            })

    }

    deletarEmpresa = (id) => {
        fetch("http://127.0.0.1:8000/api/empresas/" + id, { method: 'DELETE' })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarEmpresas();
                }
            })
    }

    componentWillUnmount() {
    }


    submit() {
        // const empresa = {
        //     id: this.id,
        //     nome: this.nome,
        //     cnpj: this.cnpj,
        //     telefone: this.telefone,
        //     endereco: this.endereco
        // }
        // this.atualizarEmpresa(empresa);
        console.log(this.props);
    }

    reset = () => {
        this.setState({
            // id: 0,
            nome: '',
            cnpj: '',
            telefone: '',
            endereco: ''
        })
    }

    render() {
        return (
            <ContainerPage>
                <br></br>
                

                <center><h4>Cadastrar Empresas</h4></center>
                {/* {
                           this.state.errors.cnpj.map((erros) =>
                                <tr>
                                    <td>{erros}</td>
                                </tr>
                            )
                        } */}

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <input type="text" className="form-control" name="nome" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cnpj">
                        <Form.Label>CNPJ</Form.Label>
                        <input type="text" className="form-control" name="cnpj" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <input type="text" className="form-control" name="telefone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="endereco">
                        <Form.Label>Endereço</Form.Label>
                        <input type="text" className="form-control" name="endereco" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                    {/* <Button variant="warning" onClick={this.reset}>
                        Novo
                    </Button> */}
                </Form>
                <center><h4>Empresas</h4></center>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cnpj</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empresa.map((empresa) =>
                                <tr>
                                    <td>{empresa.nome}</td>
                                    <td>{empresa.cnpj}</td>
                                    <td>{empresa.telefone}</td>
                                    <td>{empresa.endereco}</td>
                                    <td>
                                        <Button variant="secondary"><Link to={"/EditarEmpresa/" + empresa.id} style={{ textDecoration: 'none', color: 'white' }} >Atualizar</Link></Button>
                                        <Button variant="danger" onClick={() => this.deletarEmpresa(empresa.id)}>Excluir</Button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
                <br></br>
                <br></br>

            </ContainerPage>
            
        );
    }

} export default Empresa;