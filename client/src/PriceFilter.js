const PriceFilter = ({min, max, setMin, setMax, minValue, maxValue}) => {
	const handleMin = (e) => {
		setMin(e.target.value);
	}
	const handleMax = (e) => {
		setMax(e.target.value);
	}

	return (
		<fieldset>
			<legend>Price</legend>
			<label htmlFor="min">Minimum</label>
			<input type='range' id='min' name='min' step='0.1' min={minValue} max={maxValue} value={min} onChange={handleMin}/>
			<label htmlFor="max">Maximum</label>
			<input type='range' id='max' name='max' step='0.1' min={minValue} max={maxValue} value={max} onChange={handleMax}/>
		</fieldset>
	);
}

export default PriceFilter;