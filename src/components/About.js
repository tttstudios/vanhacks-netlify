export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="section-heading vanhacks-heading">About VanHacks</h2>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: '50px' }}>
                    <div className="col-md-6">
                        <div className="about-text about-text-left">
                            VanHacks is an annual hackathon organized by TTT Studios around
                            VSW dedicated to helping those helping our community. We call
                            you, hackers of Vancouver, to join us over a weekend to
                            create tech solutions that solve challenging issues faced by
                            our community's not-for-profit institutions whose aim is to do
                            social good. With your help, we can work towards building a
                            better, more unified Vancouver.
                            VanHacks is designed around the mantra of acting local and
                            thinking global. All hacks are encouraged to be published
                            open source so that an organization in Vancouver can benefit
                            just as much as a similar nonprofit on the other side of
                            Canada or the other side of the World.
                        </div>
                        <div className="about-text about-text-mobile">
                            VanHacks is an annual hackathon organized by TTT Studios and
                            VSW dedicated to helping those helping our community. We call
                            you, hackers of Vancouver, to join us over a weekend to
                            create tech solutions that solve challenging issues faced by
                            our community's not-for-profit institutions whose aim is to do
                            social good. With your help, we can work towards building a
                            better, more unified Vancouver.

                            VanHacks is designed around the mantra of acting local and
                            thinking global. All hacks are encouraged to be published
                            open source so that an organization in Vancouver can benefit
                            just as much as a similar nonprofit on the other side of
                            Canada or the other side of the World.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="img/about/photo@2x.png" className="about-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}