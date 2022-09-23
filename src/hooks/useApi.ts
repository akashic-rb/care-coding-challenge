import { useState, useEffect } from "react"
import instance from "../service/api"

const useApi = (url: string) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>(null);

    const getData = () => {
        setLoading(true)
        instance.get(url)
        .then(response => { 
            setData(response.data)
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    return { loading, data }
}

export default useApi