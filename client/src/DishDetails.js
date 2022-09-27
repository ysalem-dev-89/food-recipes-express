import dishes from './data';
import { useParams, useHistory } from 'react-router-dom';

const Dish = () => {
  const history = useHistory();
  const {id} = useParams();
  const dish = dishes.find((ele) => ele.id == id)
  console.log(dishes,dish, id);
  return (
    <li className="dish-details">
      <h3>{dish.name}</h3>
      <span>${dish.price.toFixed(2)}</span>
      <span>{dish.category}</span>
      <p>{dish.description}</p>
    </li>
  )
}

export default Dish;