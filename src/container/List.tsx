import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ListItem = styled.div`
  width: 80%;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
`;

const ListPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(result.data.slice(0, 400));
    };

    console.log("fetch data", data);

    fetchData();
  }, []);

  return (
    <ListContainer>
      {data.map((item) => (
        <ListItem key={item.id}>
          <div>{item.title}</div>
          <p>{item.body}</p>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ListPage;
