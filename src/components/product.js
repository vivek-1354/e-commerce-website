import { useState } from "react"
import SingleItem from "./SingleItem"
import Form from "./Form"

const oneItem = {
    id: 0,
    title: "Coke",
    price: 450,
    discountedPrice: 340,
    thumbnail: "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600"
}

const Product = () => {
    const [item, setItem] = useState([])
    return (
        <div className={"product-wrapper"}>
            <Form item={item} setItem={setItem} />
            {item.map(itm => <SingleItem item={itm} />)}
            {/* <SingleItem item={item} /> */}
        </div>
    )
}

export default Product