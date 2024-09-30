import styled, { keyframes } from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./container/Home";
import ListPage from "./container/List";
import MyPage from "./container/Mypage";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 15px;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5em;
`;

const NavLinks = styled.div`
  & > a {
    color: #fff;
    margin-left: 15px;
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }
`;

const NavigationBar = () => (
  <Navbar>
    <Logo>
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        MyApp
      </Link>
    </Logo>
    <NavLinks>
      <Link to="/list">List Page</Link>
      <Link to="/mypage">My Page</Link>
    </NavLinks>
  </Navbar>
);

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={ListPage} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
      {/* {routes.map((route, index) => (
        <Route key={index} exact {...route} />
      ))} */}
    </div>
  );
};

export default App;
