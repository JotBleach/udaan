import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Brand from '../Brand';

const Navbar = () => {
    const [state, setState] = useState(false);
    const router = useRouter();
    const { pathname, events } = router;

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "#aboutus" },
        { title: "Socials", path: "#socials" },
        { title: "Our Crew", path: "/crew" },
        { title: "Sponsors", path: "/sponsors" },
    ];

    useEffect(() => {
        const handleState = () => {
            document.body.classList.remove("overflow-hidden");
            setState(false);
        };
        events.on("routeChangeStart", handleState);
        events.on("hashChangeStart", handleState);

        return () => {
            events.off("routeChangeStart", handleState);
            events.off("hashChangeStart", handleState);
        };
    }, [events]);

    const handleNavMenu = () => {
        setState(!state);
        document.body.classList.toggle("overflow-hidden");
    };

    // Smooth scrolling for anchor links and scroll-to-top for Home button
    const handleSmoothScroll = (e, path) => {
        if (path === '/' && pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (path.startsWith('#')) {
            e.preventDefault();
            const targetId = path.slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="w-full fixed top-0 md:px-4 md:pt-1 left-0 z-50">
            <div className='w-full bg-udaanpurple md:rounded-lg drop-shadow-2xl'>
                <nav className="flex items-center justify-between custom-screen mx-auto px-4 py-2 md:flex-row">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Brand />
                        <div className="md:hidden">
                            <button
                                role="button"
                                aria-label="Open the menu"
                                className="text-gray-500 hover:text-gray-800"
                                onClick={handleNavMenu}
                            >
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="flex flex-col justify-end items-center text-white space-y-6 md:flex md:flex-row md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
                            {
                                navigation.map((item, idx) => (
                                    ((pathname !== '/crew' && pathname !== '/sponsors') || 
                                     (item.path !== '#aboutus' && item.path !== '#socials')) && (
                                        <li key={idx} className="duration-150 hover:text-udaanpurplelight">
                                            <Link 
                                                href={item.path} 
                                                className="block"
                                                onClick={(e) => handleSmoothScroll(e, item.path)}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                ))
                            }
                        </ul>
                    </div>
                </nav>    
            </div>
        </header>
    );
};

export default Navbar;
