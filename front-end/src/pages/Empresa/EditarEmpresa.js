import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContainerPage} from "../../components/Main";
class EditarEmpresa extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cnpj: '',
            telefone: '',
            endereco: '',
            empresas: [],
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        // Verificando se id foi passado nos parâmetros da url
        if (this.props?.match?.params?.id) {
            let id = this.props.match.params.id
            this.carregarEmpresa(id);
        }

    }


    // Função que recupera os dados do post caso seja uma edição
    carregarEmpresa(id) {
        fetch("http://127.0.0.1:8000/api/empresas/" + id)
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState(dados)
                // console.log(dados);
                console.log(this.state);
            })

    }

    
    handleSubmit(event) { //cadastrar empresa
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        let id = this.state.id;
        fetch('http://127.0.0.1:8000/api/empresas/'+id, {   
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            content: "application/json",
            body:data,
        })
            .then(response => response.json()) 
            .then((data) => { //adicionar verificações 
                // alert('Atualizada com sucesso:', data);
                // window.location.reload();
                console.log(data);
                this.setState({
                    errors: data.errors          
                    
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }




    render() {

        return (

            <ContainerPage>
                <br></br>
                <center><h4>Atualizar Empresa</h4></center>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <input type="text" className="form-control" name="nome" id="nome"
                            value={this.state.nome}
                            onChange={e => this.setState({ nome: e.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cnpj">
                        <Form.Label>CNPJ</Form.Label>
                        <input type="text" className="form-control" name="cnpj" id="cnpj"
                            value={this.state.cnpj}
                            onChange={e => this.setState({ cnpj: e.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <input type="text" className="form-control" name="telefone" id="telefone"
                            value={this.state.telefone}
                            onChange={e => this.setState({ telefone: e.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="endereco">
                        <Form.Label>Endereço</Form.Label>
                        <input type="text" className="form-control" name="endereco" id="endereco"
                            value={this.state.endereco}
                            onChange={e => this.setState({ endereco: e.target.value })}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" >
                        Atualizar
                    </Button>
                </Form>
            </ContainerPage>
        );
    }

}

export default EditarEmpresa;