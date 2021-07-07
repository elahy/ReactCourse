import { useEffect, useState } from "react";
import Product from "./Component/Product";
import ProductDetail from "./Component/ProductDetail";
import LoadingScreen from "./Component/LoadingScreen";

function App() {
  const [products] = useState([
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
  const [button, setButton] = useState(true);
  const [arrIndx, SetarrIndx] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, [button]);

  const showBtnHandler = (b) => {
    setButton(false);
    setLoading(true);
    SetarrIndx(b - 1);
  };
  const hideBtnHandler = () => {
    setLoading(true);
    setButton(true);
  };

  return (
    <>
      {loading === false ? (
        <div className="App">
          {button ? (
            <Product pro={products} btn={showBtnHandler} />
          ) : (
            <ProductDetail pro={products[arrIndx]} btn={hideBtnHandler} />
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
