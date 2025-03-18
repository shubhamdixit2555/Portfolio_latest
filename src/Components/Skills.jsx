export const Skills = () => {
  return (
    <section id="skills" className="my-6 md:my-12 p-2 flex flex-col w-full items-start gap-5 ">
      <h2 className="text-3xl md:text-4xl font-extrabold dark:text-white flex items-center justify-center gap-2">
        <img src="/assets/icons/skill.svg" alt=""/> 
        Skills
      </h2>

      <div className="overflow-x-auto">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody className="flex flex-col gap-8 md:gap-5">
            
            {/* Front-end */}
            <tr className="flex md:flex-row flex-col">
              <th scope="row" className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-44">
                
                {/* Light & Dark Mode Icons */}
                <img src="/assets/icons/front-end.svg" alt="icon" className="h-8 " />  
                
                FRONT END
              </th>
              <td className="px-6 py-4 flex flex-wrap gap-8">
                
                {/* Icons with Light/Dark Mode */}
                <img src="/assets/icons/HTML.svg" title="HTML" alt="icon" className="h-9 " />

                <img src="/assets/icons/CSS.svg" title="CSS" alt="icon" className="h-9 " />

                <img src="/assets/icons/Bootstrap.svg" title="Bootstrap" alt="icon" className="h-9" />

                <img src="/assets/icons/TailwindCSS-Light.svg" title="TailwindCSS" alt="icon" className="h-9 dark:hidden" />
                <img src="/assets/icons/TailwindCSS-Dark.svg" title="TailwindCSS" alt="icon" className="h-9 hidden dark:block" />

                <img src="/assets/icons/JavaScript.svg" title="JavaScript" alt="icon" className="h-9" />

                <img src="/assets/icons/React-Light.svg" title="React" alt="icon" className="h-9 dark:hidden" />
                <img src="/assets/icons/React-Dark.svg" title="React" alt="icon" className="h-9 hidden dark:block" />
              </td>
            </tr>

            {/* Back-end */}
            <tr className="flex md:flex-row flex-col">
              <th scope="row" className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-4 flex items-center gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-44">
                
                {/* Light & Dark Mode Icons */}
                <img src="/assets/icons/back-end.svg" alt="icon" className="h-8" />
                BACK END
              </th>
              <td className="px-6 py-4 flex flex-wrap gap-8">
                
                <img src="/assets/icons/NodeJS-Light.svg" title="NodeJS" alt="icon" className="h-9 dark:hidden" />
                <img src="/assets/icons/NodeJS-Dark.svg" title="NodeJS" alt="icon" className="h-9 hidden dark:block" />

                <img src="/assets/icons/MongoDB.svg" title="MongoDB" alt="icon" className="h-9" />

                <img src="/assets/icons/ExpressJS-Light.svg" title="ExpressJS" alt="icon" className="h-9 dark:hidden" />
                <img src="/assets/icons/ExpressJS-Dark.svg" title="ExpressJS" alt="icon" className="h-9 hidden dark:block" />
              </td>
            </tr>

            {/* Extra Skills */}
            <tr className="flex md:flex-row flex-col">
              <th scope="row" className="px-6 py-4 flex items-center gap-2 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-white dark:bg-gray-800 w-full md:w-44">
                
                {/* Light & Dark Mode Icons */}
                <img src="/assets/icons/ext-skill.svg" alt="icon" className="h-8" />

                EXTRA SKILLS
              </th>
              <td className="px-6 py-4 flex flex-wrap gap-8">
                
                <img src="/assets/icons/Git.svg" title="Git" alt="icon" className="h-9" />

                <img src="/assets/icons/Github-Light.svg" title="Github" alt="icon" className="h-9 dark:hidden" />
                <img src="/assets/icons/Github-Dark.svg" title="Github" alt="icon" className="h-9 hidden dark:block" />

                <img src="/assets/icons/VSCode-Light.svg" title="VSCode" alt="icon" className="h-9 dark:hidden" />
                <img src="/assets/icons/VSCode-Dark.svg" title="VSCode" alt="icon" className="h-9 hidden dark:block" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  )
}
