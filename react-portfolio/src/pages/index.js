import CallIcon from "@/components/CallIcon";
import CopyIcon from "@/components/CopyIcon";
import CopyrightIcon from "@/components/CopyrightIcon";
import Expreince from "@/components/Expreince";
import ExpreinceImg from "@/components/Expreinceimg";
import Footer from "@/components/Footer";
import HeroImg from "@/components/HeroImg";
import HeroIcon from "@/components/Heroicon";
import IntroductionImg from "@/components/IntroductionImg";
import Location from "@/components/Location";
import MessageIcon from "@/components/MessageIcon";
import Navbar from "@/components/Navbar";
import Technology from "@/components/Technology";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="hero flex">
          <div className="hero--left">
            <div className="hero--title">
              <h1>Hi, I’m Sagar 👋</h1>
              <p>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
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
              <HeroIcon />
            </div>
          </div>
          <div className="hero--right">
            <HeroImg />
          </div>
        </div>
      </section>
      <section>
        <div className="intoduction">
          <div className="introduction--button flex">
            <button className="button">about me</button>
          </div>
          <div className=" introduction--content  flex">
            <div className="introduction--img">
              <IntroductionImg />
            </div>
            <div className="introduction--text">
              <h2>Curious about me? Here you have it:</h2>
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <ul>
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="skill">
          <div className="skill--text flex">
            <button className="button">Skills</button>
            <p>The skills, tools and technologies I am really good at:</p>
          </div>
          <div className="skill--technology flex">
            <Technology />
          </div>
        </div>
      </section>
      <section>
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
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <br />
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <br />
                <li>Sed quis justo ac magna.</li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
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
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <br />
                <li>Sed quis justo ac magna.</li>
                <br />
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
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
      </section>
      <section>
        <div>
          <div className="work--title">
            <button className="button">Work</button>
            <p>Some of the noteworthy projects I have built:</p>
          </div>
          <div>
            <Work />
          </div>
        </div>
      </section>
      <section>
        <div className="footer flex">
          <div className="footer--title">
            <button className="button">Get in touch</button>
            <p>
              What’s next? Feel free to reach out to me if you're looking for
              <br></br> a developer, have a query, or simply want to connect.
            </p>
          </div>
          <div className=" contact flex">
            <div className="flex gap-20 email">
              <MessageIcon />
              <h1>reachsagarshah@gmail.com</h1>
              <CopyIcon />
            </div>
            <div className="flex gap-20 phone">
              <CallIcon />
              <h1>+91 8980500565</h1>
              <CopyIcon />
            </div>
          </div>
          <div>
            <p>You may also find me on these platforms!</p>
            <div className="footer--icon flex">
              <HeroIcon />
            </div>
          </div>
        </div>
        <div className="flex copyright">
          <CopyrightIcon />
          <p>2023 | Designed and coded with ❤️️ by Sagar Shah</p>
        </div>
      </section>
    </div>
  );
}
