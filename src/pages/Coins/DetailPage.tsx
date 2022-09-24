import { useParams } from "react-router-dom"
import config from "config/config"
import useApi from "hooks/useApi"
import Breadcrum from "components/Breadcrum/breadcrum"
import { toFixedNumber, toPositiveNumber } from "utils/number"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"

const DetailPage = () => {
    const { id } = useParams()
    const {loading, data} = useApi(`${config.apiUrl}/coins/${id}?localization=false`)

    if(loading) {
        return <div>Loading...</div>
    }

    if(!data) {
        return <div>404 not found</div>
    }

    console.log(data)
    return (
        <div className="container-fluid mx-2">
            <Breadcrum coin={data.name}></Breadcrum>
            <p className="my-3"></p>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                    <div>
                        <img src={ data.image.large } alt="" className="rounded-circle" style={{maxWidth: "32px"}}/>   
                    </div>
                    <h2 className="fw-bold m-0">{ data.name }</h2>
                    <span className="badge badge-secondary text-uppercase bg-secondary">
                        { data.symbol }
                    </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="fw-bold m-0">${ data.market_data.current_price.usd.toLocaleString() }</h2>
                    <div>
                        <span 
                            className={`badge 
                            ${ data.market_data.price_change_percentage_24h.toString().includes("-") ? "bg-danger" : "bg-success"}
                            `}
                        >
                            { data.market_data.price_change_percentage_24h.toString().includes("-") ? <FaCaretDown/> : <FaCaretUp/>}
                            {' '}
                            { toPositiveNumber(data.market_data.price_change_percentage_24h) }%
                        </span>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-4 border-right border-secondary">
                    <div className="text-secondary fw-bold">Market Cap</div>
                    <div>${ data.market_data.market_cap.usd.toLocaleString() }</div>
                </div>
                <div className="col-4">
                    <div className="text-secondary fw-bold">
                        Volume <span className="badge text-white bg-secondary">24h</span>
                    </div>
                    <div>${ data.market_data.total_volume.usd.toLocaleString() }</div>
                </div>
                <div className="col-4">
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary fw-bold">Max Supply: </span>
                        { data.market_data.max_supply?.toLocaleString() }
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary fw-bold">Total Supply: </span>
                        { data.market_data.circulating_supply.toLocaleString() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage