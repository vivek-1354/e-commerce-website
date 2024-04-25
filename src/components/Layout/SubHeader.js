import React from 'react'

import { Link } from 'react-router-dom'
const SubHeader = () => {
    return (
        <div class="subheader-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kids">Kids</Link></li>
                <li><Link to="/kitchen">Kitchen</Link></li>
                <li><Link to="/sports">Sports</Link></li>
            </ul>
        </div>
    )
}

export default SubHeader
