import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch} from "react-icons/fa"

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()
    const search = (e: FormEvent) => {
        e.preventDefault()
        navigate(`/coin/${keyword}`)
    }

    return (
        <form className="input-group mb-3" onSubmit={ search }>
            <input type="text" className="form-control" placeholder="Search coin by name or symbol" onChange={e => setKeyword(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                    <FaSearch/>
                </button>
            </div>
        </form>
    )
}

export default Search