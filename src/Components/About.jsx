/* eslint-disable react/no-unescaped-entities */
export const About = () => {
  return (
    <section id="about" className="my-6 md:my-12 p-2 flex flex-col w-full items-start gap-6 ">
        <h2 className=" text-3xl md:text-4xl font-extrabold dark:text-white flex items-center justify-center gap-2"><img src="../public/assets/icons/user.svg" alt="user" className="h-10"></img> About Me</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 flex flex-col gap-3">
          <b>👋 Hello there!</b> I'm Shubham, a frontend developer with a passion for crafting websites that are:
          <ul className="ps-5 mb-3 space-y-1 list-disc list-inside text-lg md:text-xl">
            <li><b>User-Friendly - </b>Focused on smooth navigation and great experiences.</li>
            <li><b>Engaging  - </b>Designed to captivate and leave a lasting impression.</li>
            <li><b>Efficient  - </b>Built with performance and scalability in mind.</li>
          </ul>
          <b className="text-lg md:text-xl">🎓 Education</b>
          <ul className="ps-5 mb-3 space-y-1 list-disc list-inside text-lg md:text-xl">
            <li>Pursuing a <b>Bachelor's degree in Computer Science</b>, expanding my knowledge of coding and problem-solving.</li>
          </ul>
          <b className="text-lg md:text-xl">⚙️ What I'm Learning</b>
          <ul className="ps-5 mb-3 space-y-1 list-disc list-inside text-lg md:text-xl">
            <li>Exploring the <b>MERN stack</b> (MongoDB, Express.js, React, Node.js) to create dynamic and full-stack web applications.</li>
            <li>Improving my skills in <b>UI/UX</b> design for a better user experience.</li>
          </ul>
          <b className="text-lg md:text-xl">🎯 My Goals</b>
          <ul className="ps-5 mb-3 space-y-1 list-disc list-inside text-lg md:text-xl">
            <li>To develop <b>modern, responsiv</b>e websites that stand out.</li>
            <li>To contribute to <b>exciting projects</b> in the tech world.</li>
          </ul>
          <b className="text-lg md:text-xl">💡 Fun Fact</b>
          <ul className="ps-5 mb-3 space-y-1 list-disc list-inside text-lg md:text-xl">
            <li>I'm always excited to learn new things and experiment with creative ideas in web development!</li>
          </ul>
        </p>
      </section>
  )
}
