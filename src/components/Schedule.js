export default function Schedule({ data }) {
    return (
        <section id="schedule">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">{data.title}</h2>
                    </div>
                </div>
                <div className="row schedule-padding">
                    <div className="row">
                        {data.days.map((d, index) => {
                            return (
                                <div className="col-md-4">
                                    <div className="col schedule">
                                        <h4 className="date">{d.day}</h4>
                                        {
                                            d.timeBlocks.map((t, index) => {
                                                if (t.locationTitle) {
                                                    return (
                                                        <div className="schedule-event-section">
                                                            <p className="time">{t.time}</p>
                                                            <h4 className="title">{t.title}</h4>
                                                            <p className="location">
                                                                <a href={t.locationUrl} target="_blank">{t.locationTitle}</a>
                                                            </p>
                                                            <p className="description">{t.description}</p>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="schedule-event-section">
                                                            {console.log(d.timeBlocks.length)}
                                                            <p className="time">{t.time}</p>
                                                            <h4 className="title">{t.title}</h4>
                                                            <p className="description">{t.description}</p>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })}

                        {/* <div className="col-md-4">
                            <div className="col schedule">
                                <h4 className="date">Saturday - 9/14</h4>

                                <div className="schedule-event-section">
                                    <p className="time">8:00am</p>
                                    <h4 className="title">Participant Registration</h4>
                                    <p className="location"><a href="https://goo.gl/maps/KbKPQCbYYQf2FUbDA"
                                        target="_blank">@BCIT Downtown Campus</a></p>
                                    <p className="description">
                                        Each participant will check-in at the entrance. Information on how to set up and
                                        make themselves at home will be provided.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">9:00am</p>
                                    <h4 className="title">Opening Ceremony & QA Session</h4>
                                    <p className="description">
                                        Participants will be informed of the challenges for the hackathon, available APIs to
                                        work with, what kind of applications they are expected to realize, sponsors, judges,
                                        judging criteria, mentors, rules and any other information.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">10:00am</p>
                                    <h4 className="title">Start Hacking</h4>
                                    <p className="description">
                                        The challenge begins! Vanhacks will come around and register teams and their chosen
                                        challenge. Mentors will be available throughout most of the hackathon to lend advice
                                        on how to tackle problems.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">1:00pm</p>
                                    <h4 className="title">Lunch</h4>
                                    <p className="description">
                                        Lunch will be served between 1:00 PM and 2:30 PM. Vegetarian, vegan and gluten-free
                                        options available for those who request it.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">7:00pm</p>
                                    <h4 className="title">Dinner</h4>
                                    <p className="description">
                                        Dinner is served between 7:00 PM and 8:00 PM. Vegetarian, vegan and gluten-free
                                        options available for those who request it.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="col schedule">
                                <h4 className="date">Sunday - 9/15</h4>

                                <div className="schedule-event-section">
                                    <p className="time">8:00am</p>
                                    <h4 className="title">Breakfast</h4>
                                    <p className="description">
                                        Breakfast will be served between 8:00 AM and 9:30 AM. Vegetarian, vegan and
                                        gluten-free options available for those who request it.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">12:00pm</p>
                                    <h4 className="title">Lunch</h4>
                                    <p className="description">
                                        Lunch is served between 12:00 PM and 1:30 PM. Vegetarian, vegan and gluten-free
                                        options available for those who request it.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">2:00pm</p>
                                    <h4 className="title">Demos to Judges Begin</h4>
                                    <p className="description">
                                        With around 20 teams participating, each demo will be limited to 3 minutes.
                                </p>
                                </div>

                                <div className="schedule-event-section">
                                    <p className="time">5:00pm</p>
                                    <h4 className="title">Closing Ceremony</h4>
                                    <p className="description">
                                        Winners are announced and presented with prizes: Prizes to be determined.
                                </p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
}