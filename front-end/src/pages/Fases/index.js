import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ContainerPage, TitlePage} from "../../components/Main";

class Fases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            ordem: '',
            Fases: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(id) { //cadastrar fase
        id.preventDefault();
        const data = new FormData(id.target);

        fetch('http://127.0.0.1:8000/api/fases/' + id, {   
            method: 'PUT',
            headers: { "Accept": "application/json" },
            body: data,
        })
            .then(response => response.json()) 
            .then((data) => { //adicionar verificações
                alert('Cadastrada com sucesso:', data);
                this.componentDidMount();
                this.setState({
                    errors: data.errors          
                    
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    componentDidMount() {
        this.buscarFase();
    }

    buscarFase = () => {
        fetch("http://127.0.0.1:8000/api/fases")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ Fases: dados })
            })

    }
    

    // cadastrarFases = (fase) => {
    //     fetch("http://127.0.0.1:8000/api/fases",
    //         { method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify(fase)
    //     })
    //         .then(resposta => {
    //             if (resposta.ok) {
    //                 this.buscarFase();
    //             }else{
    //                 alert("Não foi possível adicionar fase");
    //             }
    //         })
    // }

    deletarFases = (id) => {
        fetch("http://127.0.0.1:8000/api/fases/" + id, { method: 'DELETE' })
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
        this.cadastrarFases();

    }
    render() {
    return(
        <ContainerPage>
            <br></br>
            <TitlePage><b><center>Cadastrar Fases</center></b></TitlePage>
            <br></br>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <input type="text" className="form-control" name="nome"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cnpj">
                        <Form.Label>Ordem</Form.Label>
                        <input type="text" className="form-control" name="ordem"  />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                    <Button variant="warning" onClick={this.reset}>
                        Novo
                    </Button>
                </Form>


                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ordem</th>
                            <th>Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Fases.map((Fases) =>
                                <tr>
                                    <td>{Fases.nome}</td>
                                    <td>{Fases.ordem}</td>
                                    <td>
                                        <Button variant="secondary"><Link to={"/EditarFase/" + Fases.id} style={{ textDecoration: 'none', color: 'white' }} >Atualizar</Link></Button>
                                        <Button variant="danger" onClick={() => this.deletarFases(Fases.id)}>Excluir</Button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </ContainerPage>
        );
    }

}

export default Fases;
