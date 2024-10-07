import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../App";
const ProfileCard = styled.ul`
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Name = styled.li`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

const Email = styled.li`
  margin: 0;
  font-size: 16px;
  color: #777;
`;

const user = { name: "홍길동", email: "hong@example.com" };

const alertComment = () => {
  alert("Hello World!");
};
const MyPage = () => {
  const users = useContext(UserContext);
  return (
    <>
      <ProfileCard onClick={alertComment}>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </ProfileCard>
      {users.map((user: any) => (
        <ProfileCard key={user.id} onClick={alertComment}>
          <Name>
            {user.name} - {user.email}
          </Name>
        </ProfileCard>
      ))}
    </>
  );
};

export default MyPage;
