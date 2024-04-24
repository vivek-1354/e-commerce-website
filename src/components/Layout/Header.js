import React from 'react'

import Cart from "../Cart"

const Header = () => {
    return (
        <header>
            <div class="nav-brand">
                <a href="/">
                    <span>Your's Kart</span>
                    <img src="add-to-cart-svgrepo-com." alt="" width="50px" />
                </a>
            </div>
            <div class="searchBox-container">
                <form>
                    <input name="search" type="text"
                        id="search" placeholder="Enter product name, category" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20"
                            height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20"
                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </div>
            <div class="cart-container">
                <Cart />
            </div>
        </header>
    )
}

export default Header
