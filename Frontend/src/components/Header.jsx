import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header className="flex justify-between items-center px-4 py-3   ">

                <nav className="hidden lg:flex justify-center gap-8 py-2 " style={{ fontSize: "12px" }} >
                    <Link to="#" className=" text-black no-underline position-relative font-bold  group">T-SHIRTS <span className="absolute left-0 -bottom-5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" ></span></Link>
                    <Link to="#" className=" text-black no-underline position-relative font-bold group">WOMEN <span className="absolute left-0 -bottom-5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" ></span></Link>
                    <Link to="#" className=" text-black no-underline position-relative font-bold group">MEN  <span className="absolute left-0 -bottom-5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" ></span></Link>
                    <Link to="#" className=" text-black no-underline position-relative font-bold group">ABOUT  <span className="absolute left-0 -bottom-5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" ></span></Link>
                    <Link to="#" className=" text-black no-underline position-relative font-bold group">CONTACT  <span className="absolute left-0 -bottom-5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" ></span></Link>
                </nav>
                <div className="text-xl font-bold lg:mx-0 border ps-2 pe-2 ">
                    <div>
                        <div className="underline underline-offset-4">E-Fashion</div>
                        <div className="text-sm font-normal font-mono text-center">Style</div>
                    </div>
                </div>

                <ul className="flex items-center HeaderIcons mb-0">
                    <li className="hidden lg:block"><Link to="#"><span className="bi bi-search  text-black  font-bold "></span></Link></li>
                    <li>
                        <Link to="#" className="flex items-center gap-1 text-black fw-bold">
                            <span>$0</span>
                            <i className="bi bi-cart text-xl "></i>
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <div className="dropdown">
                            <button to="#" className=" text-black no-underline  " data-bs-toggle="dropdown"><i className="bi bi-person-fill text-xl text-black border dropdown-toggle p-2  rounded-pill "></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">T-Shirts</Link></li>
                                <li><Link className="dropdown-item" to="#">Women</Link></li>
                                <li><Link className="dropdown-item" to="#">Men</Link></li>
                            </ul>

                        </div>
                        {/* <Link to="#" ><i className="bi bi-person-fill text-xl text-black border p-2  rounded-pill font-bold "></i></Link> */}
                    </li>
                    <li>
                        <button
                            className="lg:hidden text-2xl"
                            onClick={() => setMenuOpen(true)} >
                            <i className="bi bi-list"></i>
                        </button>
                    </li>
                </ul>
            </header>
            {
                menuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-64 h-full p-4">
                            <button
                                className="text-xl mb-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="bi bi-x"></span> Close
                            </button>
                            <nav className="flex flex-col gap-4">
                                <div className="dropdown">
                                    <button to="#" className=" text-black no-underline dropdown-toggle " data-bs-toggle="dropdown"><i className="bi bi-person-fill text-xl text-black border p-2  rounded-pill "></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">T-Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="#">Women</Link></li>
                                        <li><Link className="dropdown-item" to="#">Men</Link></li>
                                    </ul>

                                </div>
                                <Link to="#" className=" text-black no-underline" >T-SHIRTS</Link>
                                <Link to="#" className=" text-black no-underline">WOMEN</Link>
                                <Link to="#" className=" text-black no-underline">MEN</Link>
                                <Link to="#" className=" text-black no-underline">ABOUT</Link>
                                <Link to="#" className=" text-black no-underline">CONTACT</Link>
                            </nav>
                        </div>
                    </div>
                )
            }
        </>
    )
}