import React from 'react'
import { Fragment } from 'react'
import ReactDom from 'react-dom'
import SingleItem from '../SingleItem'

const Modal = ({ item, setIsOpen }) => {
    return (
        <>
            {ReactDom.createPortal(
                <Fragment>
                    <div className="modal">
                        <div>
                            <h2>Modal Content! {item.title}</h2>
                            <button type="close" onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div>
                            {item.description}
                        </div>
                        <div>{item.price}</div>
                    </div>

                </Fragment>
                ,
                document.getElementById("modal-root")
            )}
        </>
    )
}

export default Modal
