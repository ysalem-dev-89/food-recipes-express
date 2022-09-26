import dishes from "./data";
import { useEffect, useState  } from "react";
import Dish from './Dish';
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SearchTitle from "./SearchTitle";
import DishDetails from "./DishDetails";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
	const [dishList, setDishList] = useState(null);
	const minValue = Math.min(...dishes.map(dish => dish.price));
	const maxValue = Math.max(...dishes.map(dish => dish.price));

	useEffect(() => {
		setTimeout(() => {
			fetch('/api/dishes', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((data) => data.json())
			.then((list) => {
				list.data? setDishList(list.data): setDishList(null);
			});
		}, 1000);
	});

	const [min, setMin] = useState(minValue);
	const [max, setMax] = useState(maxValue);
	const [category, setCategory] = useState('all');
	const [title, setTitle] = useState('');


	console.log(title);
	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<form>
					<PriceFilter min={min} max={max} setMin={setMin} setMax={setMax} minValue={minValue} maxValue={maxValue}/>
					<CategoryFilter category={category} setCategory={setCategory}/>
				</form>
			</section>
			<Router>
				<Switch>
					<Route path='/:id'>
					<section className="dishes">
						<DishDetails />
					</section >
					</Route>
					<Route exact path='/'>
							<section className="dishes">
								<SearchTitle title={title} setTitle={setTitle} />
								<h2>Dishes</h2>
								<ul className="grid">
									{
										!dishList? <p style={{margin: '10px', color: 'blue'}}>Loading...</p> : dishList.filter((dish) => (dish.category == category || category == 'all')
										&& dish.price >= min && dish.price <= max
										&& dish.name.toLowerCase().includes(title.trim().toLowerCase()))
										.map((dish) => <Dish key={dish.id} dish={dish}/>)
									}
								</ul>
							</section>
					</Route>
			</Switch>
			</Router>
		</main>			
	);
}

export default App;
