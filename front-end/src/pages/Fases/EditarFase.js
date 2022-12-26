import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContainerPage} from "../../components/Main";

class EditarFase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            ordem: '',
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        // Verificando se id foi passado nos parâmetros da url
        if (this.props?.match?.params?.id) {
            let id = this.props.match.params.id
            this.carregarFase(id);
        }

    }


    // Função que recupera os dados do post caso seja uma edição
    carregarFase(id) {
        fetch("http://127.0.0.1:8000/api/empresas/" + id)
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState(dados)
                // console.log(dados);
                console.log(this.state);
            })

    }


    handleSubmit(event) { //cadastrar fase
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        let id = this.state.id;
        fetch('http://127.0.0.1:8000/api/fases/' + id, {
            method: 'PUT',
            headers: { 'Accept': 'application/json' },
            content: "application/json",
            body: data,
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
                <br></br>
                <center><h4>Atualizar Fase</h4></center>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <input type="text" className="form-control" name="nome" id="nome"
                            value={this.state.nome}
                            onChange={e => this.setState({ nome: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ordem">
                        <Form.Label>Ordem</Form.Label>
                        <input type="text" className="form-control" name="ordem" id="ordem"
                            value={this.state.ordem}
                            onChange={e => this.setState({ ordem: e.target.value })} />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Atualizar
                    </Button>
                </Form>
            </ContainerPage>
        );
    }

}

export default EditarFase;
