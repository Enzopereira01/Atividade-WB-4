import { Component } from "react";

type props = {
    tema: string
}

export default class CadastrarProduto extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
            <div className="container">
                <div className="row">
                <h5><strong>Cadastro Produto</strong></h5>
                    <form className="col s12">
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="name" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 5px"}}/>
                                <label htmlFor="name">nome</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="price" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 5px"}}/>
                                <label htmlFor="price">Preço</label>
                            </div>
                        </div>
                        <div id="modalLine" className="row">
                            <div className="input-field col s12">
                                <input id="estoque" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 5px"}}/>
                                <label htmlFor="estoque">Em estoque</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 right-align">
                                <button className={estiloBotao} type="submit" name="action">Submit
                                  <i className="material-icons right">send</i>
                             </button>
                         </div>
                        </div>
                    </form>
                </div >
            </div>
            </>
        )
    }
}