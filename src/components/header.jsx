
const Header = () => {
    return (
        <div className='sticky top-4  z-10 px-[6px] md:p-0'>
            <div className="navbar max-w-7xl bg-opacity-20 backdrop-filter backdrop-blur-md mt-4 rounded-box bg-neutral md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a href="/" className="btn hidden lg:flex  btn-ghost rounded-box text-xl">
                                            <img src='https://jaipur.manipal.edu/img/manipal-university-jaipur-logo.svg' alt="Muj"
                                                 className='w-[128px] lg:w-[192px]'/>
                                        </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn hover:bg-primary">MUJ Website
                        <svg xmlns="http://www.w3.org/2000/svg" height='24px' width="24px"
                             viewBox="0 0 512 512">
                            <path
                                d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/>
                        </svg>
                    </a>
                </div>
            </div>
            {/*<div className="navbar max-w-7xl bg-opacity-20 backdrop-filter backdrop-blur-md mt-4 rounded-box bg-neutral md:mx-auto">*/}
            {/*    <div className="flex-1">*/}
            {/*                <a href="/" className="btn hidden lg:flex  btn-ghost rounded-box text-xl">*/}
            {/*                    <img src='https://jaipur.manipal.edu/img/manipal-university-jaipur-logo.svg' alt="Muj"*/}
            {/*                         className='w-[128px] lg:w-[192px]'/>*/}
            {/*                </a>*/}
            {/*    </div>*/}
            {/*    <div className="flex-none">*/}
            {/*        <ul className="menu menu-horizontal px-1">*/}
            {/*            <li><a>Link</a></li>*/}
            {/*            <li><a>Link</a></li>*/}
            {/*            <li><a>Link</a></li>*/}
            {/*            <li><a>Link</a></li>*/}
            {/*            <li><a>Link</a></li>*/}
            {/*            <li><a>Link</a></li>*/}

            {/*        </ul>*/}
            {/*    </div>*/}
        {/*</div>*/}
</div>

)
    ;
};

export default Header;