import {Link , Outlet} from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>کتابخانه من</h1>
      {/*About - Books*/}
      <nav style={{borderBottom: '1px solid', paddingBottom: '1rem' }}>
      <Link to="/books">کتاب ها</Link> {" "}
      <Link to='/about'>در باره ما</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
