const SearchTitle = ({title, setTitle}) => {
  return (
    <div className="search">
      <input type='search' value = {title} id='search' name='search' onChange={(e) => setTitle(e.target.value)} placeholder='Enter your search'/>
    </div>
  );
}

export default SearchTitle;