import { useDispatch } from "react-redux";
import { addItemHandler, removeItemHandler } from "../../actions";

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
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
                    {/* <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })} >-</button> */}
                    <button onClick={() => dispatch(removeItemHandler(item.id))} >-</button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={() => dispatch(addItemHandler(item))} >+</button>
                    {/* <button onClick={() => dispatch({ type: "ADD_ITEM", payload: { item: item } })} >+</button> */}
                </div>
            </div>
        </div>
    )
}

export default CartItem;