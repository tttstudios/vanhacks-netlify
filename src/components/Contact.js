export default function Contact() {
    return (
        <section id="contact">
            <div className="container ">
                <div>
                    <div className="row">
                        <div className="text-center">
                            <h2 className="contact-us-section-header">Contact Us</h2>
                        </div>
                        <a href="mailto:chris@ttt.studio">
                            <div className="button-yellow contact-email-button">Send us an email</div>
                        </a>

                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <div className="col-xs-4">

                            </div>
                            <div className="col-xs-4 contact-icon-container">
                                <a href="https://www.facebook.com/TTTStudios"><img src="img/fb-logo.png"
                                    className="contact-icon" /></a>
                                <a href="https://twitter.com/TTT_Studios"><img src="img/twitter-logo.png"
                                    className="contact-icon" /></a>
                            </div>
                            <div className="col-xs-4">

                            </div>
                        </div>
                    </div>

                    <div className="row copyright-container">
                        <div className="copyright">Copyright &copy; VanHacks 2019</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
