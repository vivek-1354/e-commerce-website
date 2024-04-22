import './App.css';
import Counter from './components/Counter';
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
import ListItem from './components/ListItem';
import User from './components/User';
import Product from './components/product';

function App() {
  const data = [{
    discountedPrice: 350,
    price: 450,
    title: "Coke",
    thumbnail: "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    discountedPrice: 250,
    price: 350,
    title: "Digital Camera Lens",
    thumbnail: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    discountedPrice: 250,
    price: 450,
    title: "Camera",
    thumbnail: "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  ]
  return (
    <>
      <Header />
      <SubHeader />
      <ListItem />
      {/* <ListItem data={data} /> */}
      {/* <Product />
      {/* <User /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
