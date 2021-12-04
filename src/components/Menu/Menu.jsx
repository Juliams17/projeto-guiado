import { Link } from 'react-router-dom'

const Menu = () => {
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/lista">Lista de Tarefas</Link>
            </li>
            <li>
            <Link to="/página">Página</Link>
            </li>
        </ul>
    )
}

export default Menu