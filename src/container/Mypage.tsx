import styled from "styled-components";

const ProfileCard = styled.div`
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

const Email = styled.p`
  margin: 0;
  font-size: 16px;
  color: #777;
`;

const user = { name: "홍길동", email: "hong@example.com" };

const alertComment = () => {
  alert("Hello World!");
};
const MyPage = () => (
  <ProfileCard onClick={alertComment}>
    <Name>{user.name}</Name>
    <Email>{user.email}</Email>
  </ProfileCard>
);

export default MyPage;
