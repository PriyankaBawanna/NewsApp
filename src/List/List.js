import React from "react";
import { useNavigate } from "react-router-dom";

const List = (data) => {
  const navigate = useNavigate();
  const { newsHeadLine, Description, Photo, country } = data;
  const gotToDescription = () => {
    localStorage.setItem("newsData", JSON.stringify(data));
    navigate("/Description");
  };
  return (
    <>
      <div className="card">
        <div className=" img">
          <img src={Photo} className="imgTag" alt="news image" />
        </div>
        <div className="content">
          <b className="country">{country}</b>
          <button onClick={gotToDescription} className="headingNews">
            <b>{newsHeadLine}</b>
          </button>
          <p className="mb-1">{Description}</p>
        </div>
      </div>
    </>
  );
};
export default List;
