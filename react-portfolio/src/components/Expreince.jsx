import ExpreinceImg from "./Expreinceimg";

export default function Expreince() {
  return (
    <div className="Expreince flex">
      <div className="Expreince--title flex">
        <button className="button">Expreince</button>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="Expreince--content flex">
        <div className="expreinceImg">
          <ExpreinceImg />
        </div>
        <div className="Expreince--text">
          <h2>Sr. Frontend Developer</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <br />
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <br />
            <li>Sed quis justo ac magna.</li>
            <br />
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div>
          <p>Nov 2021 - Present</p>
        </div>
      </div>
      <div className="Expreince--content flex">
        <div className="expreinceImg">
          <ExpreinceImg />
        </div>
        <div className="Expreince--text">
          <h2>Team Lead</h2>
          <ul>
            <li>Sed quis justo ac magna.</li>
            <br />
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <br />
            <li>Sed quis justo ac magna.</li>
            <br />
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div>
          <p>Jul 2017 - Oct 2021</p>
        </div>
      </div>
      <div className="Expreince--content flex">
        <div className="expreinceImg">
          <ExpreinceImg />
        </div>
        <div className="Expreince--text">
          <h2>Full Stack Developer</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </li>
          </ul>
        </div>
        <div>
          <p>Dec 2015 - May 2017</p>
        </div>
      </div>
    </div>
  );
}
