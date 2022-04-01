import { useEffect, useState } from "react";
import formatValue from "../../utils/formatValue";
import { Container, ProductList, ContainerProduct } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import Modal from "../../components/Modal";
import { database } from "../../services/data";
import toast from "react-hot-toast";

const Home = ({ auth, setAuth }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = () => {
    const data = database.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));
    setTimeout(() => {
      setLoading(false);
      setAuth(true);
    }, 2500);
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Container>
        {loading && auth === false ? (
          <Modal />
        ) : (
          <ProductList>
            {products.map((product, index) => (
              <ContainerProduct key={index}>
                <div className="image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="info">
                  <span>{product.name}</span>
                  <span>{product.priceFormatted}</span>

                  <button
                    type="button"
                    onClick={() => {
                      dispatch(addToCartThunk(product));
                      toast.success("Item adicionado à sacola!", {
                        style: { background: "#646464", color: "#ededef" },
                      });
                    }}
                  >
                    <span>Adicionar ao carrinho</span>
                  </button>
                </div>
              </ContainerProduct>
            ))}
          </ProductList>
        )}
      </Container>
    </>
  );
};

export default Home;
