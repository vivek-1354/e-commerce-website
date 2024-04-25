import React from 'react'
import SingleItem from './SingleItem'
import axios from 'axios'
import Loader from '../Layout/Loader'
import { useLocation, useParams } from 'react-router'

const ListItem = () => {
    const [products, setProducts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const params = useParams()

    const { search } = useLocation()

    React.useEffect(() => {
        console.log(search)
        setIsLoading(true)
        let slug = `items.json`

        if (params.category) {
            slug = `items-${params.category}.json`
        }
        axios.get(`https://e-commerce-9691-default-rtdb.firebaseio.com/${slug}`)
            .then(response => {

                const setId = response.data.map((item, idx) => { return { ...item, id: idx } })
                setProducts(setId)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        return () => {
            setProducts([])
            setIsLoading(true)
        }
    }, [params])

    return (
        <div className={"product-list"}>
            {isLoading && <Loader />}
            <div className={"product-list--wrapper"}>
                {products.length > 0 && products.map((item, idx) => <SingleItem key={idx} data={item} />)}
            </div>
        </div>
    )
}

export default ListItem
