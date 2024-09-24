import { NavLink, Outlet, useSearchParams, useLocation} from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
  const books = getBooks();
  const [searchParams, setSearchParams] = useSearchParams();
  const locatioin = useLocation();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderLeft: "1px solid", padding: "1rem" }}>
        <input
          type="search"
          placeholder="جستجوی کتاب"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            }
          }}
        />
        {books
          .filter((book) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = book.name.toLocaleLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((book) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                  textDecoration: "none",
                };
              }}
              to={`/books/${book.number}${locatioin.search}`}
              key={book.number}
            >
              {book.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Books;
