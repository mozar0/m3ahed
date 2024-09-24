import { useEffect } from "react";
import UsePagination from "./UsePagination";

const Pagination = (props) => {
  const { pageNumber, changePage, pageData, nextPage, previousPage } =
    UsePagination(props.items, props.pageLimit);

  useEffect(() => {
    props.setPageItems(pageData);
  }, [pageNumber]);

  return (
    <div>
      <b onClick={previousPage}>Prev</b>
      
      <input
        value={pageNumber}
        onChange={(e) => {
          changePage(e.target.valueAsNumber);
        }}
        type="number"
      />
      <b onClick={nextPage}>Next</b>
      
    </div>
  );
};

export default Pagination;
