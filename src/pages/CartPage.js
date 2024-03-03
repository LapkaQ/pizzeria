import Cart from "../components/Cart.js";
const CartPage = (props) => {
  const cart = props.cartPizzas.map((pizza) => {
    return (
      <Cart
        key={pizza.id}
        name={pizza.name}
        price={pizza.price}
        quantity={pizza.quantity}
        id={pizza.id}
        cartClick={props.cartClick}
      />
    );
  });
  const totalPrice = props.cartPizzas.reduce((total, pizza) => {
    return total + pizza.price * pizza.quantity;
  }, 0);
  return (
    <>
      <div className="cartPage">
        <div className="cartPizzas">
          <h1>Koszyk</h1>
          {props.cartPizzas != 0 ? cart : "koszyk jest pusty"}
        </div>
        <div className="cartPrice">
          <h1>Cena</h1>
          <p>{totalPrice}zł</p>
        </div>
      </div>
    </>
  );
};

export default CartPage;
