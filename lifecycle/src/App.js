import { useState } from "react";
import Product from "./Component/Product";
import ProductDetail from "./Component/ProductDetail";

function App() {
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "Hello Kitty",
      description: "Pandant/Necklace for Woman",
      price: "120Tk",
      category: "Necklace",
      image: "/images/p1.jpg",
      selected: false,
    },
    {
      _id: 2,
      name: "Owl Pandant",
      description: "Pandent/Necklace for Woman",
      price: "180Tk",
      category: "Necklace",
      image: "/images/p2.jpg",
      selected: false,
    },
    {
      _id: 3,
      name: "Crown Shape Ring",
      description: "Ring for Woman",
      price: "150Tk",
      category: "Ring",
      image: "/images/p3.jpg",
      selected: false,
    },
    {
      _id: 4,
      name: "Antique Pocket Watch",
      description: "Pocket Watch for Man/Woman",
      price: "220Tk",
      category: "Watch",
      image: "/images/p4.jpg",
      selected: false,
    },
    {
      _id: 5,
      name: "Vintage Hand Band",
      description: "Hand Band for Man/Woman",
      price: "130Tk",
      category: "Band",
      image: "/images/p5.jpg",
      selected: false,
    },
    {
      _id: 6,
      name: "Multiple Ring Set",
      description: "Ring Set for Woman",
      price: "320Tk",
      category: "Ring",
      image: "/images/p6.jpg",
      selected: false,
    },
  ]);
  const [button, setButton] = useState(["See Details"]);
  const buttonHandler = (e) => {
    console.log("button Clicked from", e.name);
    const newProduct = {
      ...e,
      selected: true,
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    setButton(["Hide Details"]);
    console.log("button handler", e.selected);
    <ProductDetail {...e} />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Product pro={products} />
      </header>
    </div>
  );
}

export default App;
