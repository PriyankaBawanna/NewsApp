import React from "react";
import Footer from "../NewsPage/Footer";
import Header from "../NewsPage/Header";

const Description = () => {
  let newsData = JSON.parse(localStorage.getItem("newsData"));
  const newsHeadLine = newsData.newsHeadLine;
  const Photo = newsData.Photo;
  const Description = newsData.Description;

  return (
    <>
      <Header />
      <div className="description">
        <div className="descriptionNews">
          <h1> {newsHeadLine}</h1>
          <img src={Photo} className="imgDescription" />
          <div className="descriptionPara">{Description}</div>
          <p className="descriptionPara">{Description}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Description;
