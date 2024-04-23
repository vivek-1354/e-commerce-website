import './App.css';
import React from 'react'
import Counter from './components/UnUsedcom/Counter';
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
import ListItem from './components/Product/ListItem';
import User from './components/UnUsedcom/User';
import Product from './components/UnUsedcom/product';

function App() {
  const [cartItems, setCartItems] = React.useState([])
  const [eventQueue, setEventQueue] = React.useState({
    id: "",
    type: ""
  })

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

  const handleEventQueue = (id, type) => {
    setEventQueue({
      id,
      type
    })
    console.log(id, type)
  }
  return (
    <>
      <Header count={cartItems.length} cartItems={cartItems} handleEventQueue={handleEventQueue} />
      <SubHeader />
      <ListItem onAddItem={onAddItem} onRemoveItem={onRemoveItem} eventList={eventQueue} />
      {/* <ListItem data={data} /> */}
      {/* <Product />
      {/* <User /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
