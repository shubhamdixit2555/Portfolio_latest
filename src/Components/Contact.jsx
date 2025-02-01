/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  return (
    <section id="contact" className="my-6 md:my-12 p-2 flex flex-col w-full items-start gap-5 ">
        <h2 className=" text-3xl md:text-4xl font-extrabold dark:text-white flex items-center justify-center gap-2"><img src="/assets/icons/contact.svg" alt=""/>Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-between w-full gap-3 px-3 md:px-16 py-3">
          <div className="md:w-[50%] flex flex-col items-start gap-6 md:gap-7 md:max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white ">Got Any Questions?</h3>
            <p>If you have any inquiries or need assistance, feel free to reach out! I'm always open to connecting and answering your queries. Let's create something amazing together.</p>
            <div className="flex flex-col gap-2">
              <h4><a href="tel:9458549339">📱 Phone: +91 9458549339</a></h4>
              <h4><a href="mailto:shubhamdixit2555@gmail.com">📧 Email: shubhamdixit2555@gmail.com</a></h4>
              <h4>📍 Address: Mainpuri, Uttar Pradesh, India</h4>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <div className="md:w-[50%] flex flex-col items-start gap-6 md:gap-7 max-w-md">
            <form className="max-w-md w-full px-3 py-2" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="5c30d441-a642-4ba0-8466-e799185ebcc8"/>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:flex items-center gap-2 font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name *</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address *</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea id="message" rows="3" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your message *</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Submit</button>
            </form>
          </div>
        </div>

      </section>
  )
}
