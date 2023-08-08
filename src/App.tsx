import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { Product } from "./components/ProductCard/ProductCard";

function App() {
  const product: Product = {
    image:
      "https://lovingitvegan.com/wp-content/uploads/2019/02/Vegan-Tacos-15.jpg",
    name: "Vegan Tacos",
    description:
      "Crispy tacos with zuccini, beans and pico the gallo, topped with vegan cheese.",
    rating: 5.9,
    price: 84.99,
    discount: 0.2,
  };

  return (
    <>
      <div className="pt-5 ps-5 pe-5">
        <NavBar />
        <div className="row mt-5">
          <div className="col-3">
            <p>Filter</p>
          </div>
          <div className="col">
            {" "}
            <ProductCard product={product}></ProductCard>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
