import { useHistory } from "react-router-dom";

const Dish = (props) => {
  const {id, name, description, price, category} = props.dish;
  const history = useHistory();
  return (
    <li className="card"  onClick={() => history.push(`/${id}`)}>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price.toFixed(2)}</span>
      <span>{category}</span>
    </li>
  )
}

export default Dish;