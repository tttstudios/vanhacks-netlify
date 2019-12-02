export default function Info({ data }) {
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
                            {
                                data.rules.map((r, index) => {
                                    return (
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
                                    )
                                })
                            }

                            {/* <!-- FAQ Section --> */}

                            <h4 className="rules-subheader" style={{ paddingTop: '50px' }}>FAQ</h4>
                            {data.faq.map((faq, index) => {
                                return (
                                    <div key={index} className="row">
                                        <div className="col-md-6">
                                            <h4 className="rules">{faq.firstQ}</h4>
                                            <p className="rules">
                                                {faq.firstAnswerOne} {faq.firstHref} {faq.firstAnswerTwo}
                                            </p>
                                        </div>

                                        <div className="col-md-6">
                                            <h4 className="rules">{faq.secondQ}</h4>
                                            <p className="rules">
                                                {faq.secondAnswerOne} {faq.secondHref} {faq.secondAnswerTwo}
                                            </p>
                                        </div>

                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}