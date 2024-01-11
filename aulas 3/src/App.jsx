import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRender from './components/ListRender.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'
import ShowUserName from './components/ShowUserName.jsx'
import CarProps from './components/CarProps.jsx'

function App() {
  const [userName] = useState("Mintinho") //poder ser só uma cont normal tbm pra funcionar o props

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Verde", newCar: false, km: 116848},
    {id: 3, brand: "VW", color: "Vermelho", newCar: false, km: 569},
  ]

  return (
    <>
      <h1>Aulas React</h1>
      
      <h2>Renderização de lista e previous state</h2>
      <ListRender/>

      <h2>Renderização condicional</h2>
      <ConditionalRender/>

      <h2>Props</h2>
      <ShowUserName name={userName}/> 
      
      <h2>Destructuring Props</h2>
      <CarProps brand="VW" km={0} color="silver" newCar={true}/>
      <h3>Reaproveitando o componente com diferentes props</h3>
      <CarProps brand="Fiat" km={82156} color="black" newCar={false}/>

      <h2>Loop em array de objetos. Render de lista em compo</h2>
      {cars.map((car) => (
        <CarProps
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}


    </>
  )
}

export default App
