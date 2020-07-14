export default function Contact() {
    return (
        <section id="contact">
            <div className="container ">
                <div>
                    <div className="row">
                        <div className="text-center">
                            <h2 className="contact-us-section-header">Contact Us</h2>
                        </div>
                        <a className="button-yellow contact-email-button" href="mailto:chris@ttt.studio" target="_blank" rel="noopener noreferrer">
                            Send us an email
                        </a>

                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <div className="col-xs-4" />
                            <div className="col-xs-4 contact-icon-container">
                                <a href="https://www.facebook.com/TTTStudios">
                                    <img src="img/fb-logo.png" className="contact-icon" alt="Link to TTT Studios Facebook" />
                                </a>
                                <a href="https://twitter.com/TTT_Studios">
                                    <img src="img/twitter-logo.png" className="contact-icon" alt="Link to TTT Studios Twitter" />
                                </a>
                            </div>
                            <div className="col-xs-4" />
                        </div>
                    </div>
                    <div className="row copyright-container">
                        <div className="copyright">{`Copyright © VanHacks ${new Date().getFullYear()}`}</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
