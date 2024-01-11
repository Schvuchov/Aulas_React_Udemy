const CarProps = ({ brand, km, color, newCar }) => {
  return (
    <div>
        <h4>Usando Props pra mostrar diferentes info sobre um carro</h4>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>

        {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarProps