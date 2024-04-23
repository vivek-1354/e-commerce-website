import './App.css';
import React from 'react'
import Counter from './components/Counter';
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
import ListItem from './components/ListItem';
import User from './components/User';
import Product from './components/product';

function App() {
  const [cartItems, setCartItems] = React.useState(0)

  const onAddItem = () => {
    setCartItems(cartItems + 1)
  }

  const onRemoveItem = () => {
    setCartItems(cartItems - 1)
  }
  return (
    <>
      <Header count={cartItems} />
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
