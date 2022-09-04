import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcons";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [bumpButton, setBumpButton] = useState(false);

  const ctx = useContext(CartContext);
  const { items } = ctx;

  const btnClasses = `${classes.button} ${bumpButton ? classes.bump : " "}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpButton(true);

    setTimeout(() => {
      setBumpButton(false);
    }, 500);

    return () => {
      clearTimeout(setTimeout);
    };
  }, [items]);

  const numOfCartItems = ctx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
