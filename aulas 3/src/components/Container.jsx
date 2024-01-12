function Container({ children, myValue }) {
  return (
    <div>
        <h3>A prop children - Titulo no Container</h3>
        {children}
        <p>Segue podendo ter props : {myValue}</p>
    </div>
  )
}

export default Container;