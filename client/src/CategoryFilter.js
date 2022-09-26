const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];


const CategoryFilter = ({category, setCategory}) => {
	const handleCategory = (e) => {
		setCategory(e.target.value);
	}

	return (
		<fieldset>
			<legend>Category</legend>
			{categories.map((cat, index) => (
				<div key = {index} >
					<input type='radio' id={cat} name='all' value={cat} onChange={handleCategory} checked = {cat == category}/>
					<label style={{display:"inline", margin: '10px'}} htmlFor={cat}>{cat}</label>
				</div>
			))}
		</fieldset>
	);
}

export default CategoryFilter;