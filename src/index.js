import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({img,name,job,children}) => {
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Osman" job="Developer" />
      <Person img="22" name="Can" job="Yazılımcı">
      <p>
        hakkımda
        loremloremloremloremlorem
      </p>
      </Person>
      <Person img="56" name="Mehmet" job="The Boss" />
    </section>
  );
}

ReactDom.render(<PersonList />, document.getElementById("root"));