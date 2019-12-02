export default function Mentors() {
    return (
        <section id="mentors">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-5">
                        <h2 className="mentors-title">Mentors</h2>
                        <p className="mentor">Interested in mentoring? Sign up by filling out this
                            form.
                    </p>
                    </div>
                    <div className="col-md-7">
                        <form
                            action="https://vanhacks.us12.list-manage.com/subscribe/post?u=5907e3e94aaabdaf3a29b7f4c&amp;id=bf87b78c48"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                            target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <div className="mc-field-group">
                                    <input type="text" defaultValue="" name="FNAME" className="required mentor-form-input"
                                        id="mce-FNAME" placeholder="First Name" required />
                                </div>
                                <div className="mc-field-group">
                                    <input type="text" defaultValue="" name="LNAME" className="required mentor-form-input"
                                        id="mce-LNAME" placeholder="Last Name" required />
                                </div>
                                <div className="mc-field-group">
                                    <input type="email" defaultValue="" name="EMAIL" className="required mentor-form-input"
                                        id="mce-EMAIL" placeholder="Email Address" required />
                                </div>
                                <div className="mc-field-group">
                                    <input type="text" defaultValue="" name="EXPERTISE" className="required mentor-form-input"
                                        id="mce-EXPERTISE" placeholder="Area of Expertise" required />
                                </div>
                                <div style={{ display: 'none' }} className="mc-field-group input-group">
                                    <strong>Mentor?</strong>
                                    <ul>
                                        <li>
                                            <input type="checkbox" defaultValue="1" name="group[24713][1]"
                                                id="mce-group[24713]-24713-0" checked />
                                            <label htmlFor="mce-group[24713]-24713-0">mentor</label>
                                        </li>
                                    </ul>
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                                </div>
                                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text"
                                    name="b_5907e3e94aaabdaf3a29b7f4c_bf87b78c48" tabIndex="-1" value="" /></div>
                                <div className="clear"><input type="submit" value="Sign up" name="signup"
                                    id="mc-embedded-subscribe" className="button-yellow contact-email-button"
                                    style={{ border: 'none' }} /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}