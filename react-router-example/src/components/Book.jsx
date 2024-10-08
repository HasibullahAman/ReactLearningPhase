import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";
import NotFound from "./NotFound";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  const book = getBook(parseInt(params.bookId));
  if (book) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>قیمت کل کتاب: {`${book.amount} افغانی`}</h2>
        <p>نام کتاب: {book.name}</p>
        <p>تاریخ انتشار کتاب: {book.due}</p>
        <p>
          <button onClick={() => {deleteBook(book.number); navigate("/books" + location.search)  }  }>حذف کتاب</button>
        </p>
      </main>
    );
  } else {
    return (
      <section className="justify-content-center py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                  <span className="display-1 fw-bold">4</span>
                  <i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
                  <span className="display-1 fw-bold bsb-flip-h">4</span>
                </h2>
                <h3 className="h2 mb-2">Oops! You're lost.</h3>
                <p className="mb-5">
                  The page you are looking for was not found.
                </p>
                <a
                  className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                  href="#!"
                  role="button"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Book;
