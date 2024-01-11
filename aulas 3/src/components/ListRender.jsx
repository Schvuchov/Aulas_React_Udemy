import {useState} from 'react'

const ListRender = () => {
    const [users, setUsers] = useState([
      { id:1, name: "Barbs", age: 28},
      { id:2, name: "Lulis", age: "??"},
      { id:3, name: "Mint", age: 1},
      { id:4, name: "Maya", age: 6},
    ]);

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 5); //floor arrendonda p baixo, 4 é relativo ao tamanho de users

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    };

  return (
    <div>
        <ul>
            {users.map((user) => (
              <li key={user.id}> {user.name} - {user.age}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender