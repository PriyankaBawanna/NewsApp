import React, { useState, useEffect } from "react";
import List from "../List/List";

import Header from "./Header";
const Entertainment = (props) => {
  const [users, setUser] = useState([]);
  const getNews = async () => {
    fetch("http://localhost:3000/News").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log("response API ", users);
  return (
    <>
      <Header />
      {users.map((item, i) => (
        <List
          newsHeadLine={item.newsHeadLine}
          Description={item.Description}
          Photo={item.Photo}
        />
      ))}
    </>
  );
};
export default Entertainment;
