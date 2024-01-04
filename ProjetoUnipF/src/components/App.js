import React from 'react'
import Busca from './Busca'
import openAI from '../utils/openAI'

export default class App extends React.Component {
    
state = {
<<<<<<< HEAD
    resposta:''
}

    //  onBuscaRealizada = (termo) => {
    //Console.log(termo)
    //    openAI.post('/submeta-o-prompt',{this.state.termoConcatenado})}

    onBuscaRealizada = (busca) => {
        console.log(busca)
        //    this.setState({receita: '', buscando: 'sim'})
        openAI.post('/pergunte-ao-chatgpt',{ prompt: busca})
        .then(result => {
          this.setState({resposta: result.data.completion})
          console.log(result.data.completion)
        })
        .catch(erro => {
          console.log(erro);
          this.setState({resposta: erro})
        });
      }
      
=======
    analise:''
}

    onBuscaRealizada = (termo) => {
        console.log(termo)
        openAI.post('/submeta-o-prompt',{this.state.termoConcatenado})
        
    }       
>>>>>>> 011312d5750e409ae680354d5bcc999303d0b70a
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
<<<<<<< HEAD
                <div>{this.state.resposta}</div>
=======
>>>>>>> 011312d5750e409ae680354d5bcc999303d0b70a
            </div>
        )
    }
}