import React, { useEffect, useState } from "react";
import List from "../List/List";
import Header from "./Header";

const Latest = (props) => {
  const [users, setUser] = useState([]);
  const getNews = async () => {
    fetch("http://localhost:3009/NewsLatest").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Header />

      {users.map((item, i) => (
        <List
          newsHeadLine={item.newsHeadLine}
          Description={item.Description}
          Photo={item.Photo}
          country={item.country}
        />
      ))}
    </>
  );
};
export default Latest;
//http://localhost:3009/NewsLatest
