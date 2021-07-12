import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} className="card_img" alt="img" />
          <div className="card_info">
            <span className="card_category"> {props.title} </span>
            <h3 className="card-title"> {props.sname} </h3>
            <a href={props.link} target="_blank">
              <button> Go to Course</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
