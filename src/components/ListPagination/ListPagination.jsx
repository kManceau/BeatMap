import "./ListPagination.scss";
import {Container, Pagination, PaginationItem} from "@mui/material";
import {Link} from "react-router";

const ListPagination = ({type, currentPage, lastPage}) => {
    return (
        <Container maxWidth="xl" sx={{display: "flex", justifyContent: "center"}}>
            <Pagination
                page={currentPage}
                count={lastPage}
                renderItem={(item, index) => (
                    <PaginationItem
                        key={index}
                        component={Link}
                        to={`/${type}${item.page === 1 ? '' : `/${item.page}`}`}
                        {...item}
                    />
                )}
            />
        </Container>
    )
}

export default ListPagination;