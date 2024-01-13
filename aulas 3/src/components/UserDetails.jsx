const UserDetails = ({nome, idade}) => {
  return (
    <div>
        <h3>Mostrar dados dos usuários e testar idade</h3>
        <p> O nome é {nome} e a idade é {idade} </p>
        {idade >= 18 ? (<p>Pode tirar carteira</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails