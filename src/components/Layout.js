import Navbar from './Navbar';

const Layout = props => (

    <div>
        <div style={{ width: '100%',  padding: '10px' }}>
            "If you are looking for our friends at Vanhack… a great organization that helps companies hire tech professionals from a world of talent go to <a href="http://www.vanhack.com" target="_blank" rel="noopener noreferrer">http://www.vanhack.com</a>"
        </div>
        <Navbar />

        {props.children}

    </div>

);

export default Layout;
