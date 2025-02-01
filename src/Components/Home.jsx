/* eslint-disable react/no-unescaped-entities */
import {motion} from 'motion/react';
export const Home = () => {
  return (
    <section id="home" className="my-6 md:my-12 p-2 flex flex-col md:flex-row md:justify-between w-full items-center min-h-[90vh] md:min-h-[100vh]">
        <div id="home_1" className="w-full md:w-[50%] items-center justify-center flex">
          {/* <img src=" ../public/assets/images/cartoon_motion.img.png" alt="img" className="h-40 md:h-96 w-auto" /> */}
          <motion.img drag dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }} src=" \assets\images\cartoon_img.png" alt="img" className="h-40 md:h-96 w-auto" />
        </div>
        <div id="home_2" className="w-full md:w-[50%] items-center md:items-start justify-center flex flex-col gap-7 md:gap-8 p-2">
          <h1 className="text-3xl md:text-5xl font-bold ">Hello, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400"><b>Shubham</b></span></h1>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 ">Frontend Web Developer and Technical Assistant</p>
          <p className="mb-3 text-xl text-gray-500 dark:text-gray-100 first-line:uppercase first-line:tracking-widest first-letter:text-5xl first-letter:font-semibold md:first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">I'm passionate about creating user-friendly and engaging websites that look great and work smoothly. Currently, I'm exploring the MERN stack and working on my Bachelor's degree in Computer Science. I'm always excited to learn and build something new.</p>
          <ul className="flex gap-4 md:gap-6">
            <li>
              <a href="https://github.com/shubhamdixit2555" title="GitHub" target="_blank" className="pointer hover:text-blue-600"><i className="pointer fa-brands fa-github text-3xl"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/mr_shubham_dixit" title="Instagram" target="_blank" className="pointer hover:text-blue-600"><i className="pointer fa-brands fa-instagram text-3xl"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shubham-dixit-dev/" title="LinkedIn" target="_blank" className="pointer hover:text-blue-600"><i className="pointer fa-brands fa-linkedin text-3xl"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/shubhamdixit2550" title="Facebook" target="_blank" className="pointer hover:text-blue-600"><i className="pointer fa-brands fa-facebook text-3xl"></i></a>
            </li>
            <li>
              <a href="https://discord.com/invite/H6Q2SzUp" title="Discord" target="_blank" className="pointer hover:text-blue-600"><i className="pointer fa-brands fa-discord text-3xl"></i></a>
            </li>
            <li>
              <a href="https://wa.me/9458549339" title="Whatsapp" target="_blank" className="pointer hover:text-blue-600"><i className="pointer fa-brands fa-whatsapp text-3xl"></i></a>
            </li>
          </ul>
          <a href="/assets/docs/ShubhamDixitResume.pdf" target="_blank" className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-400 to-purple-600 group-hover:from-purple-600 group-hover:to-sky-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-500">
            <span className="rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
            Get My Resume
            </span>
          </a>
        </div>
      </section>
  )
}
