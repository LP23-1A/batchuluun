import CallIcon from "@/components/CallIcon";
import CopyIcon from "@/components/CopyIcon";
import CopyrightIcon from "@/components/CopyrightIcon";
import ExpreinceImg from "@/components/Expreinceimg";
import HeroImg from "@/components/HeroImg";
import HeroIcon from "@/components/Heroicon";
import IntroductionImg from "@/components/IntroductionImg";
import Location from "@/components/Location";
import MessageIcon from "@/components/MessageIcon";
import Navbar from "@/components/Navbar";
import Technology from "@/components/Technology";
import Workleft from "@/components/WorkLeft";
import WorkRight from "@/components/WorkRight";

export default function Home() {
  return (
    <div className="container box-border">
      <section>
        <Navbar />
      </section>
      <section>
        <div className=" flex gap-12 py-24 px-28">
          <div className="hero--left gap-10 flex flex-col w-3/5">
            <div className="hero--title gap-1">
              <h1 className="text-6xl font-bold">Hi, I’m Sagar 👋</h1>
              <p className="text-base">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div className="hero--location">
              <div className="flex">
                <Location />
                <p>Ahmedabad, India</p>
              </div>
              <div className="flex gap-1">
                <p className="bg-lime-500 w-2 h-2 bg-green rounded mt-2"></p>
                <p className="items-center">Available for new projects</p>
              </div>
            </div>
            <div className="item-center">
              <HeroIcon />
            </div>
          </div>
          <div className="hero--right pl-24 ">
            <HeroImg />
          </div>
        </div>
      </section>
      <section>
        <div className="intoduction flex flex-col py-24 px-28 gap-12 bg-gray-200">
          <div className="introduction--button flex">
            <button className="button bg-gray-300 py-1 px-5 rounded-xl m-auto">
              about me
            </button>
          </div>
          <div className=" introduction--content  flex gap-12">
            <div className="introduction--img pr-40">
              <IntroductionImg />
            </div>
            <div className="introduction--text flex flex-col gap-4 w-1/2">
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
              <ul className="flex gap-10">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul className="flex gap-40">
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
        <div className="skill py-24 px-28 flex flex-col gap-12 ">
          <div className="skill--text  flex flex-col m-auto gap-4">
            <button className="button bg-gray-300 py-1 px-5 rounded-xl w-20 mx-auto">
              Skills
            </button>
            <p className="text-center">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
          <div className="skill--technology flex flex-wrap gap-20 justify-around">
            <Technology />
          </div>
        </div>
      </section>
      <section>
        <div className="Expreince flex flex-col gap-12 bg-gray-200 py-24 px-28">
          <div className="Expreince--title mx-auto flex flex-col gap-4">
            <button className="button bg-gray-300 py-1 px-4 rounded-xl  w-24 m-auto">
              Expreince
            </button>
            <p>Here is a quick summary of my most recent experiences:</p>
          </div>
          <div className="Expreince--content flex m-auto gap-12 p-8 bg-white rounded-xl">
            <div className="expreinceImg pr-20">
              <ExpreinceImg />
            </div>
            <div className="Expreince--text ">
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
          <div className="Expreince--content flex m-auto gap-12 p-8 bg-white rounded-xl">
            <div className="expreinceImg pr-20">
              <ExpreinceImg />
            </div>
            <div className="Expreince--text ">
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
          <div className="Expreince--content flex m-auto gap-12 p-8 bg-white rounded-xl">
            <div className="expreinceImg pr-20">
              <ExpreinceImg />
            </div>
            <div className="Expreince--text w-96">
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
        <div className="flex flex-col py-24 px-28 gap-12 ">
          <div className="work--title flex flex-col gap4 mx-auto text-center">
            <button className="button bg-gray-300 rounded-xl py-1 px-5 w-24 mx-auto">
              Work
            </button>
            <p>Some of the noteworthy projects I have built:</p>
          </div>
          <Workleft />
          <WorkRight />
          <Workleft />
        </div>
      </section>
      <section>
        <div className="footer flex flex-col gap-12 mx-auto text-center">
          <div className="footer--title">
            <button className="button  bg-gray-300 py-1 px-5 rounded-xl">
              Get in touch
            </button>
            <p>
              What’s next? Feel free to reach out to me if you're looking for
              <br></br> a developer, have a query, or simply want to connect.
            </p>
          </div>
          <div className=" contact flex flex-col ">
            <div className="flex gap-4 email mx-auto">
              <MessageIcon />
              <h1 className="text-4xl">reachsagarshah@gmail.com</h1>
              <CopyIcon />
            </div>
            <div className="flex gap-4 phone text-center mx-auto">
              <CallIcon />
              <h1 className="text-4xl">+91 8980500565</h1>
              <CopyIcon />
            </div>
          </div>
          <div className="mx-auto">
            <p>You may also find me on these platforms!</p>
            <div className="footer--icon flex justify-center">
              <HeroIcon />
            </div>
          </div>
        </div>
        <div className="flex copyright justify-center py-6 px-20 ">
          <CopyrightIcon />
          <p className="bg-red">
            2023 | Designed and coded with ❤️️ by Sagar Shah
          </p>
        </div>
      </section>
    </div>
  );
}
