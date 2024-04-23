import React from 'react'
import Modal from './UI/Modal';

const SingleItem = ({ item, onAdd, onRemove }) => {
    const [counter, setCounter] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)

    const increaseCounterByOne = (event) => {
        event.stopPropagation()
        // Add increasing logic
        onAdd(item.id)
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = (event) => {
        event.stopPropagation()
        // Add descreasing logic
        if (counter === 0) {
            return;
        }
        if (counter === 1) {
            onRemove(item.id)
        }
        setCounter(counter - 1);
    }

    return (
        <>
            <div className={'item-card'} onClick={setIsOpen}>
                <img className={"img-fluid"} src={item.thumbnail} alt="" />
                <div className={"item-card__information"} >
                    <div className={"pricing"}>
                        <span>Rs.{item.discountedPrice}</span>
                        <small>
                            <strike>{item.price}</strike>
                            <span>  <i>{Math.floor(((item.price - item.discountedPrice) * 100) / item.price)} % off</i></span>
                        </small>
                    </div>
                    <center className={"title"}>
                        <h3>{item.title}</h3>
                    </center>
                    {/* {counter > 0 && <div className={"title"}>
                        <h4>{"Select quantity"}</h4>
                    </div>} */}
                    <button className={"cart-add"} id="cart-add" onClick={increaseCounterByOne}>
                        <span>{counter > 0 ? "Added to cart" : "Add to Cart"}</span>
                        <img src="add-to-cart-svgrepo-com.svg" alt="" width="20px" />
                    </button>
                </div>
            </div>
            {isOpen &&
                <Modal title={item.title} setIsOpen={setIsOpen}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={item.thumbnail} alt="" />
                        </div>
                        <div className="meta">
                            <h3>{item.title}</h3>
                            <div className="pricing">
                                <span>Rs.{item.discountedPrice}</span>
                                <small><strike>{item.price}</strike></small>
                            </div>
                            <p>{item.description}</p>
                            {counter < 1 ?
                                <button className={"cart-add"} id="cart-add" onClick={increaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    <img src="add-to-cart-svgrepo-com.svg" alt="" width="20px" />
                                </button>
                                : <div className={"cart-addon"}>
                                    <button onClick={descreaseCounterByOne}><span>-</span></button>
                                    <span className={"counter"}>{counter}</span>
                                    <button onClick={increaseCounterByOne}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modal>}
        </>
    )
}

export default SingleItem
