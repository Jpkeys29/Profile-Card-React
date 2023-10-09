import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: 'HTML + CSS',
    level: 'Intermediate',
    color: ''
  },
  {
    skill:  ,
    level:  ,
    color:  ,
  },
  {
    skill:  ,
    level:  ,
    color:  ,
  },
  {
    skill:  ,
    level:  ,
    color:  ,
  },
  {
    skill:  ,
    level:  ,
    color:  ,
  }
]


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="MeBarcelona.jpeg" alt="Jp" />;
}
function Intro() {
  return (
    <div>
      <h1>Jp Arango</h1>
      <p>
        I am a junior full stack developer with a background in statistics. My
        primary language is Python, and I'm skilled in building dynamic web
        applications using the Django framework.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😎" color="blue" />
      <Skill skill="Python" emoji="🐍" color="red" />
      <Skill skill="Django" emoji="👷🏻‍♂️" color="yellow" />
      <Skill skill="JavaScript" emoji="👨🏻‍💻" color="orangered" />
      <Skill skill="HTML & CSS" emoji="👨🏻‍🎨" color="green" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
