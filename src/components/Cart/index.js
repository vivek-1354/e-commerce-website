import React from "react";
import Modal from "../UI/Modal";

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

const Cart = ({ count, cartItems, onEmitDecreaseItem, onEmitIncreaseItem }) => {
    const [showModal, setShowModal] = React.useState(false)

    const handleModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <>
            <button onClick={handleModal}>
                <span data-items={count}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {showModal && <Modal setIsOpen={handleModal} >
                <div className="checkout-modal">
                    <h2>Checkout Modal</h2>
                    <div className="checkout-modal_list">
                        {
                            count > 0 ?
                                cartItems.map(item => <CartItem item={item} onEmitDecreaseItem={onEmitDecreaseItem} onEmitIncreaseItem={onEmitIncreaseItem} />) :
                                <div className="empty-cart">Please add someting in your cart</div>
                        }
                    </div>
                    {count > 0 && <div className="checkout-modal_footer">
                        <div className="totalAmount">
                            <h4>Total Amount: </h4>
                            <h4>
                                {
                                    cartItems.reduce((previous, current) => {
                                        return previous + (current.discountedPrice * current.quantity)
                                    }, 0)
                                }
                                INR</h4>
                        </div>
                        <button>Order Now</button>
                    </div>}
                </div>
            </Modal>}
        </>
    )
}
export default Cart;