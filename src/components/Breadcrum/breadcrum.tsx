import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

const Breadcrum = ({ coin }: PropsWithChildren<{ coin: string }>) => {
    return (
        <div className="d-flex align-items-center">
            <Link to="/" className="text-secondary mx-2" style={{ textDecoration: "none" }}>Coins</Link>
            { '>' }
            <div className="fw-bold mx-2">{ coin }</div>
        </div>
    )
}

export default Breadcrum