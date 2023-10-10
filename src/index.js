import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: 'Python',
    level:  'Intermediate',
    color:  '#FF5733'
  },
  {
    skill:  'Django',
    level:  'Intermediate',
    color:  '#FF7533'
  },
  {
    skill:  'Flask',
    level:  'Intermediate',
    color:  '#FFA833'
  },
  {
    skill: 'JavaScript' ,
    level:  'Beginner',
    color:  '#33CEFF'
  },
  {
    skill:  'React',
    level:  'Beginner',
    color:  '#33A7FF'
  },
  {
    skill: 'HTML + CSS',
    level: 'Intermediate',
    color: '#FF8433'
  },
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
      {skills.map(skill=><Skill skill={skill.skill} level={skill.level} color={skill.color} />)}
      {/* <Skill skill="React" emoji="😎" color="blue" />
      <Skill skill="Python" emoji="🐍" color="red" />
      <Skill skill="Django" emoji="👷🏻‍♂️" color="yellow" />
      <Skill skill="JavaScript" emoji="👨🏻‍💻" color="orangered" />
      <Skill skill="HTML & CSS" emoji="👨🏻‍🎨" color="green" /> */}
    </div>
  );
}
function Skill({ skill, level, color}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
