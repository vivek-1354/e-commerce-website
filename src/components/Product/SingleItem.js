import React from 'react';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItemHandler, removeItemHandler } from '../../actions';

const SingleItem = ({ data }) => {
    // const [counter, setCounter] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)

    const item = useSelector(state => state.items.find(item => item.id === data.id))
    const dispatch = useDispatch()

    const increaseCounterByOne = (event) => {
        event.stopPropagation()
        // dispatch({
        //     type: "ADD_ITEM",
        //     payload: {
        //         item: data
        //     }
        // })
        dispatch(addItemHandler(data))
    }

    const descreaseCounterByOne = (event) => {
        event.stopPropagation()
        // dispatch({ type: "REMOVE_ITEM", payload: { id: data.id } })
        dispatch(removeItemHandler(data.id))
    }

    return (
        <>
            <div className={'item-card'} onClick={setIsOpen}>
                <img className={"img-fluid"} src={data.thumbnail} alt="" />
                <div className={"item-card__information"} >
                    <div className={"pricing"}>
                        <span>Rs.{data.discountedPrice}</span>
                        <small>
                            <strike>{data.price}</strike>
                            <span>  <i>{Math.floor(((data.price - data.discountedPrice) * 100) / data.price)} % off</i></span>
                        </small>
                    </div>
                    <center className={"title"}>
                        <h3>{data.title}</h3>
                    </center>
                    {/* {counter > 0 && <div className={"title"}>
                        <h4>{"Select quantity"}</h4>
                    </div>} */}
                    <button className={"cart-add"} id="cart-add" onClick={increaseCounterByOne}>
                        <span>{!item || item?.quantity > 0 ? "Add to cart" : "Added to Cart"}</span>
                        <img src="add-to-cart-svgrepo-com.svg" alt="" width="20px" />
                    </button>
                </div>
            </div>
            {isOpen && <SingleItemDetails data={data} item={item} setIsOpen={setIsOpen} increaseCounterByOne={increaseCounterByOne} descreaseCounterByOne={descreaseCounterByOne} />}
        </>
    )
}

const SingleItemDetails = ({ data, item, setIsOpen, increaseCounterByOne, descreaseCounterByOne }) => {
    return (
        <Modal title={data.title} setIsOpen={setIsOpen}>
            <div className="item-card__modal">
                <div className="img-wrap">
                    <img className={"img-fluid"} src={data.thumbnail} alt="" />
                </div>
                <div className="meta">
                    <h3>{data.title}</h3>
                    <div className="pricing">
                        <span>Rs.{data.discountedPrice}</span>
                        <small><strike>{data.price}</strike></small>
                    </div>
                    <p>{data.description}</p>
                    {!item || item?.quantity < 1 ?
                        <button className={"cart-add"} id="cart-add" onClick={increaseCounterByOne}>
                            <span>Add to Cart</span>
                            <img src="add-to-cart-svgrepo-com.svg" alt="" width="20px" />
                        </button>
                        : <div className={"cart-addon"}>
                            <button onClick={descreaseCounterByOne}><span>-</span></button>
                            <span className={"counter"}>{item.quantity}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default SingleItem
