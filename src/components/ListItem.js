import React from 'react'
import SingleItem from './SingleItem'
import axios from 'axios'
import Loader from './Layout/Loader'




const ListItem = () => {
    const [products, setProducts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        // async function getData() {
        //     const response = await fetch("https://e-commerce-9691-default-rtdb.firebaseio.com/.json")
        //     const data = await response.json()
        //     setProducts(data.items)
        // }
        // getData()
        setIsLoading(true)
        axios.get("https://e-commerce-9691-default-rtdb.firebaseio.com/.json")
            .then(response => {
                setTimeout(() => {
                    setProducts(response.data.items)
                    setIsLoading(false)
                }, 5000)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={"product-list"}>
            {isLoading && <Loader />}
            <div className={"product-list--wrapper"}>
                {products.length > 0 && products.map(item => <SingleItem item={item} />)}
            </div>
        </div>
    )
}

export default ListItem
