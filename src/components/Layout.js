import Navbar from './Navbar';
import Header from './Header';

const Layout = props => (

    <div>

        <Navbar />

        <Header />

        {props.children}

    </div>

);

export default Layout;
