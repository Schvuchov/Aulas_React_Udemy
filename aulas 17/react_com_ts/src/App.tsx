import React from 'react';

// importação de componentes
import FirstComponent from './components/FirstComponent';

//desestruturando props
import SecondComponent from './components/SecondComponent';
import Desctructuring, { Category } from './components/Desctructuring';

  //state
import State from './components/State';

function App() {
  //variaveis
  const name: string = "Matheus"
  const age: number = 30
  const isWorking: boolean = true

  //funçoes
  const userGreeting = (name: string): string => {
    return `olá, ${name}`
  }

  return (
    <div className="App">
      <h1>Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>idade: {age}</p>
      {isWorking && (
        <p>esta trabalhando</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo"/>
      <Desctructuring title='Primeiro post' content='conteúdo' commentsQty={10} tags={["ts", "js"]} category={Category.TS}/>
      <Desctructuring title='Segundo post' content='conteúdo2' commentsQty={1} tags={["Python"]} category={Category.P}/>
      <State />
    </div>
  );
}

export default App;
