import { Link } from "react-router-dom"
import "./Menu.style.scss"

const Menu = () => {
    return (
        <ul className="d-flex gap-4">
            <li>
                <Link to={"/"}>Crytocurrencies</Link>
            </li>
            <li>
                <Link to={"/"}>Exchages</Link>
            </li>
            <li>
                <Link to={"/"}>Community</Link>
            </li>
            <li>
                <Link to={"/"}>Products</Link>
            </li>
            <li>
                <Link to={"/"}>Learn</Link>
            </li>
        </ul>
    )
}

export default Menu