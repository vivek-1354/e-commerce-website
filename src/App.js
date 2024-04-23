import './App.css';
import React from 'react'
import Counter from './components/UnUsedcom/Counter';
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
import ListItem from './components/ListItem';
import User from './components/UnUsedcom/User';
import Product from './components/UnUsedcom/product';

function App() {
  const [cartItems, setCartItems] = React.useState([])

  const onAddItem = (item) => {
    setCartItems([...cartItems, item])
  }

  const onRemoveItem = (id) => {
    let data = [...cartItems].filter(item => item.id !== id)
    // setCartItems(cartItems - 1)
    setCartItems([...data])
  }
  return (
    <>
      <Header count={cartItems.length} cartItems={cartItems} />
      <SubHeader />
      <ListItem onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
      {/* <ListItem data={data} /> */}
      {/* <Product />
      {/* <User /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
