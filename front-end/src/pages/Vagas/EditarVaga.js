import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerPage } from "../../components/Main";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class EditarVaga extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            cargo: '',
            descricao: '',
            horario: '',
            cidade: '',
            remuneracao: '',
            quantidade: '',
            requisitos: '',
            status: '',
            empresa_id: '',
            errors: [],
            empresas: [],
            vaga: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);


    }




    componentDidMount() {
        let { id } = this.props.params;
        this.setState({ id: id });
        // Verificando se id foi passado nos parâmetros da url
        if (id) {
            this.carregarVaga(id);

            this.buscarEmpresas();
        }

    }
    buscarEmpresas = () => {
        fetch("http://127.0.0.1:8000/api/empresas")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ empresas: dados })
                console.log(dados);
            })

    }

    // Função que recupera os dados do post caso seja uma edição
    carregarVaga(id) {
        fetch("http://127.0.0.1:8000/api/vagas/" + id)
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ vaga: dados })
                this.setState({ empresa_id: dados.empresa_id })
                console.log(dados);
            })

    }


    handleSubmit(event) {
        console.log("entrou");
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://127.0.0.1:8000/api/vagas', {
            method: 'POST',
            headers: { "Accept": "application/json" },
            body: data,
        })
            .then(response => response.json())
            .then((data) => { //adicionar verificações
                alert('editada com sucesso:', data);
                window.location.reload();
                this.setState({
                    errors: data.errors

                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    handleChange(e) {
        console.log(e.target.value);
        this.setState({ empresa_id: e.target.value });
    }

    render() {

        return (

            <ContainerPage>
                <br></br>
                <center><h4>Atualizar Vaga</h4></center>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="cargo">
                        <Form.Label>Cargo</Form.Label>
                        <input type="text" className="form-control" name="cargo" id="cargo"
                            value={this.state.vaga.cargo}
                            onChange={e => this.setState({ ...this.state.vaga, cargo: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descricao">
                        <Form.Label>Descrição</Form.Label>
                        <input type="text" className="form-control" name="cargo" id="descricao"
                            value={this.state.vaga.descricao}
                            onChange={e => this.setState({ descricao: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="horario">
                        <Form.Label>Horário</Form.Label>
                        <input type="text" className="form-control" name="horario" id="horario"
                            value={this.state.vaga.horario}
                            onChange={e => this.setState({ horario: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cidade">
                        <Form.Label>Cidade</Form.Label>
                        <input type="text" className="form-control" name="cidade" id="cidade"
                            value={this.state.vaga.cidade}
                            onChange={e => this.setState({ cidade: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="remuneracao">
                        <Form.Label>Remuneração</Form.Label>
                        <input type="text" className="form-control" name="remuneracao" id="remuneracao"
                            value={this.state.vaga.remuneracao}
                            onChange={e => this.setState({ remuneracao: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="quantidade">
                        <Form.Label>Quantidade disponíveis para a vaga</Form.Label>
                        <input type="text" className="form-control" name="quantidade" id="quantidade"
                            value={this.state.vaga.quantidade}
                            onChange={e => this.setState({ quantidade: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="requisitos">
                        <Form.Label>Requesitos</Form.Label>
                        <input type="text" className="form-control" name="requisitos" id="requisitos"
                            value={this.state.vaga.requisitos}
                            onChange={e => this.setState({ requisitos: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label>Status</Form.Label>
                        <input type="text" className="form-control" name="status" id="status"
                            value={this.state.vaga.status}
                            onChange={e => this.setState({ status: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="empresa_id">
                        <Form.Label>Empresa
                            <Form.Select aria-label="Default select example" onChange={this.handleChange}  >
                                {this.state.empresas.map((empresa) =>
                                    <option id="empresa_id" value={empresa.id} selected={empresa.id === this.state.empresa_id ? true : false}>{empresa.nome}</option>

                                )}
                            </Form.Select>
                        </Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Atualizar
                    </Button>
                    <br></br>
                    <br></br>
                    <br></br>

                </Form>
            </ContainerPage >
        );
    }

}

export default withParams(EditarVaga);