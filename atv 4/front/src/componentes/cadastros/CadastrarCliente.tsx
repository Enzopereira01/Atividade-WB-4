import React, { Component } from "react";

type props = {
    tema: string;
}

type state = {
    nome: string;
    sobrenome: string;
    email: string;
    endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    };
    telefones: { ddd: string; numero: string }[];
};

export default class CadastroCliente extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            endereco: {
                estado: "",
                cidade: "",
                bairro: "",
                rua: "",
                numero: "",
                codigoPostal: "",
                informacoesAdicionais: ""
            },
            telefones: [{ ddd: "", numero: "" }]
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as Pick<state, keyof state>);
    };

    handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            endereco: {
                ...prevState.endereco,
                [name]: value
            }
        }));
    };

    handleTelefoneChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const telefones = [...this.state.telefones];
        telefones[index] = { ...telefones[index], [name]: value };
        this.setState({ telefones });
    };

    addTelefone = () => {
        this.setState(prevState => ({
            telefones: [...prevState.telefones, { ddd: "", numero: "" }]
        }));
    };

    removeTelefone = (index: number) => {
        this.setState(prevState => ({
            telefones: prevState.telefones.filter((_, i) => i !== index)
        }));
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const cliente = {
            nome: this.state.nome,
            sobreNome: this.state.sobrenome,
            email: this.state.email,
            endereco: this.state.endereco,
            telefones: this.state.telefones
        };

        fetch('http://localhost:32832/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        .then(response => response.ok ? alert("Cliente cadastrado com sucesso!") : alert("Erro ao cadastrar cliente"))
        .catch(error => console.error('Erro:', error));
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
        return (
            <div className="container">
                <form className="col s12">
                    <h5><strong>Cadastro Cliente</strong></h5>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome-cliente" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="nome-cliente">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome-social" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="nome-social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf-cliente" type="text" className="validate"style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="cpf-cliente">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf-data" type="date" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="cpf-data">Data Emissão CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="rg-cliente" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="rg-cliente">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rg-data" type="date" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="rg-data">Data Emissão RG</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="tel-cliente" type="tel" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="tel-cliente">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero-cliente" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}}    />
                            <label htmlFor="genero-cliente">Gênero</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
