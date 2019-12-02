export default function Hosts({ data }) {
    return (
        <section id="hosts">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Hosts</h2>
                    </div>
                </div>

                <div className="row">
                    {data.map((h, index) => {
                        return (
                            <div key={index} className="col-xs-6 col-md-2">
                                <div className="team-member">
                                    <img className="img-host img-host-bg"
                                        src={h.host}
                                        alt={h.alt} />
                                    <h4 className="mentor">{h.fullName}</h4>
                                    <p className="mentor-description">{h.description}</p>
                                    <ul className="list-inline social-buttons-host">
                                        <li><a href={h.socialMediaUrl} target="_blank"><i
                                            className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}