import { useParams } from "react-router-dom"
import config from "config/config"
import useApi from "hooks/useApi"
import Breadcrum from "components/Breadcrum/breadcrum"

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
        <div>
            <Breadcrum coin={data.name}></Breadcrum>
            <img src={ data.image.large } alt="" className="w-25 rounded-circle" style={{maxWidth: "50px"}}/>
        </div>
    )
}

export default DetailPage