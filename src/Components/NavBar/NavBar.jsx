import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [open,setOpen] = useState(false);

    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About' },
        { path: '/services', id: 'services', name: 'Services' },
        { path: '/contact', id: 'contact', name: 'Contact' },
        { path: '/blog/:id', id: 'blog', name: 'BlogPost' }
      ];
      
    return (
        
        <nav className="bg-stone-400">
            <div className="md:hidden text-2xl p-4" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-16':'-top-60'} bg-emerald-300  px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;