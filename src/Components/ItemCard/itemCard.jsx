import { useState } from "react";
import QtyBtn from "../QtyBtn/qtyBtn";
import "./itemCard.css";
import { useAppStore } from "../../store";

const ItemCard = ({ item }) => {
  const [qt, setQt] = useState(0);
  const { cart, setCart } = useAppStore();

  const handleChange = (val) => {
    setQt(val);
    let newItem = {
      product: item,
      qt: val,
    };
    
    let index = cart.findIndex((el) => el?.product?.id === item?.id);
    if (index === -1) {
      setCart([...cart, newItem]);
    } else {
      let arr = [...cart];
      arr[index] = newItem;
      setCart(arr);
    }
  };

  return (
    <div className="item-card">
      <div className="item-img">
        <img src={item?.thumbnail} />
        <div className="card-qty">
          <QtyBtn value={qt} onChange={(val) => handleChange(val)} />
        </div>
      </div>
      <div className="item-info">
        <p className="title">{item?.title}</p>
        <p className="price">{item?.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
