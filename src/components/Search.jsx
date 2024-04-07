const Search = () => {
  return (
    <form action="#" className="search">
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn bg-secondary text-white"
          type="submit"
          aria-label="Search"
        >
          <i className="bi bi-search" style={{color: "black"}}></i>
        </button>
      </div>
    </form>
  );
};
export default Search;
