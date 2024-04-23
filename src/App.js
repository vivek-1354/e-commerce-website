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
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)

    if (index > -1) {
      items[index] = item
    } else {
      items.push(item)
    }
    setCartItems([...items])
  }

  const onRemoveItem = (item) => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if (items[index].quantity === 0) {
      items.splice(index, 1)
    } else {
      items[index] = item
    }
    setCartItems([...items])
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
