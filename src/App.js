import React, { Component } from "react";

export default class App extends Component {
  state = {
    nomeProduto: "Iphone 11",
    precoProduto: 4200,
    quantidadeProduto: 8
  };

  vendaProduto = () => {
    if (this.state.quantidadeProduto > 0) {
      this.setState({
        quantidadeProduto: this.state.quantidadeProduto - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Celular: {this.state.nomeProduto}</h1>
        <h3>Preço: R$ {this.state.precoProduto}</h3>
        <h3>Estoque: {this.state.quantidadeProduto}</h3>
        {this.state.quantidadeProduto > 0 ? (
          <button onClick={this.vendaProduto}>Adicionar Produto</button>
        ) : (
          <button disabled>Produto esgotado</button>
        )}
      </div>
    );
  }
}
