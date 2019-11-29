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
                                        <div className="row">
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
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">Do I need to be a developer to attend?</h4>
                                    <p className="rules">
                                        To be a participant you need to be either a developer or a UI/UX designer.
                                </p>
                                </div>

                                <div className="col-md-6">
                                    <h4 className="rules">Do I need a team to register?</h4>
                                    <p className="rules">
                                        No you don't need to be part of a team to register. We will be hosting a Friday
                                        night social at
                                    <a href="https://goo.gl/maps/DC3VfMgern9Vxq3h8" target="_blank">TTT Studios</a>
                                        where team-less participants must attend to meet and
                                        form teams. On Saturday morning at 8:00 AM, we will officially register all the
                                        teams.
                                </p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">What should I bring?</h4>
                                    <p className="rules">
                                        Generally, you’ll need to bring your computer, a charger and any other devices that
                                        will contribute to the application's creation. As for food, we have you covered but
                                        if you want anything in particular there is a kitchen to make tea and prepare small
                                        bites.
                                </p>
                                </div>

                                <div className="col-md-6">
                                    <h4 className="rules">
                                        Can I stay the night?
                                </h4>
                                    <p className="rules">
                                        BCIT closes at 10pm so all hackers will be heading home for the night. Doors open at
                                        8am the next morning.
                                </p>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">How does VanHacks work?</h4>
                                    <p className="rules">
                                        Participants spend 28 hours working in teams of 3-5 people to build an application
                                        that will benefit groups from the Vancouver community. It is up to the participants
                                        to take the challenges NPOs are facing and find ways to solve them through the
                                        applications they build over the weekend. In addition, mentors will be present to
                                        guide and advise participants on any difficulties they have when designing or
                                        building their applications. At the end of the 28 hours, each team will demo their
                                        working application to a panel of judges. The judges will then choose the top three
                                        projects.
                                </p>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="rules">
                                        Will there be a resource guide with helpful links to APIs, SDKs and
                                    datasets?</h4>
                                    <div className="rules">
                                        <p className="rules">Yes. Here is the <a
                                            href="Vanhacks Hackathon API and SDK Resources.pdf" target="_blank">VanHacks
                                            API and SDK Resource Guide</a>.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">When is the last day to register for VanHacks?</h4>
                                    <p className="rules">The closing date for registration is 11:59PM on September 12th 2019 or
                                    whenever we reach capacity. Capacity is 125 people.</p>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="rules">How much is it to register?</h4>
                                    <p className="rules">Tickets are $36.50 each until September 5th 2019, after that tickets
                                        will
                                        cost $52.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">What are the judging criteria?</h4>
                                    <p className="rules">At the end of the 28 hours, you should have a working application that
                                        can be demoed in front of the judges. Projects will be judged on how well the
                                        application solves the chosen problem and how well the solution works at demo time.
                                        A list of criteria will be given at the beginning of the hackathon to help keep
                                        hackers on track. Extra points are given to those who agree to open source their
                                    project after the hackathon.</p>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="rules">Will there be prizes?</h4>
                                    <p className="rules">
                                        Yes there will be cash prizes. Amounts to be determined.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">At the end of VanHacks, do we give our projects to the not-for-profit
                                    organisation we choose to hack for?</h4>
                                    <p className="rules">Preferably yes. At the end of the hackathon, you are encouraged to give
                                        a copy to the organization or upload it to a repo, like github, for them to
                                    download.</p>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="rules">How do I find a team?</h4>
                                    <p className="rules">
                                        If you are coming in solo and want to work with others, our Friday social is a great
                                        opportunity to meet other designers and developers and form teams. Our goal is to
                                        have everyone on a team by the end of Friday night so we can quickly register the
                                        teams on Saturday morning.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">Do I have to come Friday?</h4>
                                    <p className="rules">
                                        If you do not have a team. Yes. If you do have a team, the Friday social is the only
                                        optional part of the weekend. The social will allow you to get more familiar with
                                        the not-for-profit organization challenges that need solving. It will also give you
                                        a little more time to discuss ideas and best ways to approach your project so you
                                        are ready to run on Saturday morning.
                                </p>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="rules">Is there an age restriction?</h4>
                                    <p className="rules">
                                        Yes, we only allow participants ages 18+. If you are younger and really want to
                                        participate, contact us.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="rules">I have another question!</h4>
                                    <p className="rules">Send us an email
                                    <a href="mailto:chris@ttt.studio" target="_blank">here.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}