import React from 'react'
import Modal from './Modal'

const OrderSuccessModal = ({ handleOrderModal }) => {
    return (
        <Modal setIsOpen={handleOrderModal}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src="order-success.svg" alt="" className='img-fluid' />
                    <div className="message">
                        <h1>Order successfully placed!</h1>
                        <span>OrderId #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal
