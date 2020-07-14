import PropTypes from 'prop-types';
import showdown from 'showdown';

export default function About({ data }) {
    const converter = new showdown.Converter();
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
                        <div className="about-text about-text-left" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.descriptionMarkdown) }} />
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