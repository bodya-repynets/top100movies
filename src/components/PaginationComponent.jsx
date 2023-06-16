import { Stack, Pagination } from "@mui/material";
import { useGlobalContext } from "../context";
import { Padding } from "@mui/icons-material";

const PaginationComponent = () => {
  const { currentPage, setCurrentPage } = useGlobalContext();
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-page": {
          color: "white",
          padding: "20px",
        },
        "& .MuiPaginationItem-icon": {
          color: "white",
          fontSize: "30px",
        },
        "& .MuiPaginationItem-circular": {
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
        },
      }}
      siblingCount={1}
      count={9}
      page={currentPage}
      color="primary"
      onChange={paginate}
    />
  );
};
export default PaginationComponent;
