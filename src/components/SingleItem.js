import React from 'react'
import Modal from './UI/Modal';

const SingleItem = ({ item }) => {
    const [counter, setCounter] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)

    const increaseCounterByOne = () => {
        // Add increasing logic
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = () => {
        // Add descreasing logic
        if (counter <= 0) {
            return;
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
                    {counter > 0 && <div className={"title"}>
                        <h4>{"Select quantity"}</h4>
                    </div>}
                    {counter < 1 ?
                        <button className={"cart-add"} id="cart-add" onClick={() => setIsOpen(true)}>
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
            {isOpen && <Modal item={item} setIsOpen={setIsOpen} />}
        </>
    )
}

export default SingleItem
