import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import CadastrarCliente from "../cadastros/CadastrarCliente";
import CadastrarProduto from "../cadastros/CadastrarProduto";
import CadastrarServico from "../cadastros/CadastrarServico";
import ListarClientes from "../listas/listarCliente";
import ListarProdutos from "../listas/listarProdutos";
import ListarServicos from "../listas/listarServicos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Listar Serviços'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="black" botoes={['Cadastrar Cliente','Cadastrar Produto', 'Cadastrar Serviço', 'Listar Clientes', 'listar Produtos', 'Listar Serviços',]} />
        if(this.state.tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <CadastrarCliente tema="black" />
                </>
            )
        }else if(this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <CadastrarProduto tema="black" />
                </>
            )
        }else if(this.state.tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <CadastrarServico tema="black" />
                </>
            )
        } else if (this.state.tela === 'Listar Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListarClientes tema="black" />
                </>
            )
        }else if(this.state.tela === 'listar Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListarProdutos tema="black" />
                </>
            )
        }else if(this.state.tela === 'Listar Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListarServicos tema="black" />
                </>
            )
        } 

    }
}