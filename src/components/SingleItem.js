import React from 'react'

const SingleItem = ({ item }) => {
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
}

export default SingleItem
