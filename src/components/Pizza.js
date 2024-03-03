import "./Pizza.css";
const Pizza = (props) => {
  return (
    <div className={props.isActive ? "pizza pizzaPlus" : "pizza pizzaCancel"}>
      <div className="pizzaText">
        <p>{props.name} </p>
        <em>{props.price}zł</em>
      </div>
      <span
        onClick={() => {
          props.menuClick(props.id);
        }}
        className={
          props.isActive
            ? "material-symbols-outlined icon plus"
            : "material-symbols-outlined icon cancel"
        }
      >
        {props.isActive ? "add_circle" : "add_circle"}
      </span>
    </div>
  );
};

export default Pizza;
