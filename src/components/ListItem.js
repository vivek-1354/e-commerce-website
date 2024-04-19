import React from 'react'

const ListItem = () => {

    const data = [{
        discountedPrice: 350,
        price: 450,
        title: "Coke",
        thumbnail: "pexels-olenkabohovyk-3819969.jpg"
    },
    {
        discountedPrice: 250,
        price: 350,
        title: "Digital Camera Lens",
        thumbnail: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"
    }]

    return (
        <div className={"product-list--wrapper"}>
            {data.map(item => {
                return (
                    <div className={'item-card'}>
                        <img className={"img-fluid"} src={item.thumbnail} alt="" />
                        <div className={"item-card__information"} >
                            <div className={"pricing"}>
                                <span>Rs.{item.discountedPrice}</span>
                                <small>
                                    <strike>{item.price}</strike>
                                </small>
                            </div>
                            <div className={"title"}>
                                <h3>{item.title}</h3>
                            </div>
                            <button className={"cart-add"}>
                                <span>Add to Cart</span>
                                <img src="add-to-cart-svgrepo-com.svg" alt="" width="20px" />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListItem
