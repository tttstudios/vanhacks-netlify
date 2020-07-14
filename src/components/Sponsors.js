import { PropTypes } from 'prop-types';

export default function Sponsors({ data }) {
    return (
        <section id="sponsors">
            <div className="container">

                {/* <!-- Founding Sponsors --> */}
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">{data.title}</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-3 section-subheading-founding-sponsor">Founding Sponsors</div>
                        {data.foundingSponsors.map((s, index) => {
                            return (
                                <div key={index} className="col-md-4 sponsor-small">
                                    <a href={s.url} target="_blank">
                                        <img className="img-sponsor-small img-responsive" src={s.sponsor}
                                            alt={s.alt} />
                                    </a>
                                    <p className="text-sponsor-small">
                                        {s.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-subheading-sponsors">{data.eventSponsorsTitle}</div>
                            <div className="container">
                                <div className="row gold-row d-flex wrap jc-center">

                                    {data.eventSponsors.map((s, index) => {
                                        if (s.tier == 1) {
                                            return (
                                                <div key={index} className="col-xs-12 col-sm-4 col-md-4">
                                                    <a href={s.url} target="_blank">
                                                        <img className="img-centered img-community-sponsor img-responsive"
                                                            src={s.sponsor}
                                                            alt={s.alt} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="row d-flex wrap jc-center align-center">
                                    {data.eventSponsors.map((s, index) => {
                                        if (s.tier == 2) {
                                            return (
                                                <div key={index} className="col-xs-6 col-sm-3">
                                                    <a href={s.url} target="_blank">
                                                        <img className="img-centered img-responsive silver-sponsor"
                                                            src={s.sponsor}
                                                            alt={s.alt} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                <div className="row d-flex wrap jc-center align-center">
                                    {data.eventSponsors.map((s, index) => {
                                        if (s.tier == 3) {
                                            return (
                                                <div key={index} className="col-xs-4 col-sm-2">
                                                    <a href={s.url} target="_blank">
                                                        <img className="img-centered img-responsive bronze-sponsor-large"
                                                            src={s.sponsor}
                                                            alt={s.alt} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                    <div className="row">

                        <p className="text-sponsor-small text-center sponsors-details">
                            {data.description}
                        </p>

                        <a href={data.buttonUrl} download="vanhacks_2019_sponsorship_package">
                            <div className="button-yellow sponsorship-download-package-button">{data.buttonTitle}
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

Sponsors.defaultProps = {
    data: null
};

Sponsors.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string,
        buttonTitle: PropTypes.string,
        buttonUrl: PropTypes.string,
        description: PropTypes.string,
        eventSponsors: PropTypes.arrayOf(
            PropTypes.objectOf(PropTypes.shape({
                alt: PropTypes.string,
                sponsor: PropTypes.img,
                tier: PropTypes.number,
                url: PropTypes.string
            }))
        )
    }))
};
