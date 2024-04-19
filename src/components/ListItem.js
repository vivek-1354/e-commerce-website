import React from 'react'

const ListItem = () => {
    return (
        <div className={'item-card'}>
            <img className={"img-fluid"} src="pexels-olenkabohovyk-3819969.jpg" alt="" />
            <div className={"item-card__information"} >
                <div className={"pricing"}>
                    <span>Rs.350</span>
                    <small>
                        <strike>450</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>Coke</h3>
                </div>
                <button className={"cart-add"}>
                    <span>Add to Cart</span>
                    <img src="add-to-cart-svgrepo-com.svg" alt="" width="20px" />
                </button>
            </div>
        </div>
    )
}

export default ListItem
