import styled from "styled-components";
import { Link } from "react-router-dom";
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
  return (
    <>
      <ContextProvider>
        <NavigationBar />
        <GlobalStyles />
        <RouterComponent />
      </ContextProvider>
    </>
  );
};

export default App;
