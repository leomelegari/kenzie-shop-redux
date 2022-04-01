import { useSelector, useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import { useHistory } from "react-router-dom";
import formatValue from "../../utils/formatValue";
import {
  ContainerEmpty,
  ContainerProduct,
  ProductList,
  Subtotal,
} from "./style";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const subTotal = formatValue(
    cart.reduce((product, acc) => acc.price + product, 0).toFixed(2)
  );

  const clear = (product) => {
    dispatch(removeFromCartThunk(product));
    toast.success("Item removido!", {
      style: { background: "#646464", color: "#ededef" },
    });
  };

  if (cart.length === 0) {
    return (
      <ContainerEmpty>
        <h2>Sacola vazia</h2>
        <button onClick={() => history.push("/")}>Ir às compras</button>
      </ContainerEmpty>
    );
  } else {
    return (
      <>
        <Subtotal>
          <div>
            <h1>SUBTOTAL</h1>
            <div>
              <strong>{subTotal}</strong>
            </div>
          </div>
        </Subtotal>
        <ProductList>
          {cart.map((product, index) => (
            <ContainerProduct key={index}>
              <TiDeleteOutline onClick={() => clear(product)} />
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="info">
                <span>{product.name}</span>
                <span>{product.priceFormatted}</span>
              </div>
            </ContainerProduct>
          ))}
        </ProductList>
      </>
    );
  }
};

export default Cart;
