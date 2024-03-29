import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Hosts({ data }) {
    return (
        <section id="hosts">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Hosts</h2>
                    </div>
                </div>

                <div className="row hostsRow">
                    {data.map((h, index) => (
                        <div key={index} className="col-xs-6 col-md-2">
                            <div className="team-member">
                                <img className="img-host img-host-bg"
                                    src={h.host}
                                    alt={h.alt} />
                                <h4 className="mentor">{h.fullName}</h4>
                                <p className="mentor-description">{h.description}</p>
                                <ul className="list-inline social-buttons-host">
                                    <li>
                                        <a href={h.socialMediaUrl} target="_blank" rel="noopener noreferrer">
                                            <img className="social-media-icon" src="/img/iconSocialColourLinkedin@2x.png" alt="Linkedin icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

Hosts.defaultProps = {
    data: null,
};

Hosts.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                fullName: PropTypes.string,
                host: PropTypes.img,
                socialMediaUrl: PropTypes.string,
            })
        )
    )
};
