import { Link } from "react-router-dom"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"
import { CoinMetadata } from "../../service/coins"
import { toFixedNumber, toPositiveNumber } from "../../utils/number"
import "./table.scss"
import useSortData from "../../hooks/useSortData"

interface CoinListProps {
    coins: CoinMetadata[]
}

const Table = ({
    coins
}: CoinListProps) => {
    const { items, sort, sortConfig } = useSortData(coins)

    const displayDirection = (name: string | undefined, asc: boolean|undefined): string => {
        if(!sortConfig?.key || name !== sortConfig.key)
            return ""
        return asc ? "asc" : "desc"  
    }
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th 
                        className={`
                            text-end
                            ${ displayDirection("price_change_percentage_24h", sortConfig?.asc) }
                        `}   
                        style={{ cursor: "pointer" }} 
                        onClick={ () => sort("price_change_percentage_24h") }
                    >
                        24h%
                    </th>
                    <th 
                        className={`
                            text-end
                            ${ displayDirection("current_price", sortConfig?.asc) }
                        `} 
                        style={{ cursor: "pointer" }} 
                        onClick={ () => sort("current_price") }
                    >
                        Price
                    </th>
                    <th 
                        className={`
                            text-end
                            ${ displayDirection("market_cap", sortConfig?.asc) }
                        `} 
                        style={{ cursor: "pointer" }} 
                        onClick={ () => sort("market_cap") }
                    >
                        Market cap
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    items && items.map(coin => 
                        <tr key={ coin.market_cap_rank }>
                            <td>{ coin.market_cap_rank }</td>
                            <td>
                                <Link to={`/coin/${coin.id}`} className="d-flex align-items-center gap-1" style={{textDecoration: "none", color: "black"}}>
                                    <img src={ coin.image } alt="" className="w-25 rounded-circle" style={{ maxWidth: "24px" }}/>
                                    <span className="fw-bold">{ coin.name }</span>
                                    <span className="text-secondary text-uppercase">{ coin.symbol }</span>
                                </Link>
                            </td>
                            <td className={`
                                text-end
                                fw-bold
                                ${ coin.price_change_percentage_24h.toString().includes("-") ? "text-danger" : "text-success"}
                            `}>
                                <span>{ coin.price_change_percentage_24h.toString().includes("-") ? <FaCaretDown/> : <FaCaretUp/>}</span>
                                { toPositiveNumber(coin.price_change_percentage_24h) }%
                            </td>
                            <td className="text-end">
                                ${ toFixedNumber(coin.current_price) }
                            </td>
                            <td className="text-end">
                                ${ coin.market_cap.toLocaleString() }
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table