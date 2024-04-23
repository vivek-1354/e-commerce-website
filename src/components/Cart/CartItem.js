const CartItem = ({ item, onEmitDecreaseItem, onEmitIncreaseItem }) => {
    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img className="img-fluid" src={item.thumbnail} alt="" />
            </div>
            <div className="information">
                <div>
                    <h4>{item.title}</h4>
                    <div className="pricing">
                        <span>{item.discountedPrice}</span>
                        <small><strike>{item.price}</strike></small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={() => onEmitDecreaseItem(item.id)} >-</button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={() => onEmitIncreaseItem(item.id)} >+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;