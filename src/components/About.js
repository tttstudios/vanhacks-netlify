import PropTypes from 'prop-types';

export default function About({ data }) {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="section-heading vanhacks-heading">{data.title}</h2>
                    </div>
                </div>

                <div className="row about-row">
                    <div className="col-md-6">
                        <div className="about-text about-text-left">
                            {data.description.map((paragraph, index) => {
                                return (<div key={index} style={{ marginBottom: '20px' }}>
                                    {paragraph.p}
                                </div>)
                            })}
                        </div>

                        <div className="about-text about-text-mobile">
                            {data.description.map((paragraph, index) => {
                                return (<div key={index} className="about-paragraph">
                                    {paragraph.p}
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={data.image} className="about-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

About.defaultProps = {
    data: null
};

About.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.shape({
            description: PropTypes.arrayOf(PropTypes.string),
            image: PropTypes.img,
            title: PropTypes.string
        })
    )
};