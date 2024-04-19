import './App.css';
import ListItem from './components/ListItem';

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
  }]
  return (
    <ListItem data={data} />
  );
}

export default App;
