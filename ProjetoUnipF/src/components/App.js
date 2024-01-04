import React from 'react'
import Busca from './Busca'
import openAI from '../utils/openAI'

export default class App extends React.Component {
    
state = {
    analise:''
}

    onBuscaRealizada = (termo) => {
        console.log(termo)
        openAI.post('/submeta-o-prompt',{this.state.termoConcatenado})
        
    }       
    render() {
        return (
            <div className="grid justify-content-center m-auto w-9 borderround border-1 border-400">
                <div className="col-12">
                    <h1 className="text-center">Gerador de ata do Banco Central</h1>
                </div>
                <div className="col-8">
                    <Busca 
                    onBuscaRealizada={this.onBuscaRealizada} 
                    />
                </div>
            </div>
        )
    }
}