import Technology from "./Technology";

export default function Skill() {
  return (
    <div className="skill">
      <div className="skill--text flex">
        <button className="button">Skills</button>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="skill--technology flex">
        <Technology />
      </div>
    </div>
  );
}
