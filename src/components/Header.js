// import Link from 'next/link';
import Head from 'next/head';

const Header = () => (
    <header>
        <div className="container">
            <div className="intro-text">
                <div className="intro-heading">September 13-15, 2019</div>
                <img className="img-responsive vanhacks-intro" src="./img/logos/vanhacks_logo_white@2x.png" alt="Vanhacks" />
                <img className="img-responsive social-good" src="./img/forsocialgood@2x.png" alt="For Social Good" />

                <div id="purchase-tickets-button" className="button-yellow tickets-button">Get your tickets!</div>
            </div>
        </div>
    </header>
);

export default Header;
