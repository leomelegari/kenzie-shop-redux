import { BsBag } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { Container } from "./style";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ setAuth }) => {
  const history = useHistory();
  const length = useSelector((state) => state.cart.length);

  return (
    <Container>
      <ul>
        <li>
          <HiOutlineMenuAlt4 />
        </li>
        <li>
          <BsApple
            onClick={() => {
              setAuth(true);
              history.push("/");
            }}
          />
        </li>
        <li style={{ display: "none" }}>Inflationated Apple Store BR</li>
        <li>
          <BsBag onClick={() => history.push("/cart")} />
          <div onClick={() => history.push("/cart")}>{length}</div>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
