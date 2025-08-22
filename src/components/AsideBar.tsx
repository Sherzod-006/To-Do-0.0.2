import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faBorderAll, faUser } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

const AsideBar = () => {

    //STYLING
    const linkClasses: string = `block w-full py-2 px-3 font-bold text-blue-950 hover:bg-blue-100 hover:rounded-xl`;
    const aside: string = "fixed top-0 left-0 bg-white w-64 min-h-screen shadow-2xl p-4"
    const title: string = "text-3xl font-bold font-serif mt-5 mb-10 text-blue-950"

    //TEMPLATES
    function renderLink(className: string, href: string, value: string, icons: IconProp){
        return (
            <Link className={className} to={href}>
                <FontAwesomeIcon icon={icons} /> {value}
            </Link>
        );
    };

  return (
    <aside className={aside}>
      <h1 className={title}>Task Manager</h1>
      <nav>
        <ul>
            <li>{renderLink(linkClasses, "/", "Dashboard", faHouse)}</li>
            <li>{renderLink(linkClasses, "/add-task", "Add Task", faPlus)}</li>
            <li>{renderLink(linkClasses, "/all", "All", faBorderAll)}</li>
            <li>{renderLink(linkClasses, "/profile", "Profile", faUser)}</li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideBar

