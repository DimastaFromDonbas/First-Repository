import Countries from "./components/Countries";
import {  Navbar,Container,Nav} from "react-bootstrap";
import {Routes,Route,Link} from "react-router-dom"
import Shop from "./components/Shop";
import Calc from "./components/Calc";
import Anna from './components/Anna'
import { Provider } from "react-redux";
import { store } from "./rdx"
import Login from "./components/Login";
import Input from "./components/Input";
import ShopProduct from "./components/ShopProduct";
 
function App() {

  return (
    <Provider store={store}>
    <div className={'bg-dark'}>
        <div className="container bg-light p-3">
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/countries">Countries</Link>
            <Link className="nav-link ml-3" to="/shop">Shop</Link>
            <Link className="nav-link ml-3" to="/calc">Calc</Link>
            <Link className="nav-link ml-3" to="/anna">Anna</Link>
            <Link className="nav-link ml-3" to="/input">Input</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          <Routes>
            <Route path="/" element = {<Login />}/>
            <Route path="countries" element = {<Countries />}/>
            <Route path="shop" element = {<Shop />}/>
            <Route path="shop/:id" element = {<ShopProduct />}/>
            <Route path="calc" element = {<Calc />}/>
            <Route path="anna" element = {<Anna />}/>
            <Route path="input" element = {<Input />}/>
          </Routes>
        </div>
    </div>
    </Provider>
  );
}

export default App;
