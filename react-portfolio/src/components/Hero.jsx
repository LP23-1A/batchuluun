import HeroIconGitHub from "./HeroIcongithub";
import HeroImg from "./HeroImg";
import HeroIconFigma from "./Heroiconfigma";
import HeroIconTwitter from "./Heroicontwitter";
import Location from "./Location";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero--left">
        <div className="">
          <h1>Hi, I’m Sagar 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="hero--location flex">
          <Location />
          <p>Ahmedabad, India</p>
        </div>
        <div className="hero--available flex">
          <p className="hero--available--icon"></p>
          <p>Available for new projects</p>
        </div>
        <div>
          <HeroIconGitHub />
          <HeroIconTwitter />
          <HeroIconFigma />
        </div>
      </div>
      <div className="hero--right">
        <HeroImg />
      </div>
    </div>
  );
}
