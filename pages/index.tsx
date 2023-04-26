import Head from "next/head";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import {
  BsFillMoonStarsFill,
  BsFiletypeJava,
  BsListTask,
} from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { GiRainbowStar } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { RiGithubFill, RiReactjsLine } from "react-icons/ri";
import {
  SiSpring,
  SiPython,
  SiAngular,
  SiMicrosoftazure,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import job1 from "../public/job1.png";
import job2 from "../public/job2.png";
import job3 from "../public/job3.png";
import job4 from "../public/job4.png";
import { useState } from "react";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import { title } from "process";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const urlGithub = "https://github.com/Ming424";
  const urlLinkedin = "https://www.linkedin.com/in/tianming-chen/";
  const urlMailTo = "mailto:tianming.chen0424@gmail.com";
  const urlInstagram = "https://www.instagram.com/dream_ins_spiration/";
  const urlResume =
    "https://drive.google.com/file/d/1ws_zF5NWkiuNjjOoplQPygGm3AyGORsH/view?usp=sharing";

  const scrollToSection = (sectionId?: string) => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thierry</title>
        <meta
          name="description"
          content="Thierry Chen Portfolio. Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-0 lg:px-8 lg:py-4 bg-gray-100 flex items-center justify-between  text-gray-900">
        <div className="hidden lg:flex gap-x-12 text-gray-400 ">
          <a
            href=""
            className="text-sm font-semibold leading-6 cursor-not-allowed"
          >
            Entertainement
          </a>
          <a
            href=""
            className="text-sm font-semibold leading-6 cursor-not-allowed"
          >
            Investing
          </a>
          <a
            href=""
            className="text-sm font-semibold leading-6 cursor-not-allowed"
          >
            Media
          </a>
          <a
            href=""
            className="text-sm font-semibold leading-6 cursor-not-allowed"
          >
            Blog
          </a>
          <a
            href=""
            className="text-sm font-semibold leading-6 cursor-not-allowed"
          >
            Store
          </a>
          <a
            href=""
            className="text-sm font-semibold leading-6 cursor-not-allowed"
          >
            Design
          </a>
        </div>
      </div>

      <main className="bg-white dark:bg-gray-900 dark:text-white">
        {/* CONTENT WRAPPER */}
        <div className="px-2 md:px-20 lg:px-40 max-w-screen-2xl mx-auto">
          <section className="">
            {/* NAVBAR */}
            <nav className="px-5 py-5 mb-0 sm:py-10 md:mb-12 flex justify-between">
              {/* font-burtons was defined in tailwind config */}
              <h1
                className="text-2xl pt-1 font-burtons"
                onClick={() => window.location.reload()}
              >
                Thierry
              </h1>

              <div
                onClick={() => scrollToSection("projects")}
                className="bg-transparent invisible hidden md:block  md:visible text-slate-700 dark:hover:border-transparent dark:text-white hover:bg-gradient-to-br hover:from-[#ff8a05] hover:via-[#ff5478] hover:to-[#ff00c6]  border-slate-400 hover:border-white hover:text-white py-2 px-4 border  rounded  text-sm  font-semibold  shadow-md shadow-slate-300 hover:shadow-none dark:shadow-none hover:scale-105 transition duration-200"
              >
                Build your website
              </div>
              <ul className="flex items-center">
                <li>
                  {/* button dark mode toogle */}
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-400 text-white
                    px-4 py-2 rounded-md ml-8 
                         hover:ring-2 dark:ring-offset-gray-900 hover:ring-offset-2 hover:ring-blue-400 transition-all  duration-200"
                    onClick={() => window.open(urlResume, "_blank")}
                  >
                    <span className="">Resume</span>
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="px-5 mb-0">
              <div
                onClick={() => scrollToSection("projects")}
                className="bg-transparent visible md:invisible md:block text-center text-slate-700 dark:hover:border-transparent dark:text-white hover:bg-gradient-to-br hover:from-[#ff8a05] hover:via-[#ff5478] hover:to-[#ff00c6]  border-slate-400 hover:border-white hover:text-white py-2 px-4 border  rounded  text-sm  font-semibold  shadow-md shadow-slate-300 hover:shadow-none dark:shadow-none hover:scale-105 transition duration-200"
              >
                Build your website
              </div>
            </nav>

            {/* CONTENT */}
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-center">
              {/* LEFT - DESCRIPTION */}
              <div className="basis-1/3 flex-1">
                <h2 className="tx-name text-5xl py-2 text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-blue-600 font-extrabold md:text-6xl py-6">
                  <span className="">Thierry Chen</span>
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl">
                  Software Developer & Designer
                  <div className="text-xl pt-2">Montreal</div>
                </h3>
                {/* max-w-wl for max width paragraph */}
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-xl mx-auto hover:scale-105 transition duration-300">
                  Hello, I&apos;m Thierry, a software engineer specializing in
                  full-stack development with a focus on Spring, Angular, and
                  React. I am sensitive to architecture and UX design. With a
                  keen eye for detail and a deep understanding of programming
                  concepts, I strive to deliver high-quality software solutions
                  that exceed expectations.
                </p>
                <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
                  <div className="group relative">
                    <RiGithubFill
                      className="cursor-pointer hover:scale-110 transition duration-100"
                      onClick={() => window.open(urlGithub, "_blank")}
                    />
                    <span className="text-white text-sm pointer-events-none absolute top-13 -left-3 w-max opacity-0 transition-opacity group-hover:opacity-50 bg-black rounded px-2">
                      GitHub
                    </span>
                  </div>
                  <div className="group relative">
                    <AiFillLinkedin
                      className="cursor-pointer hover:scale-110 transition duration-100"
                      onClick={() => window.open(urlLinkedin, "_blank")}
                    />
                    <span className="text-white text-sm pointer-events-none absolute top-13 -left-4 w-max opacity-0 transition-opacity group-hover:opacity-50 bg-black rounded px-2">
                      LinkedIn
                    </span>
                  </div>
                  <div className="group relative">
                    <IoMdMail
                      className="cursor-pointer hover:scale-110 transition duration-100"
                      onClick={() => window.open(urlMailTo)}
                    />
                    <span className="text-white text-sm pointer-events-none absolute top-13 -left-1.5 w-max opacity-0 transition-opacity group-hover:opacity-50 bg-black rounded px-2">
                      Email
                    </span>
                  </div>
                </div>
              </div>
              {/* RIGHT - PICTURE */}
              <div className="basis-1/4 flex-1">
                <div className="relative mx-auto bg-gradient-to-b from-blue-400 to-teal-200 rounded-full w-80 h-80 overflow-hidden md:h-96  md:w-96  hover:ring-4 dark:ring-offset-gray-900 hover:ring-blue-300  hover:ring-offset-4 transition-all duration-200">
                  <Image
                    src={deved}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  ></Image>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERTISE */}
          <section className="mt-10 md:mt-20 text-xl">
            <div className="grid py-2 grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="item-card item-green">
                <div className="flex items-center">
                  <SiSpring />
                  &nbsp;Spring
                </div>
                <div className="font-light">bean, injection</div>
              </div>
              <div className="item-card item-language">
                <div className="flex items-center">
                  <BsFiletypeJava className="text-red" />
                  &nbsp;Java
                </div>
                <div className="font-light">
                  stream, thread, thread pool, synchornization
                </div>
              </div>
              <div className="item-card item-language">
                <div className="flex items-center">
                  <SiPython />
                  &nbsp;Python
                </div>
                <div className="font-light">leetcode</div>
              </div>
              <div className="item-card item-web">
                <div className="flex items-center">
                  <SiAngular />
                  &nbsp;Angular
                </div>
                <div className="font-light">
                  binding, lifecycle, injection, ts, responsive
                </div>
              </div>
              <div className="item-card item-web">
                <div className="flex items-center">
                  <RiReactjsLine className="text-xl" />
                  &nbsp;React
                </div>
                <div className="font-light">
                  react hook, life cycle, responsive
                </div>
              </div>
              <div className="item-card item-support">
                <div className="flex items-center">
                  <SiMicrosoftazure />
                  &nbsp;Azure
                </div>
                <div className="font-light">practicing</div>
              </div>
            </div>
            <div className="grid py-2 grid-cols-4 md:grid-cols-6 gap-3 text-xs sm:text-base md:text-sm lg:text-lg">
              <div className="item-card item-language">SQL</div>
              <div className="item-card item-language">GO</div>
              <div className="item-card item-web">Mongo</div>
              <div className="item-card item-web">Vue</div>
              <div className="item-card item-system">Docker</div>
              <div className="item-card item-system">Ubuntu</div>
            </div>
            <div className="grid py-2 grid-cols-4 md:grid-cols-7 gap-3 text-xs sm:text-base md:text-sm lg:text-lg ">
              <div className="item-card item-support">Mockito</div>
              <div className="item-card item-support">Sonar</div>
              <div className="item-card item-support">Postman</div>
              <div className="item-card item-web">Tailwind CSS</div>
              <div className="item-card item-design">Figma</div>
              <div className="item-card item-design">Photoshop</div>

              <div className="item-card item-system">Unity</div>
            </div>
          </section>

          <section className="py-12 mt-12">
            <h3 className="text-5xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-extrabold w-fit">
              Experience
            </h3>

            {/* JOB */}
            <div className="lg:flex gap-5 ">
              {/* ZIMMER */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-600 shadow-lg shadow-blue-500/50 text-center text-white font-semibold py-10 px-4 rounded-xl my-10 flex-1 hover:brightness-105 hover:scale-105 transition duration-300">
                <Image
                  className="mx-auto"
                  src={job4}
                  width={90}
                  height={90}
                  alt=""
                />
                <div className="text-xl font-extrabold pt-8">Zimmer Biomet</div>
                <div className="text-xs">Montreal, CA. Permanent</div>
                <div className="text-lg font-semibold py-1">
                  Software Developer
                </div>
                <p className="py-2">
                  Deliver SaaS product PMP (Personalized Medical Portal) to ease
                  the business transaction between information throughout
                  different systems.
                </p>
                <h4 className="pt-4 pb-2 text-teal-200">Tech Stack</h4>
                <p className="text-gray-100">Spring</p>
                <p className="text-gray-100">Angular</p>
                <p className="text-gray-100">Azure</p>
                <p className="text-gray-100">SQL</p>
                <p className="text-gray-100">Mockito</p>
              </div>
              {/* ERICSSON */}
              <div className="bg-blue-500 shadow-md text-center text-white font-semibold py-10 px-4 rounded-xl my-10  flex-1 hover:brightness-105 hover:scale-105 transition duration-300">
                <Image
                  className="mx-auto"
                  src={job3}
                  width={70}
                  height={70}
                  alt=""
                />
                <h3 className="text-lg font-extrabold pt-8 pb-2">Ericsson</h3>
                <div className="text-xs">Montreal, CA. Intern of 12</div>
                <p className="py-2">
                  Responsible for the test coverage of telemetry system and
                  deliver daily passage for api regression test.
                </p>
                <h4 className="pt-4 pb-2 text-teal-200">Tech Stack</h4>
                <p className="text-gray-100">Spring</p>
                <p className="text-gray-100 ">Mockito</p>
                <p className="text-gray-100">Postman</p>
                <p className="text-gray-100">Ubuntu</p>
              </div>
              {/* FIERA */}
              <div className="bg-blue-500 shadow-md text-center text-white font-semibold py-10 px-4 rounded-xl my-10  flex-1   hover:brightness-105 hover:scale-105 transition duration-300">
                <Image
                  className="mx-auto"
                  src={job2}
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="text-lg font-extrabold pt-8 pb-2 ">
                  Fiera Capital
                </h3>
                <div className="text-xs">Montreal, CA. Intern of 4</div>
                <p className="py-2">
                  Create and maintain automation script to accelerate and verify
                  data transaction.
                </p>
                <h4 className="pt-4 pb-2 text-teal-200">Tech Stack</h4>
                <p className="text-gray-100">Python</p>
                <p className="text-gray-100">SQL</p>
              </div>
              {/* AIRBUS */}
              <div className="bg-blue-500 shadow-md text-center text-white font-semibold py-10 px-4 rounded-xl my-10 flex-1  hover:brightness-105 hover:scale-105 transition duration-300">
                <Image
                  className="mx-auto pt-3"
                  src={job1}
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="text-lg font-extrabold  pt-8 pb-2 ">Airbus</h3>
                <div className="text-xs">Mirabel, CA. Intern of 4</div>
                <p className="py-2">
                  Sole completion of monitoring tool for airplain descrepency
                  report that ease the workflow of liaison engineer team.
                </p>
                <h4 className="pt-4 pb-2 text-teal-200">Tech Stack</h4>
                <p className="text-gray-100">React</p>
                <p className="text-gray-100">SQL</p>
                <p className="text-gray-100">PHP</p>
              </div>
            </div>
          </section>

          {/* PLANS */}
          <section className="section-plan h-screen">
            <section className="text-gray-100 bg-gradient-to-r from-blue-900 from-15% to-blue-950 text-white overflow-hidden shadow-md shadow-blue-950/50 rounded-xl flex-1 my-5 grid grid-cols-1 md:grid-cols-3 hover:brightness-110 transition duration-300">
              <div className="col-span-2 m-10">
                <h1 className="text-2xl font-bold text-center flex items-center mx-auto justify-center">
                  <BsListTask className="pt-1" />
                  &nbsp;What I am doing right now
                </h1>
                <div className="text-gray-300 flex items-center mx-auto justify-center font-semibold">
                  <ul className="text-xl pl-1 sm:pl-10 pt-3 space-y-3 list-disc marker:text-blue-600">
                    <li>Learning Azure</li>
                    <li>
                      <div className="flex items-center">
                        Playing AI drawing tools: Stable Diffusion & Midjourney
                        & etc&nbsp;&nbsp;
                        <span className="group relative">
                          <AiFillInstagram
                            className="text-3xl cursor-pointer  hover:scale-125 transition duration-100 text-pink-400"
                            onClick={() => window.open(urlInstagram, "_blank")}
                          />
                        </span>
                      </div>
                    </li>
                    <li>Develop a mobile game using unity</li>
                    <li>Plannig for personal vlog</li>
                  </ul>
                </div>
              </div>
              <div className="img-type-1 col-span-1 bg-black rounded-r-xl border-l-4 dark:border-black hover:border-l-2"></div>
            </section>

            {/* DO LATER */}
            <section className="mt-10 text-gray-100 bg-gradient-to-r from-blue-900 from-10% to-blue-950 text-white py-10 shadow-md shadow-blue-950/50 p-10 rounded-xl hover:brightness-110 transition duration-300">
              <h1 className="text-3xl py-2 dark:text-white text-center flex items-center mx-auto justify-center">
                Next Plan
              </h1>
              <div className="pb-2 text-center text-xl  text-gray-300 list-disc dark:text-white">
                <div className="flex justify-center flex items-center">
                  <FaRobot />
                  &nbsp;AI and ML&nbsp;
                  <FaRobot />
                </div>
              </div>
            </section>
          </section>

          {/*  */}
          <section id="projects" className="mt-11">
            <h3 className="text-5xl pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-extrabold w-fit">
              Projects
            </h3>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="py-12 mt-12">
            <h3 className="text-5xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-extrabold w-fit">
              Project
            </h3>
          </section>

          {/*  */}
          <section className="py-10">
            <h1 className="text-xl py-2 dark:text-white text-center flex items-center mx-auto justify-center">
              This page is powered by 🚀
            </h1>
            <div className="py-2   text-xl  text-gray-700 list-disc dark:text-white">
              <div className="flex justify-center items-center flex-col gap-3 md:flex-row">
                <div className="flex items-center">
                  <SiReact />
                  &nbsp;React
                </div>
                <div className="flex items-center">
                  <SiNextdotjs />
                  &nbsp;Next.js
                </div>
                <div className="flex items-center">
                  <SiTailwindcss />
                  &nbsp;Tailwind
                </div>
                <div className="flex items-center">
                  <SiVercel />
                  &nbsp;Vercel
                </div>
                <div className="flex items-center">
                  <GiRainbowStar />
                  &nbsp;my imagination
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
function onClickNotAvailable() {
  throw new Error("Function not implemented.");
}
