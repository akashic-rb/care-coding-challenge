import Table from "components/Table/Table"
import Search from "components/Search/Search"
import useApi from "hooks/useApi"
import config from "config/config"

const CoinPage = () => {
    const { loading, data } = useApi(`${config.apiUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

    if(loading) return <div>Loading...</div>
    
    return (
        <div className="mx-2">
            <Search></Search>
            <Table coins={data}></Table>
        </div>
    )
}

export default CoinPage