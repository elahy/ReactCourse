import React, { Component } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
// import ProductDetail from ".Components/ProductDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
      ],
      loading: true,
      arrIndx: null,
      hide: true,
    };
    this.select = this.select.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 4000);
  }
  componentDidUpdate() {
    setTimeout(() => this.setState({ loading: false }), 6000);
  }

  select(id) {
    this.setState({ arrIndx: id - 1 });
    this.setState({ hide: false });
    this.setState({ loading: true });
  }
  back() {
    this.setState({ hide: true });
    this.setState({ loading: true });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <LoadingScreen />
        ) : this.state.hide ? (
          <ProductList list={this.state.products} btn={this.select} />
        ) : (
          <ProductDetail
            product={this.state.products[this.state.arrIndx]}
            btn={this.back}
          />
        )}
      </>
    );
  }
}

export default App;
