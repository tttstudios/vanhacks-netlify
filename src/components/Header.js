import PropTypes from 'prop-types'

const Header = ({ data }) => (
    <header style={{ backgroundImage: `url(${data.image})` }}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-heading" style={{ width: '60%' }}>
                    If you are looking for our friends at Vanhack… a great organization that helps companies hire tech professionals from a world of talent go to <a href="http://www.vanhack.com" target="_blank" rel="noopener noreferrer">http://www.vanhack.com</a>
                </div>
                <div className="intro-heading">{data.date}</div>
                <img className="img-responsive vanhacks-intro" src={data.vanhacksLogo} alt="Vanhacks Logo" />
                <img className="img-responsive social-good" src="./img/forsocialgood@2x.png" alt="VanHacks: For Social Good" />

                {/* <a href={data.buttonURL} target="_blank" rel="noopener noreferrer" id="purchase-tickets-button" className="button-yellow tickets-button">
                    {data.buttonTitle}
                </a> */}
                <p style={{ fontSize: '30px', color: '#d9d9d9' }}>Tickets sold out</p>
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
