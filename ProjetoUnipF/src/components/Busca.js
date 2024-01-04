import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export default class Busca extends Component {

    state = {
        termoDeBusca1: '',
        termoConcatenado: '',
    }
    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca1: event.target.value })
    }

    onFormSubmit = (event) => {
        // Não deixa o navegador submeter o form
        event.preventDefault();
        this.props.onBuscaRealizada(this.state.termoDeBusca1)
    //    this.setState({ termoConcatenado });   
        const termoConcatenado = `Inflação 12m ${this.state.termoDeBusca1} A meta de inflação é  3% aa, a Selic é 11,75% aa fazer um texto breve no modelo das Atas do Banco Central do Brasil.`;
        console.log(termoConcatenado);
      };

    
        
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="flex flex-column mt-2">
                    {/* ícone à esquerda, largura máxima */}
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-money-bill" />
                        <InputText
                            //largura máxima
                            value={this.state.termoDeBusca1}
                            className="w-full"
                            onChange={this.onTermoAlterado}
                            placeholder={this.props.dica}
                        />
                    </span>
                    <div className="flex flex-column mt-2">
                        <Button
                            label="     Enviar Informação para AI"
                            className="p-button-outlined mt-2 pi pi-prime"
                        />
                    </div>
                </div>
            </form>
        )
    }
}
Busca.defaultProps = {
    dica: 'Inflação 12m',
}