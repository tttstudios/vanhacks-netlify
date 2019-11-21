import Head from 'next/head';

const Navbar = () => (

    /* <!-- Navigation --> */
    <nav className="navbar navbar-default navbar-fixed-top" >
        <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top"></a>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>

                    <li>
                        <a className="page-scroll nav-link-font" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#schedule">Schedule</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#judges">Judges</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#hosts">Hosts</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#mentors">Mentors</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#info">Info</a>
                    </li>
                    <li>
                        <a className="page-scroll nav-link-font" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
    </nav>

);

export default Navbar;