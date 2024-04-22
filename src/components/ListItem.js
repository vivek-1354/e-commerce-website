import React from 'react'
import SingleItem from './SingleItem'
import axios from 'axios'




const ListItem = () => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        // async function getData() {
        //     const response = await fetch("https://e-commerce-9691-default-rtdb.firebaseio.com/.json")
        //     const data = await response.json()
        //     setProducts(data.items)
        // }
        // getData()

        axios.get("https://e-commerce-9691-default-rtdb.firebaseio.com/.json")
            .then(response => setProducts(response.data.items))
            .catch(err => console.log(err))
    })
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {products.length > 0 && products.map(item => <SingleItem item={item} />)}
            </div>
        </div>
    )
}

export default ListItem
