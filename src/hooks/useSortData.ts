import { useState, useMemo } from "react"
import { CoinMetadata } from "service/coins"

interface SortConfig {
    key: keyof CoinMetadata,
    asc: boolean
}

const useSortData = (items: CoinMetadata[], config = null) => {
    const [sortConfig, setSortConfig] = useState<SortConfig|null>(config)

    const sort = (key: keyof CoinMetadata) => {
        let asc = true
        if(sortConfig && sortConfig.key === key && sortConfig.asc) {
            asc = false
        }
        setSortConfig({ key, asc })
    }

    const sortedData = useMemo(() => {
        const sortableItems = items
        if(sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if(a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.asc ? -1 : 1
                }
                if(a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.asc ? 1 : -1
                }
                return 0
            })
        }
        return sortableItems
    }, [items, sortConfig])

    return { items: sortedData, sort, sortConfig }
}

export default useSortData