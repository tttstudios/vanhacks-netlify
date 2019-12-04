import PropTypes from 'prop-types';

export default function Groups({ data }) {
    return (
        <section id="groups">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading ">{data.title}</h2>

                        <div className="groups-body">
                            {data.description.map((paragraph, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    {paragraph.p}
                                </div>
                            ))}
                        </div>

                        <a href="https://volunteeringvancouver.ca/nonprofit-organizations/" target="_blank" rel="noopener noreferrer">
                            <div className="button-yellow group-button">
                                {data.buttonTitle}
                            </div>
                        </a>

                        <div className="container">
                            <div className="section-subheading how-this-works-subheader">
                                How this works
                            </div>
                            {data.instructions.map((i, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="entry-container">
                                        <div className="entry-step-number col-md-4">
                                            {index + 1}
                                        </div>
                                        <div className="col-md-8 rule-content">
                                            {i.step}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Groups.defaultProps = {
    data: null,
};

Groups.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        buttonTitle: PropTypes.string,
        description: PropTypes.arrayOf(
            PropTypes.shape({
                p: PropTypes.string
            })
        ),
        instructions: PropTypes.arrayOf(
            PropTypes.shape({
                step: PropTypes.string
            })
        ),
        title: PropTypes.string,
    })),
};
