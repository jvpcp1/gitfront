import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export default class Busca extends Component {

    state = {
        termoDeBusca1: '',
        termoDeBusca2: '',
        termoConcatenado: '',
    }
    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca1: event.target.value })
    }
    onTermo2Alterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca2: event.target.value })
    }

    onFormSubmit = (event) => {
        // Não deixa o navegador submeter o form
        event.preventDefault();
        const termoConcatenado = `Inflação 12m ${this.state.termoDeBusca1} & Taxa de Juros Real 12M ${this.state.termoDeBusca2} fazer um texto breve no modelo das Atas do Banco Central do Brasil por meio de seu Comite de Politicas Monetaria destacando as variáveis indicadas`;
        this.setState({ termoConcatenado });   
        this.props.onBuscaRealizada(this.state.termoConcatenado)
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
                        {/* ícone à esquerda, largura máxima */}
                        <span className="p-input-icon-left w-full">
                            <i className="pi pi-money-bill" />
                            <InputText
                                //largura máxima
                                value={this.state.termoDeBusca2}
                                className="w-full"
                                onChange={this.onTermoAlterado2}
                                placeholder={this.props.dica2}
                            />
                        </span>
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
    dica2: 'Taxa de Juros Real 12m'
}