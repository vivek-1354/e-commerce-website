import React from 'react'
import SingleItem from './SingleItem'
import axios from 'axios'
import Loader from './Layout/Loader'




const ListItem = ({ onAddItem, onRemoveItem }) => {
    const [products, setProducts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [presentItems, setPresentItems] = React.useState([])

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
                // setTimeout(() => {
                setProducts(response.data.items)
                setIsLoading(false)
                // }, 5000)
            })
            .catch(err => console.log(err))
    }, [])

    const handleAddItem = id => {
        if (presentItems.indexOf(id) > -1) {
            return
        }
        setPresentItems([...presentItems, id])
        onAddItem()
    }

    const handleRemoveItem = id => {
        let index = presentItems.indexOf(id)
        if (index > -1) {
            let items = [...presentItems]
            items.splice(index, 1)
            setPresentItems([...items])
            onRemoveItem()
        }
    }
    return (
        <div className={"product-list"}>
            {isLoading && <Loader />}
            <div className={"product-list--wrapper"}>
                {products.length > 0 && products.map((item, idx) => <SingleItem key={idx} item={item} onAdd={handleAddItem} onRemove={handleRemoveItem} />)}
            </div>
        </div>
    )
}

export default ListItem
