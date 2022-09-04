import { Fragment } from "react";
import meals from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Delicious Meal" />
      </div>
    </Fragment>
  );
}

export default Header;
