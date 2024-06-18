import React, { Component, createRef } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import styles from '../styles/myStyles.module.css';

type Props = {
    tema: string;
};

type Endereco = {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;
};

type Telefone = {
    ddd: string;
    numero: string;
};

type Cliente = {
    id: number;
    nome: string;
    sobreNome: string;
    email: string;
    endereco: Endereco;
    telefones: Telefone[];
};

type State = {
    clientes: Cliente[];
    clienteSelecionado: Cliente | null;
};

export default class ListarClientes extends Component<Props, State> {
    modalClienteRef: React.RefObject<HTMLDivElement> = createRef();
    modalProdutoRef: React.RefObject<HTMLDivElement> = createRef();
    modalServicoRef: React.RefObject<HTMLDivElement> = createRef();

    constructor(props: Props) {
        super(props);
        this.state = {
            clienteSelecionado: null,
            clienteProdutoSelecionado: null,
            clienteServicoSelecionado: null
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    componentDidUpdate() {
        if (this.modalClienteRef.current) {
            M.Modal.init(this.modalClienteRef.current);
        }
        if (this.modalProdutoRef.current) {
            M.Modal.init(this.modalProdutoRef.current);
        }
        if (this.modalServicoRef.current) {
            M.Modal.init(this.modalServicoRef.current);
        }
    }

    handleItemClick = (cliente: Cliente) => {
        this.setState({ clienteSelecionado: cliente }, () => {
            const instance = M.Modal.getInstance(this.modalClienteRef.current!);
            instance.open();
        });
    };

    handleProdutoItemClick = (cliente: Cliente) => {
        this.setState({ clienteProdutoSelecionado: cliente }, () => {
            const instance = M.Modal.getInstance(this.modalProdutoRef.current!);
            instance.open();
        });
    };

    handleServicoItemClick = (cliente: Cliente) => {
        this.setState({ clienteServicoSelecionado: cliente }, () => {
            const instance = M.Modal.getInstance(this.modalServicoRef.current!);
            instance.open();
        });
    };

    handleCloseModal = () => {
        this.setState({ clienteSelecionado: null, clienteProdutoSelecionado: null, clienteServicoSelecionado: null });
    };

    render() {
        const estilo = `collection-item active ${this.props.tema}`;

        
        const clientes: Cliente[] = [
            {
                id: 1,
                nome: "Rogerio da Silva",
                nomeSocial: "Rogerio",
                cpf: "418.991.710-96",
                dataNascimento: "16/12/1974",
                dataEmissaoCPF: "21/12/2016",
                rg: "MG-33.510.056",
                dataEmissaoRG: "21/12/2016",
                telefone: "(62) 2824-8177",
                genero: "Masculino",
                email: "rogerio65@example.com",
                produtosComprados: [
                    {
                        id: 1,
                        nome: "Camiseta de algodão orgânico",
                        preco: 20.00,
                        quantidadeEstoque: 264,
                        quantidadeVendida: 640,
                        genero: "Unissex"
                    },
                    {
                        id: 2,
                        nome: "Jaqueta corta-vento",
                        preco: 30.00,
                        quantidadeEstoque: 199,
                        quantidadeVendida: 602,
                        genero: "Masculino"
                    }
                ],
                servicosConsumidos: [
                    {
                        id: 2,
                        nome: "Musculação",
                        preco: 60.00,
                        duracaoMinutos: 30,                     
                    },
                    {
                        id: 1,
                        nome: "Clube de corrida",
                        preco: 48.00,
                        duracaoMinutos: 60,                    
                    },
                    {
                        id: 4,
                        nome: "Assessoria esportiva personalizada",
                        preco: 50.00,
                        duracaoMinutos: 90,
                    }
                ]
            },
            {
                id: 2,
                nome: "Bruna Bezerra",
                nomeSocial: "Bruna",
                cpf: "975.146.130-80",
                dataNascimento: "31 /10/1975",
                dataEmissaoCPF: "23/09/2012",
                rg: "MG-47.396.167",
                dataEmissaoRG: "23/09/2012",
                telefone: "(47) 3135-7322",
                genero: "Feminino",
                email: "cliente2@example.com",
                produtosComprados: [
                    {
                        id: 2,
                        nome: "Shorts de treino feminino",
                        preco: 25.00,
                        quantidadeEstoque: 396,
                        quantidadeVendida: 839,
                        genero: "Feminino"
                    },
                    {
                        id: 4,
                        nome: "Tênis de corrida leve",
                        preco: 10.00,
                        quantidadeEstoque: 356,
                        quantidadeVendida: 484,
                        genero: "Unissex"
                    }
                ],
                servicosConsumidos: [
                    {
                        id: 2,
                        nome: "Musculação",
                        preco: 60.00,
                        duracaoMinutos: 30,                    
                    },
                    {
                        id: 4,
                        nome: "Assessoria esportiva personalizada",
                        preco: 50.00,
                        duracaoMinutos: 90,
                    }
                ]
            },
            {
                id: 3,
                nome: "Breno Pedroso",
                nomeSocial: "Breno",
                cpf: "975.146.130-80",
                dataNascimento: "09/12/1985",
                dataEmissaoCPF: "03/11/2010",
                rg: "MG-46.987.149",
                dataEmissaoRG: "03/11/2010",
                telefone: "(47) 3135-7322",
                genero: "Masculino",
                email: "cliente3@example.com",
                produtosComprados: [
                    {
                        id: 1,
                        nome: "Camiseta de algodão orgânico",
                        preco: 20.00,
                        quantidadeEstoque: 264,
                        quantidadeVendida: 640,
                        genero: "Unissex" 
                    },
                    {
                        id: 3,
                        nome: "Jaqueta corta-vento",
                        preco: 30.00,
                        quantidadeEstoque: 199,
                        quantidadeVendida: 602,
                        genero: "Masculino"
                    }
                ],
                servicosConsumidos: [
                    {
                        id: 4,
                        nome: "Assessoria esportiva personalizada",
                        preco: 50.00,
                        duracaoMinutos: 90,
                    },
                    {
                        id: 1,
                        nome: "Clube de corrida",
                        preco: 48.00,
                        duracaoMinutos: 60,
                    }
                ]
            },
            {
                id: 4,
                nome: "Julia Prado",
                nomeSocial: "Julia",
                cpf: "424.518.920-72",
                dataNascimento: "02/12/1987",
                dataEmissaoCPF: "30/03/2020",
                rg: "MG-24.792.675",
                dataEmissaoRG: "30/03/2020",
                telefone: "(69) 3173-3713",
                genero: "Feminino",
                email: "cliente4@example.com",
                produtosComprados: [
                    {
                        id: 4,
                        nome: "Tênis de corrida leve",
                        preco: 10.00,
                        quantidadeEstoque: 356,
                        quantidadeVendida: 484,
                        genero: "Unissex"
                    },
                    {
                        id: 2,
                        nome: "Shorts de treino feminino",
                        preco: 25.00,
                        quantidadeEstoque: 396,
                        quantidadeVendida: 839,
                        genero: "Feminino"
                    }
                ],
                servicosConsumidos: [
                    {
                        id: 1,
                        nome: "Clube de corrida",
                        preco: 48.00,
                        duracaoMinutos: 60,
                    },
                    {
                        id: 4,
                        nome: "Assessoria esportiva personalizada",
                        preco: 50.00,
                        duracaoMinutos: 90,
                    }
                ]
            },
            {
                id: 5,
                nome: "Gabriel Paz",
                nomeSocial: "Gabriel",
                cpf: "734.848.700-95",
                dataNascimento: "04/06/1954",
                dataEmissaoCPF: "18/05/2017",
                rg: "MG-35.231.387",
                dataEmissaoRG: "18/05/2017",
                telefone: "(94) 3789-0038",
                genero: "Masculino",
                email: "cliente5@example.com",
                produtosComprados: [
                    {
                        id: 4,
                        nome: "Tênis de corrida leve",
                        preco: 10.00,
                        quantidadeEstoque: 356,
                        quantidadeVendida: 484,
                        genero: "Unissex"
                    },
                    {
                        id: 1,
                        nome: "Camiseta de algodão orgânico",
                        preco: 20.00,
                        quantidadeEstoque: 264,
                        quantidadeVendida: 640,
                        genero: "Unissex"
                    }
                ],
                servicosConsumidos: [
                    {
                        id: 4,
                        nome: "Assessoria esportiva personalizada",
                        preco: 50.00,
                        duracaoMinutos: 90,
                    },
                    {
                        id: 2,
                        nome: "Musculação",
                        preco: 60.00,
                        duracaoMinutos: 30,
                    }
                ]
            },
        ];
        const produtosPorQuantidade = [...clientes].sort((a, b) => {
            const totalA = a.produtosComprados.reduce((sum, prod) => sum + (prod.quantidadeVendida || 0), 0);
            const totalB = b.produtosComprados.reduce((sum, prod) => sum + (prod.quantidadeVendida || 0), 0);
            return totalB - totalA;
        }).slice(0, 3);

        const produtosPorValor = [...clientes].sort((a, b) => {
            const valorA = a.produtosComprados.reduce((sum, prod) => sum + (prod.quantidadeVendida || 0) * prod.preco, 0);
            const valorB = b.produtosComprados.reduce((sum, prod) => sum + (prod.quantidadeVendida || 0) * prod.preco, 0);
            return valorB - valorA;
        }).slice(0, 3);

        const servicosPorQuantidade = [...clientes].sort((a, b) => {
            const totalA = a.produtosComprados.length;
            const totalB = b.produtosComprados.length;
            return totalB - totalA;
        }).slice(0, 3);

        const servicosPorValor = [...clientes].sort((a, b) => {
            const valorA = a.servicosConsumidos.reduce((sum, prod) => sum + (prod.preco || 0) * prod.preco, 0);
            const valorB = b.servicosConsumidos.reduce((sum, prod) => sum + (prod.preco || 0) * prod.preco, 0);
            return valorB - valorA;
        }).slice(0, 3);

        return (
            <div className="container">
                <h5>Clientes</h5>
                <div className="collection">
                    {clientes.map((cliente, index) => (
                        <div key={cliente.id} className={`collection-item ${styles.collectionItemHover}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a
                                onClick={() => this.handleItemClick(cliente)}
                                style={{ flex: 1, cursor: 'pointer' }}
                            >
                                {cliente.nome}
                            </a>
                        </div>
                    ))}
                </div>

                <h5>Clientes que mais consumiram produtos por valor</h5>
                <div className="collection">
                    {produtosPorValor.map((cliente, index) => (
                        <div key={cliente.id} className={`collection-item ${styles.collectionItemHover}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a
                                onClick={() => this.handleProdutoItemClick(cliente)}
                                style={{ flex: 1, cursor: 'pointer' }}
                            >
                                {cliente.nome}
                            </a>
                        </div>
                    ))}
                </div>

                <h5>Clientes que mais consumiram produtos por quantidade</h5>
                <div className="collection">
                    {produtosPorQuantidade.map((cliente, index) => (
                        <div key={cliente.id} className={`collection-item ${styles.collectionItemHover}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a
                                onClick={() => this.handleProdutoItemClick(cliente)}
                                style={{ flex: 1, cursor: 'pointer' }}
                            >
                                {cliente.nome}
                            </a>
                        </div>
                    ))}
                </div>

                <h5>Clientes que mais consumiram serviços por valor</h5>
                <div className="collection">
                    {servicosPorValor.map((cliente, index) => (
                        <div key={cliente.id} className={`collection-item ${styles.collectionItemHover}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a
                                onClick={() => this.handleServicoItemClick(cliente)}
                                style={{ flex: 1, cursor: 'pointer' }}
                            >
                                {cliente.nome}
                            </a>
                        </div>
                    ))}
                </div>

                <h5>Clientes que mais consumiram serviços por quantidade</h5>
                <div className="collection">
                    {servicosPorQuantidade.map((cliente, index) => (
                        <div key={cliente.id} className={`collection-item ${styles.collectionItemHover}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a
                                onClick={() => this.handleServicoItemClick(cliente)}
                                style={{ flex: 1, cursor: 'pointer' }}
                            >
                                {cliente.nome}
                            </a>
                        </div>
                    ))}
                </div>


                <div id="modal-cliente" className="modal" ref={this.modalClienteRef}>
                    <div className="modal-content">
                        {this.state.clienteSelecionado && (
                            <>
                                <h4>{this.state.clienteSelecionado.nome}</h4>
                                <p><strong>Nome Social:</strong> {this.state.clienteSelecionado.nomeSocial}</p>
                                <p><strong>CPF:</strong> {this.state.clienteSelecionado.cpf}</p>
                                <p><strong>Data de Nascimento:</strong> {this.state.clienteSelecionado.dataNascimento}</p>
                                <p><strong>Data de Emissão CPF:</strong> {this.state.clienteSelecionado.dataEmissaoCPF}</p>
                                <p><strong>RG:</strong> {this.state.clienteSelecionado.rg}</p>
                                <p><strong>Data de Emissão RG:</strong> {this.state.clienteSelecionado.dataEmissaoRG}</p>
                                <p><strong>Telefone:</strong> {this.state.clienteSelecionado.telefone}</p>
                                <p><strong>Gênero:</strong> {this.state.clienteSelecionado.genero}</p>
                                <p><strong>Email:</strong> {this.state.clienteSelecionado.email}</p>
                                <p><strong>Produtos Comprados:</strong></p>
                                <ul className="collection">
                                    {this.state.clienteSelecionado.produtosComprados.map(produto => (
                                        <li key={produto.id} className="collection-item">
                                            <span className="title">{produto.nome}</span>
                                            <p>
                                                Preço: R${produto.preco.toFixed(2)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <p><strong>Serviços Consumidos:</strong></p>
                                <ul className="collection">
                                    {this.state.clienteSelecionado.servicosConsumidos.map(servico => (
                                        <li key={servico.id} className="collection-item">
                                            <span className="title">{servico.nome}</span>
                                            <p>
                                                Preço: R${servico.preco.toFixed(2)} <br />
                                                Duração: {servico.duracaoMinutos} minutos
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat" onClick={this.handleCloseModal}>Fechar</button>
                    </div>
                </div>


                <div id="modal-produto" className="modal" ref={this.modalProdutoRef}>
                    <div className="modal-content">
                        <h4>Produtos Consumidos</h4>
                        {this.state.clienteProdutoSelecionado && (
                            <ul className="collection">
                                {this.state.clienteProdutoSelecionado.produtosComprados.map(produto => (
                                    <li key={produto.id} className="collection-item">
                                        <span className="title">{produto.nome}</span>
                                        <p>
                                            Preço: R${produto.preco.toFixed(2)}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat" onClick={this.handleCloseModal}>Fechar</button>
                    </div>
                </div>


                <div id="modal-servico" className="modal" ref={this.modalServicoRef}>
                    <div className="modal-content">
                        <h4>Serviços Consumidos</h4>
                        {this.state.clienteServicoSelecionado && (
                            <ul className="collection">
                                {this.state.clienteServicoSelecionado.servicosConsumidos.map(servico => (
                                    <li key={servico.id} className="collection-item">
                                        <span className="title">{servico.nome}</span>
                                        <p>
                                            Preço: R${servico.preco.toFixed(2)} <br />
                                            Duração: {servico.duracaoMinutos} minutos
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="modal-footer">
                    <button className="modal-close waves-effect waves-green btn-flat" onClick={this.handleCloseModal}>Fechar</button>
                </div>
            </div>

            </div>
        );
    }
}
