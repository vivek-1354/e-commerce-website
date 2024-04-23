import React from 'react'
import SingleItem from './SingleItem'
import axios from 'axios'
import Loader from '../Layout/Loader'




const ListItem = ({ onAddItem, onRemoveItem, eventList }) => {
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
                // setTimeout(() => {
                const addQuantity = response.data.items.map(item => {
                    return {
                        ...item,
                        quantity: 0
                    }
                })
                // console.log(addQuantity)
                setProducts(addQuantity)
                setIsLoading(false)
                // }, 5000)
            })
            .catch(err => console.log(err))
    }, [])

    React.useEffect(() => {
        if (eventList.id > -1) {
            if (eventList.type === 1) {
                handleAddItem(eventList.id)
            } else if (eventList.type === -1) {
                handleRemoveItem(eventList.id)
            }
        }
    }, [eventList])

    const handleAddItem = id => {
        // if (presentItems.indexOf(id) > -1) {
        //     return
        // }
        // setPresentItems([...presentItems, id])
        // onAddItem()
        let data = [...products]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1
        setProducts([...data])
        onAddItem(data[index])
    }

    const handleRemoveItem = id => {
        // let index = presentItems.indexOf(id)
        // if (index > -1) {
        //     let items = [...presentItems]
        //     items.splice(index, 1)
        //     setPresentItems([...items])
        //     onRemoveItem()
        // }
        let data = [...products]
        let index = data.findIndex(i => i.id === id)
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1
        }
        setProducts([...data])
        onRemoveItem(data[index])
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
