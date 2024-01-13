import { useState } from 'react'
import './App.css'
import ListRender from './components/ListRender.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'
import ShowUserName from './components/ShowUserName.jsx'
import CarProps from './components/CarProps.jsx'
import Container from './components/Container.jsx'
import ExecuteFunction from './components/ExecuteFunction.jsx'
import Message from './components/Message.jsx'
import ChangeMessageState from './components/ChangeMessageState.jsx'
import UserDetails from './components/UserDetails.jsx'

function App() {
  const [userName] = useState("Mintinho") //poder ser só uma cont normal tbm pra funcionar o props

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Verde", newCar: false, km: 116848},
    {id: 3, brand: "VW", color: "Vermelho", newCar: false, km: 569},
  ]

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, nome: "Barb", idade: 28},
    {id: 2, nome: "Mint", idade: 1},
    {id: 3, nome: "Maya", idade: 7},
    {id: 4, nome: "Lucas", idade: 43},
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
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      <h2>Prop Children</h2>
      <Container myValue="teste1">
        <p>Aqui esta o conteúdo da tag container no App</p>
      </Container>

      <Container myValue="teste2">
        <h4>Reutilizando o container aqui</h4>
      </Container>  
      
      <h2>Função como Props</h2>
      <ExecuteFunction myFunction={showMessage}/>

      <h2>State lift</h2>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      <h2>Tarefinha da seção</h2>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
        />
      ))}

    </>
  )
}

export default App
