export default function Judges({ data }) {

    return (
        <section id="judges">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Judges</h2>
                    </div>
                </div>

                <div>
                    {data.map((j, index) => {
                        if ((index % 2) == 0) {
                            return (
                                <div key={index} className="row judge">
                                    <div className="col-xs-12 col-sm-2 d-flex jc-center align-center">
                                        <img className='judge-image' src={j.judge} />
                                    </div>
                                    <div className="col-xs-12 col-sm-10 judge-bio">
                                        <div className="judge-title"><strong>{j.fullName}</strong> - {j.jobTitle}</div>
                                        <div className="judge-description">{j.description}</div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="row judge">
                                    <div className="col-xs-12 col-sm-2 col-md-offset-2 d-flex jc-center align-center">
                                        <img className='judge-image' src={j.judge} />
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-md-8 judge-bio">
                                        <div className="judge-title"><strong>{j.fullName}</strong> - {j.jobTitle}</div>
                                        <div className="judge-description">{j.description}</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

        </section>
    );
}