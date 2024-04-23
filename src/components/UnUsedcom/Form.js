import React, { useRef } from 'react'

const Form = ({ item, setItem }) => {
    const title = useRef()
    const price = useRef()
    const discountedPrice = useRef()
    const thumbnail = useRef("")
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0)
    // const [discountedPrice, setDiscountedPrice] = useState(0)
    // const [thumbnail, setThumbnail] = useState("")

    // const [item, setItem] = useState({
    //     // id: 0,
    //     // title: title.current.value,
    //     // price: price.current.value,
    //     // discountedPrice: discountedPrice.current.value,
    //     // thumbnail: thumbnail.current.value
    // })

    // const handleTitle = (event) => {
    //     // console.log(event)
    //     // console.log(event.target.value)
    //     setTitle(event.target.value)
    //     setItem({
    //         ...item,
    //         title: event.target.value
    //     })
    // }

    // const handlePrice = event => {
    //     setPrice(event.target.value)
    //     setItem({
    //         ...item,
    //         price: event.target.value
    //     })
    // }

    // const handleDiscountedPrice = event => {
    //     setDiscountedPrice(event.target.value)
    //     setItem({
    //         ...item,
    //         discountedPrice: event.target.value
    //     })
    // }

    // const handleThumbnail = event => {
    //     setThumbnail(event.target.value)
    //     setItem({
    //         ...item,
    //         thumbnail: event.target.value
    //     })
    // }

    // generic function

    // const handleInput = event => {
    //     const name = event.target.name
    //     const value = event.target.value

    //     setItem({
    //         ...item,
    //         [name]: value
    //     })
    // }

    const submitForm = event => {
        event.preventDefault();
        if (discountedPrice > price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }
        setItem([
            ...item,
            {
                title: title.current.value,
                price: price.current.value,
                discountedPrice: discountedPrice.current.value,
                thumbnail: thumbnail.current.value
            }
        ])
    }
    return (
        <div className={"form"}>
            <form onSubmit={submitForm}>
                <h2>Item Card Details</h2>
                <div className={"input-field"}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        // value={title}
                        // onChange={handleTitle}
                        ref={title}
                        required
                    />
                </div>
                <div className={"input-field"}>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        // value={price}
                        // onChange={handlePrice}
                        ref={price}
                        required
                    />
                </div>
                <div className={"input-field"}>
                    <label htmlFor="discountPrice">Discount Price</label>
                    <input
                        type="number"
                        placeholder="Enter Discounted Price"
                        // value={discountedPrice}
                        // onChange={handleDiscountedPrice}
                        ref={discountedPrice}
                        required
                    />
                </div>
                <div className={"input-field"}>
                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input
                        type="text"
                        placeholder="Enter Thumbnail name"
                        // value={thumbnail}
                        // onChange={handleThumbnail}
                        ref={thumbnail}
                        required
                    />
                </div>
                <div className={"submit-wrap"}>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}

export default Form
