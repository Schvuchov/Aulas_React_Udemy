import { useState } from "react"
import "./MyForm.css"

const MyForm = ({user}) => {
    // 6 - controlled inputs - props e estado inicial do useState - tem que fazer a ligação colocanco value no input
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const [bio, setBio] = useState(user ? user.bio : "")

    const [role, setRole] = useState(user ? user.role : "")
 
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        event.preventDefault() // isso é para que a pag não recarregue quando o usuário clica em enviar
        console.log('Enviando o form') //aqui podemos fazer as validações
        console.log(name, email, bio, role)

        // 7 - Limpar form após envio
        setName('')
        setEmail('')
        setBio('')
    }

  return (
    <div>
        <h3>Criação de Form</h3>
        {/* 5 - envio de form - onSubmit */}
        <form onSubmit={handleSubmit}>
            <div>
                {/* 1 - form usual */}
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName}
                value={name}
                />
            </div>
            {/* 2 - label envolvendo o input */}
            <label>
                <span>E-mail</span>
                {/* 4 - simplificação de manipulação de state - inline */}
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu Email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            {/*8 - textarea*/}
            <label>
                <span>Bio:</span>
                <textarea name="bio" 
                placeholder="Descrição do usuário"
                onChange={(e) => setBio(e.target.value)}
                value={bio}></textarea>
            </label>
            {/*9 - select */}
            <label>
                <span>Função no sistema</span>
                <select 
                name="role" 
                onChange={(e) => setRole(e.target.value)}
                value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>

  )
}

export default MyForm