function Pagination() {
    return (
      <div className="pagination-container">
        <div className="pagination">
          <span>Previous</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>10</span>
          <span>Next</span>
        </div>
  
        <div className="rows-per-page">
          <label htmlFor="rows"> </label>
          <select id="rows" name="rows">
            <option value="10">10</option>
            <option value="25">20</option>
            <option value="50">30</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default Pagination;
  