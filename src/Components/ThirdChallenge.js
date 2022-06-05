import React from "react";
import "./ThirdChallenge.css";

export default class FuelPump extends React.Component {
  constructor() {
    super();
    this.state = {
      fuelPrice: "", //preço por litro
      fuelQuantity: "", //quantidade na bomba
      pricePaid: "", //preço pago
      quantityPaid: "", //quantidade desejada
      quantity: "", // quantidade restante na bomba
      toggle: false, // altera o estado do botão
      fillPrice: 0, // controla o state de retorno
      fillLiters: 0, // controla o state de retorno
    };
    this.setPrice = this.setPrice.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.handlePricePaid = this.handlePricePaid.bind(this);
    this.handleQuantityPaid = this.handleQuantityPaid.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.setToggle = this.setToggle.bind(this);
  }

  setPrice(event) {    
    if (event.target.value < 0) {
      alert("Valor não pode ser negativo");
    } else {
      this.setState({ fuelPrice: event.target.value });
    }
  }

  handleQuantity(event) {    
    if (event.target.value < 0) {
      alert("Valor não pode ser negativo");
    } else {
      this.setState({ fuelQuantity: event.target.value });
    }
  }

  handlePricePaid(event) {
    this.setState({ pricePaid: event.target.value });
  }

  handleQuantityPaid(event) {
    this.setState({ quantityPaid: event.target.value });
  }

  setQuantity() {
    let total = this.state.fuelQuantity - this.state.quantityPaid;
    this.setState({ quantity: total });
  }

  setToggle() {
    const fillPrice = this.fillWithPrice(this.state.pricePaid);
    const fillLiters = this.fillWithLiters(this.state.quantityPaid);
    this.setState({ fillPrice: fillPrice });
    this.setState({ fillLiters: fillLiters });
    this.fillWithLiters(this.state.quantityPaid);
    this.setQuantity();
    this.state.toggle
      ? this.setState({ toggle: false })
      : this.setState({ toggle: true });
  }

  fillWithPrice(price) {
    if (price === 0 || this.state.quantityPaid === 0) {
      return 0;
    }

    let totalLiters = price / this.state.fuelPrice;

    if (totalLiters > this.state.fuelQuantity) {
      return 0;
    } else {
      return totalLiters;
    }
  }

  fillWithLiters(liters) {
    if (this.state.fuelPrice === 0) {
      return 0;
    }

    liters = Number(this.state.quantityPaid);

    let totalPrice = liters * this.state.fuelPrice;

    if (liters > this.state.fuelQuantity) {
      return 0;
    } else {
      return totalPrice;
    }
  }

  render() {
    return (
      <section className="container" id="third-challenge">
        <div className="challenge-title">
          3) Crie a classe FuelPump com seus respectivos getters e setters e
          seus métodos.
        </div>
        <input
          className="challenge-input"
          type="text"
          placeholder="Digite o preço por litro"
          value={this.state.fuelPrice}
          onChange={this.setPrice}
        />
        <input
          className="challenge-input"
          type="text"
          placeholder="Digite a quantidade na bomba"
          value={this.state.fuelQuantity}
          onChange={this.handleQuantity}
        />
        <input
          className="challenge-input"
          type="text"
          placeholder="Digite o preço a pagar"
          value={this.state.pricePaid}
          onChange={this.handlePricePaid}
        />
        <input
          className="challenge-input"
          type="text"
          placeholder="Digite a quantidade desejada em litros"
          value={this.state.quantityPaid}
          onChange={this.handleQuantityPaid}
        />

        <button
          className="result-button"
          id="third-challenge-button"
          onClick={this.setToggle}
        >
          Resposta
        </button>

        {this.state.toggle && (
          <>
            {this.fillWithPrice(Number(this.state.pricePaid)) === 0 ? (
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Legenda</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Preço não definido ou não há combutível o suficiente
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Legenda</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quantidade de litros</td>
                    <td>
                      {this.state.fillPrice.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Preço total a pagar</td>
                    <td>{this.state.fillLiters}</td>
                  </tr>
                  <tr>
                    <td>Quantidade na bomba</td>
                    <td>{this.state.quantity}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </>
        )}
      </section>
    );
  }
}