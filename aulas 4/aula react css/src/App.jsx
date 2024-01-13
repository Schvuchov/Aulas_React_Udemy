import './App.css'
import MyComponent from './components/MyComponent'

import Car from "./components/Car.jsx"

import { useState } from 'react'
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("bla");
  const redTitle = false

  const myCars = [
    { name: "Fusca", km: 1000, color: "Branca"},
    { name: "Polo", km: 46123, color: "Cinza"},
    { name: "Onix", km: 0, color: "Preta"},
  ]

  return (
    <>
      <h1>React com CSS</h1>

      <h2>CSS do componente</h2>
      <MyComponent/>
      <p>Paragrafo do App.jsx</p>

      <h2>CSS Inline</h2>
      <p style={{color: "purple", padding:"25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>


      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS inline dinâmico</h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS inline dinâmico</h2>

      <h2 style={name === "bla" ? {color: "blue"} : null}>
        CSS inline dinâmico com o useState
      </h2>

      {/* as classes red-title e title estao no css global index.css */}
      <h2 className={redTitle ? "red-title" : "title"}>Classes dinâmicas</h2>

      {/*CSS modules aplica css por componente de modo que não vaza para outros */}
      <Title/>
      <h3 className="my_title">Testando a classe criado no module no App.js</h3>

      <h2>Desafio da seção</h2>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car}/>
        ))}
      </div>

      
    </>
  )
}

export default App
