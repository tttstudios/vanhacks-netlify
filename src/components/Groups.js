export default function Groups({ data }) {
    return (
        <section id="groups">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading ">{data.title}</h2>

                        <div className="groups-body">
                            {data.description.map((paragraph, index) => {
                                return (<div style={{ marginBottom: '20px' }}>
                                    {paragraph.p}
                                </div>)
                            })}
                        </div>

                        <a href="https://volunteeringvancouver.ca/nonprofit-organizations/" target="_blank">
                            <div className="button-yellow group-button">
                                {data.buttonTitle}
                            </div>
                        </a>

                        <div className="container">
                            <div className="section-subheading how-this-works-subheader">
                                How this works
                        </div>
                            <div className="col-md-3">
                                <div className="entry-container">
                                    <div className="entry-step-number col-md-4">
                                        1
                                </div>
                                    <div className="col-md-8 rule-content">
                                        Look for a Vancouver NPO you want to hack for.
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="entry-container">
                                    <div className="entry-step-number col-md-4">
                                        2
                                </div>
                                    <div className="col-md-8 rule-content">
                                        Reach out or do research to find their technical needs. </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="entry-container">
                                    <div className="entry-step-number col-md-4">
                                        3
                                </div>
                                    <div className="col-md-8 rule-content">
                                        Team up or build your group at the Team Formation Social Friday.
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="entry-container">
                                    <div className="entry-step-number col-md-4">
                                        4
                                </div>
                                    <div className="col-md-8 rule-content">
                                        Let the hacking begin.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}