import CallIcon from "@/components/Icon/CallIcon";
import CopyIcon from "@/components/Icon/CopyIcon";
import CopyrightIcon from "@/components/Icon/CopyrightIcon";
import ExprenceData from "@/components/ExprenceData";
import HeroImg from "@/components/HeroImg";
import HeroIcon from "@/components/Icon/Heroicon";
import IntroductionImg from "@/components/IntroductionImg";
import Location from "@/components/Icon/Location";
import MessageIcon from "@/components/Icon/MessageIcon";
import Navbar from "@/components/Navbar";
import Technology from "@/components/Technology";
import Workleft from "@/components/WorkLeft";
import WorkRight from "@/components/WorkRight";
export default function Home() {
  return (
    <div className=" p-0 box-border max-w-screen-2xl m-auto">
      <section>
        <Navbar />
      </section>
      <section>
        <div className=" flex gap-32 py-24 px-28  max-md:flex max-md:py-4 max-md:px-16  max-md:flex-col-reverse max-md:gap-12 ">
          <div className=" gap-10 flex flex-col max-md:m-auto">
            <div className=" gap-2 max-md:w-full flex flex-col">
              <h1 className="text-6xl font-bold">Hi, 👋</h1>
              <p className="text-base max-md:w-full">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div>
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
          <div className="max-md:mx-auto w-3/5 max-md:pl-16">
            <div className="relative bg-slate-300 w-72 h-80 top-[35px] left-[35px] max-md:hidden dark:bg-slate-700"></div>
            <HeroImg />
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col  py-24 px-28 gap-52 bg-gray-200 max-sm:hidden max-md:gap-12 dark:bg-slate-900">
          <div className=" flex">
            <button className="bg-gray-300 py-1 px-5 rounded-xl m-auto dark:bg-gray-600">
              about me
            </button>
          </div>
          <div className=" justify-between flex gap-12 max-md:flex max-md:flex-col">
            <div className=" max-md:m-auto ">
              <div className="relative bg-slate-300 w-96 h-96 right-[25px] top-[25px] max-md:hidden dark:bg-slate-700 max-lg:hidden"></div>
              <IntroductionImg />
            </div>
            <div className=" flex flex-col gap-4 w-1/2 max-md:w-full">
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
        <div className=" py-24 px-28 flex flex-col gap-12 max-sm:hidden">
          <div className="  flex flex-col m-auto gap-4">
            <button className=" bg-gray-300 py-1 px-5 rounded-xl w-20 mx-auto dark:bg-slate-700">
              Skills
            </button>
            <p className="text-center">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
          <div className=" flex flex-wrap gap-24 justify-around">
            <Technology />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-200 m-auto  py-24 px-32 flex flex-col gap-12 max-sm:hidden dark:bg-slate-900">
          <div className="m-auto flex flex-col justify-center gap-4">
            <button className=" bg-gray-300 py-1 px-5 rounded-xl w-32 m-auto dark:bg-slate-700">
              Experience
            </button>
            <p>Here is a quick summary of my most recent experiences:</p>
          </div>
          <div className="flex flex-col max-md:px-0 ">
            <ExprenceData />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col py-24 px-28 gap-12 max-sm:hidden max-md:flex max-md:flex-col ">
          <div className=" flex flex-col gap-2 mx-auto text-center">
            <button className=" bg-gray-300 rounded-xl py-1 px-5 w-24 mx-auto dark:bg-slate-700">
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
        <div className="footer flex flex-col gap-12 mx-auto text-center max-sm:hidden">
          <div className="footer--title flex flex-col gap-2">
            <button className="button  bg-gray-300 py-1 px-5 rounded-xl dark:bg-slate-700 w-fit m-auto">
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
        <div className="flex copyright justify-center py-6 px-20 max-sm:hidden">
          <CopyrightIcon />
          <p className="bg-red">
            2023 | Designed and coded with ❤️️ by Sagar Shah
          </p>
        </div>
      </section>
    </div>
  );
}
