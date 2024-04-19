import React from 'react'
import SingleItem from './SingleItem'




const ListItem = ({ data }) => {
    return (
        <div className={"product-list--wrapper"}>
            {data.map(item => <SingleItem item={item} />)}
        </div>
    )
}

export default ListItem
