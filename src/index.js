import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import CourseList from "./CourseList";

ReactDOM.render(
  <>
    <h1 class="heading_style"> List of Some of Udemy Courses </h1>
    <Card
      imgsrc={CourseList[0].imgsrc}
      title={CourseList[0].title}
      sname={CourseList[0].sname}
      link={CourseList[0].link}
    />
    <Card
      imgsrc={CourseList[1].imgsrc}
      title={CourseList[1].title}
      sname={CourseList[1].sname}
      link={CourseList[1].link}
    />
    <Card
      imgsrc={CourseList[2].imgsrc}
      title={CourseList[2].title}
      sname={CourseList[2].sname}
      link={CourseList[2].link}
    />
  </>,
  document.getElementById("root")
);
