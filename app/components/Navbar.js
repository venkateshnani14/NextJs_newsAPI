const Navbar = ({newsCategory})=>{
    return(
<nav class="bg-indigo-400 text-white border-blue-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">V-logs</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className = "hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className = "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-indigo-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-indigo-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" onClick={()=>{newsCategory("general")}} class="block py-2 px-3 text-white hover:text-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 font-bold" aria-current="page">General</a>
        </li>
        <li>
          <a href="/sports" onClick={()=>{newsCategory("sports")}} class="block py-2 px-3 text-white rounded hover:text-black md:hover:bg-transparent md:border-0 md:p-0 dark:text-white font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sports</a>
        </li>
        <li>
          <a href="/science" class="block py-2 px-3 text-white rounded hover:text-black md:hover:bg-transparent md:border-0 md:p-0 font-bold dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Science</a>
        </li>
        <li>
          <a href="/technology" class="block py-2 px-3 text-white rounded hover:text-black md:hover:bg-transparent md:border-0  md:p-0 font-bold dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Technology</a>
        </li>
        <li>
          <a href="/health" class="block py-2 px-3 text-white rounded hover:text-black md:hover:bg-transparent md:border-0 md:p-0 font-bold dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Health</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
export default Navbar