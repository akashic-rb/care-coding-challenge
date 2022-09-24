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
        <form onSubmit={ search }>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search coin by name or symbol" onChange={e => setKeyword(e.target.value)}/>
                <div className="input-group-append">
                    <button className="input-group-text btn btn-outline-secondary" type="submit">
                        <FaSearch/>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search