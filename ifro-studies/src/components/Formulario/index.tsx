import React from 'react';
import Botao from '../Botao';
import './style.scss'

class Formulario extends React.Component {
  render(){
    return(
      <form className='novaTarefa'>
        <div className='inputContainer'>
          <label htmlFor='tarefa'> 
            Tarefa 
          </label>
          <input
            id='tarefa'
            name='Tarefa'
            type='text'
            placeholder='O que você quer estudar?'
            required
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='tempo'> 
            Tempo 
          </label>
          <input
            id='tempo'
            name='tempo'
            type='time'
            step='1'
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Botao/>
      </form>
    )
  }
}

export default Formulario