import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const noOfItems = useSelector((state) => state.counter.items.length);
  console.log(noOfItems);
  return (
    noOfItems && (
      <button className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>{noOfItems}</span>
      </button>
    )
  );
};

export default CartButton;
