import React from 'react'
import SingleItem from './SingleItem'
import axios from 'axios'
import Loader from '../Layout/Loader'

const ListItem = () => {
    const [products, setProducts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        axios.get("https://e-commerce-9691-default-rtdb.firebaseio.com/.json")
            .then(response => {
                setProducts(response.data.items)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

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
