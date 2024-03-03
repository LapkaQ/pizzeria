import Pizza from "../components/Pizza.js";

const MenuPage = (props) => {
  const menu = props.menuPizzas.map((pizza) => {
    return (
      <Pizza
        key={pizza.id}
        name={pizza.name}
        price={pizza.price}
        isActive={pizza.isActive}
        id={pizza.id}
        menuClick={props.menuClick}
      />
    );
  });
  return (
    <>
      <h1>Menu</h1>
      <h1>{menu}</h1>
    </>
  );
};

export default MenuPage;
