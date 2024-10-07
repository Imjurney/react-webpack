import styled, { keyframes } from "styled-components";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from "./container/Home";
import ListPage from "./container/List";
import MyPage from "./container/Mypage";
import GlobalStyles from "./GlobalStyles";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import RouterComponent from "./router";

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

export const UserContext = createContext([]);

interface User {
  children: React.ReactNode;
}
function ContextProvider({ children }: User) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("api/users");
      setUsers(response.data.slice(0, 10));
    };

    fetchUsers();
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}
// const theme = {
//   light: {
//     mainColor: "#242424",
//     textColor: "#242424",
//     backgroundColor: "#fefefe",
//   },
//   dark: {
//     mainColor: "#fefefe",
//     textColor: "#fefefe",
//     backgroundColor: "#242424",
//   },
// };

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
    <>
      <ContextProvider>
        <NavigationBar />
        <GlobalStyles />

        <RouterComponent />

        {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/list" component={ListPage} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch> */}
      </ContextProvider>
    </>
  );
};

export default App;
