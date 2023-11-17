import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/banner";
import Header from "./Components/Header/header";
import Container from "./Components/Container/container";
import ItemCard from "./Components/ItemCard/itemCard";
import Space from "./Components/Space";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Space height={24} />
        <Banner image={"https://picsum.photos/800/200"} />
        <Space height={24} />
        <h4>Products List</h4>
        <div className="products-grid">
          {products.map((el) => (
            <ItemCard item={el} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
