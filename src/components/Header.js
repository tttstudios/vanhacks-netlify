const Header = ({ data }) => (
    <header style={{ backgroundImage: `${data.image}` }}>
        {/* <img src={image} alt="" /> */}
        <div className="container">
            <div className="intro-text">
                <div className="intro-heading">{data.date}</div>
                <img className="img-responsive vanhacks-intro" src="./img/logos/vanhacks_logo_white@2x.png" alt="Vanhacks" />
                <img className="img-responsive social-good" src="./img/forsocialgood@2x.png" alt="For Social Good" />

                <div id="purchase-tickets-button" className="button-yellow tickets-button">{data.buttonTitle}</div>
            </div>
        </div>
    </header>
);

export default Header;
