import React from 'react'
import { Fragment } from 'react'
import ReactDom from 'react-dom'
import SingleItem from '../Product/SingleItem'

const Modal = ({ title, setIsOpen, children }) => {
    return (
        <>
            {ReactDom.createPortal(
                <>
                    <div className="modal">
                        <div>
                            <h2>{title}</h2><hr />
                            <button type="close" onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div>{children}</div>
                    </div>
                </>
                ,
                document.getElementById("modal-root")
            )}
        </>
    )
}

export default Modal
