import PropTypes from 'prop-types'

const Header = ({ data }) => (
    <header style={{ backgroundImage: `${data.image}` }}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-heading">{data.date}</div>
                <img className="img-responsive vanhacks-intro" src="./img/logos/vanhacks_logo_white@2x.png" alt="Vanhacks" />
                <img className="img-responsive social-good" src="./img/forsocialgood@2x.png" alt="For Social Good" />

                {/* <div id="purchase-tickets-button" className="button-yellow tickets-button">{data.buttonTitle}</div> */}
                <p style={{ fontSize: '20px' }}>Tickets coming soon!</p>
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
