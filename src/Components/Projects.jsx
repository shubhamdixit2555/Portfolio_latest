/* eslint-disable react/no-unescaped-entities */
export const Projects = () => {
  return (
    <section id="projects" className="my-6 md:my-12 p-2 flex flex-col w-full items-start gap-5 ">
        <h2 className=" text-3xl md:text-4xl font-extrabold dark:text-white flex items-center justify-center gap-2"><img src="/assets/icons/work.svg" alt=""></img>Projects</h2>
        <div className="flex gap-5 flex-wrap">
          {/* <!-- Employee Management System --> */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Employee Management System </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A system to manage employees effectively with features like task allocation and status tracking. Built using React with organized local storage management.</p>
            <div className="flex flex-row gap-2">
              <a href="https://project-ems.netlify.app/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Project</a>
              <a href="https://github.com/shubhamdixit2555/EMS" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Code</a>
            </div>
          </div>
          {/* <!-- Family Golf Clone --> */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Family Golf Clone</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A UI clone of the 'Family Golf' website, designed to recreate its user-friendly interface with attention to detail in layout and responsiveness</p>
            <div className="flex flex-row gap-2">
              <a href="https://shubham-project-golf.netlify.app/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Project</a>
              <a href="https://github.com/shubhamdixit2555/project-golf" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Code</a>
            </div>
          </div>
          {/* <!-- Netflix UI Clone --> */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Netflix UI Clone</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A front-end replica of Netflix showcasing a modern, responsive design with an emphasis on layout accuracy and styling.</p>
            <div className="flex flex-row gap-2">
              {/* <!-- due to broken link now this link will be unclickable --> */}
              {/* <!-- <a href="https://shubham-project-01.netlify.app/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Project</a> --> */}
              <a className="cursor-not-allowed inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg not-allowed hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-500 dark:focus:ring-gray-600" title="This project is currently unavailable due to copyright reasons.">View Project</a>
              <a href="https://github.com/shubhamdixit2555/netflix_clone" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Code</a>
            </div>
          </div>
          {/* <!-- Visual Fetch --> */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visual Fetch</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A dynamic image search website leveraging the Unsplash API, allowing users to explore high-quality images based on their queries.</p>
            <div className="flex flex-row gap-2">
              <a href="https://visualfetch.netlify.app/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Project</a>
              <a href="https://github.com/shubhamdixit2555/visual-fetch" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Code</a>
            </div>
          </div>
        </div>
      </section>
  )
}
