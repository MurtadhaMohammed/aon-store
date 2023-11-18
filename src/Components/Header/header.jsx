import { useAppStore } from "../../store";
import Container from "../Container/container";
import SearchBox from "../SearchBox/searchBox";
import "./header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const {cart, setOpen} = useAppStore();

  return (
    <header>
      <Container>
        <div className="content">
          <h2>Aon Store</h2>
          <SearchBox/>
          <button className="cart-btn" onClick={()=> setOpen(true)}>
            {cart?.length !== 0 &&<div className="label">{cart?.length}</div>}
            <AiOutlineShoppingCart />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
