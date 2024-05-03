import React from 'react';
import { createContext } from 'react';

// importação de componentes
import FirstComponent from './components/FirstComponent';

//desestruturando props
import SecondComponent from './components/SecondComponent';
import Desctructuring, { Category } from './components/Desctructuring';

//state
import State from './components/State';

import Context from './components/Context';

//types
type textOrNull = string | null
type fixed = "Isso" | "ou" | "Aquilo"

//context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //variaveis
  const name: string = "Matheus"
  const age: number = 30
  const isWorking: boolean = true

  //funçoes
  const userGreeting = (name: string): string => {
    return `olá, ${name}`
  }

  //type
  const myText: textOrNull = "temos texto"
  let mySecondText: textOrNull = null
  //const mySecondText = 2      da erro

  //const testandoFixed: fixed = "teste"     da erro
  const testandoFixed: fixed = "Isso"

  //context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}> 
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
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p> Tem texto aqui tbm</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
