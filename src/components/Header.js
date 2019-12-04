const Header = ({ image }) => (
    <header style={{ backgroundImage: `${image}` }}>
        {/* <img src={image} alt="" /> */}
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

Header.defaultProps = {
    data: null,
};

Header.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.shape({
            image: PropTypes.img,
            date: PropTypes.string,
            buttonTitle: PropTypes.string,
        })
    ),
};

export default Header;
