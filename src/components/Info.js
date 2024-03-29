import PropTypes from 'prop-types';
import showdown from 'showdown';

export default function Info({ data }) {
    const converter = new showdown.Converter();

    return (
        <section id="info">
            <div className="container">
                <div className="row info-padding">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">{data.title}</h2>
                        </div>
                    </div>

                    <div>
                        <div className="col-md-12">
                            <h4 className="rules-subheader">Rules</h4>
                            {/* {
                                data.rules.map((r, index) => (
                                    <div key={index} className="row">
                                        <div className="col-md-6">
                                            <h4 className="rules">{r.firstRule}</h4>
                                            <p className="rules">{r.firstDescription}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="rules">{r.secondRule}</h4>
                                            <p className="rules">{r.secondDescription}</p>
                                        </div>
                                    </div>
                                ))
                            } */}
                            <div className="rules-container">
                                {
                                    data.rulesLite && data.rulesLite.map(rule => (
                                        <div key={rule.rule} className="rules-item">
                                            <h4 className="rules">{rule.rule}</h4>
                                            <p className="rules" dangerouslySetInnerHTML={{ __html: converter.makeHtml(rule.description) }} />
                                        </div>
                                    ))
                                }
                            </div>

                            {/* <!-- FAQ Section --> */}

                            <h4 className="rules-subheader" style={{ paddingTop: '50px' }}>FAQ</h4>
                            {/* {data.faq.map((faq, index) => (
                                <div key={index} className="row">
                                    <div className="col-md-6">
                                        <h4 className="rules">{faq.firstQ}</h4>
                                        <p className="rules">
                                            {faq.firstAnswerOne}
                                            {' '}
                                            <a href={faq.firstHrefUrl}>{faq.firstHrefText}</a>
                                            {' '}
                                            {faq.firstAnswerTwo}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <h4 className="rules">{faq.secondQ}</h4>
                                        <p className="rules">
                                            {faq.secondAnswerOne}
                                            {' '}
                                            <a href={faq.secondHrefUrl}>{faq.secondHrefText}</a>
                                            {' '}
                                            {faq.secondAnswerTwo}
                                        </p>
                                    </div>

                                </div>

                            ))} */}
                            <div className="rules-container">
                                {
                                    data.faqLite.map(faq => (
                                        <div key={faq.question} className="rules-item">
                                            <h4 className="rules">{faq.question}</h4>
                                            <p className="rules" dangerouslySetInnerHTML={{ __html: converter.makeHtml(faq.answer) }} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Info.defaultProps = {
    data: null,
};

Info.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        faq: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
            firstQ: PropTypes.string,
            firstAnswerOne: PropTypes.string,
            firstHrefText: PropTypes.string,
            firstHrefUrl: PropTypes.string,
            firstAnswerTwo: PropTypes.string,
            secondQ: PropTypes.string,
            secondAnswerOne: PropTypes.string,
            secondHrefText: PropTypes.string,
            secondHrefUrl: PropTypes.string,
            secondAnswerTwo: PropTypes.string,
        }))),
        faqLite: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string,
        }))),
        rules: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
            firstRule: PropTypes.string,
            firstDescription: PropTypes.string,
            secondRule: PropTypes.string,
            secondDescription: PropTypes.string,
        }))),
        newRules: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
            rule: PropTypes.string,
            description: PropTypes.string,
        }))),
        title: PropTypes.string,
    })),
};
