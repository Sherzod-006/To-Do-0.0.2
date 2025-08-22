import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {

    function toggleTheme() {
        
    }

    const cardStyle = "bg-white py-3 px-5 rounded-4xl shadow-xl cursor-default";
    const purple = "text-purple-950";
  return (
    <main>
      <header className="flex items-center justify-between">
        <section className={cardStyle}>
            <h1 className={`text-3xl ${purple} font-bold`}>Hi, <Link to={"/profile"}>Sherzod</Link></h1>
            <p className="text-cyan-950 text-xl">Let's finish your tasks today!</p>
        </section>
        <section className={`${cardStyle} text-center`}>
            <h1 className="font-mono text-2xl font-bold text-cyan-950">1-07-2024</h1>
            <p className={`${purple} text-xl font-bold`}>23:29</p>
        </section>
        <section className={`flex space-x-3 items-center ${cardStyle}`}>
            <div className="relative cursor-pointer">
                <FontAwesomeIcon className={`${purple} bg-blue-100 text-2xl p-1 rounded-full`} icon={faBell} />
                <button className={`bg-purple-950 text-xl p-1 absolute left-7 rounded-full`}></button>
            </div>
            <button className={`flex items-center rounded-full bg-blue-100 p-1 ${purple}`} onClick={toggleTheme}>
                <FontAwesomeIcon className={`text-xl rounded-full p-0.5 bg-black text-black`} icon={faSun} />
                <FontAwesomeIcon className={`text-xl rounded-full p-0.5`} icon={faMoon} />
            </button>
            <Link to={"/profile"}>
                <img src="\public\me.jpg" alt="" className="rounded-full w-15 border-purple-900 border-3 cursor-pointer" />
                </Link>
        </section>
      </header>
    </main>
  )
}

export default Dashboard
