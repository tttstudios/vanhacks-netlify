export default function Sponsors({ data }) {
    return (
        <section id="sponsors">
            <div className="container">

                {/* <!-- Founding Sponsors --> */}
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">{data.title}</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-3 section-subheading-founding-sponsor">Founding Sponsors</div>
                        {data.foundingSponsors.map((s, index) => {
                            return (
                                <div key={index} className="col-md-4 sponsor-small">
                                    <a href={s.url} target="_blank">
                                        <img className="img-sponsor-small img-responsive" src={s.sponsor}
                                            alt={s.alt} />
                                    </a>
                                    <p className="text-sponsor-small">
                                        {s.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-subheading-sponsors">Event Sponsors
                        </div>
                            <div className="container" stly="true">
                                <div className="row gold-row d-flex wrap jc-center">

                                    {data.eventSponsors.map((s, index) => {
                                        if (s.tier == 1) {
                                            return (
                                                <div key={index} className="col-xs-12 col-sm-4 col-md-4">
                                                    <a href={s.url} target="_blank">
                                                        <img className="img-centered img-community-sponsor img-responsive"
                                                            src={s.sponsor}
                                                            alt={s.alt} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="row d-flex wrap jc-center align-center">
                                    {data.eventSponsors.map((s, index) => {
                                        if (s.tier == 2) {
                                            return (
                                                <div key={index} className="col-xs-6 col-sm-3">
                                                    <a href={s.url} target="_blank">
                                                        <img className="img-centered img-responsive silver-sponsor"
                                                            src={s.sponsor}
                                                            alt={s.alt} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                <div className="row d-flex wrap jc-center align-center">
                                    {data.eventSponsors.map((s, index) => {
                                        if (s.tier == 3) {
                                            return (
                                                <div key={index} className="col-xs-4 col-sm-2">
                                                    <a href={s.url} target="_blank">
                                                        <img className="img-centered img-responsive bronze-sponsor-large"
                                                            src={s.sponsor}
                                                            alt={s.alt} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <p className="text-sponsor-small text-center sponsors-details">
                            {data.description}
                        </p>

                        <a href="VanHacks_Sponsorship_2019.pdf" download="vanhacks_2019_sponsorship_package">
                            <div className="button-yellow sponsorship-download-package-button">{data.buttonTitle}
                            </div>
                        </a>
                    </div>



                    {/* <!-- Sponsor row with 5 images
                <div className="row" style="margin-top: 60px;">
                    <div class="col-xs-4 col-sm-push-1 col-sm-2">
                        <a href="https://nuitnutrition.ca/" target="_blank"><img class="img-centered  img-responsive inkind-sponsor" src="img/sponsors/InKind_NuIT.png" alt="nuit logo"/></a>
                    </div>
                    <div class="col-xs-4 col-sm-push-1 col-sm-2">
                        <a href="https://www.cartems.com/" target="_blank"><img class="img-centered img-responsive inkind-sponsor" src="img/sponsors/inkind_cartems.png" alt="cartems logo"/></a>
                    </div>
                    <div class="col-xs-4 col-sm-push-1 col-sm-2">
                        <a href="https://www.route18shrubclub.com/" target="_blank"><img style="max-height: 110px;" class="img-centered  img-responsive" src="img/sponsors/InKind_Route18.png" alt="route 18 logo"/></a>
                    </div>

                    <div class="col-xs-push-2 col-sm-push-1 col-xs-4 col-sm-2">
                        <a href="https://guayaki.com/" target="_blank"><img style="padding-top: 30px;" class="img-centered  img-responsive inkind-sponsor" src="img/sponsors/InKind_guayaki.png" alt="guayaki logo"/></a>
                    </div>
                    <div class="col-xs-push-2 col-sm-push-1 col-xs-4 col-sm-2">
                        <a href="http://aquabluewater.ca/" target="_blank"><img style="padding-top: 15px;" class="img-centered  img-responsive inkind-sponsor" src="img/sponsors/InKind_aquablue.jpg" alt="aqua blue logo"/></a>
                    </div>
                </div>
            --> */}

                    {/* <!--
				<div class="sponsorship-button-container">
					<center>
						<div class="sponsorship-text">Interested in being a sponsor?</div>
						<a href="VanHacks-Sponsorship_press.pdf" target="_blank"><div class="button-blue sponsorship-learn-more">Learn More</div></a>
					</center>
                </div>
            -->
            </div> */}




                    {/* <!-- backed up sponsors from last year */}
                    {/* <div class="row">
            <div class="col-md-4">
                <a href="http://microsoft.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/microsoft-logo.png" alt="Microsoft Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="https://www.lighthouselabs.ca" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/lighthouse-labs-logo.png" alt="Lighthouse Labs Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.vancouvereconomic.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/vec-logo.png" alt="Vancouver Economic Commission Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.bcitsa.ca/careerservices" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/bcitsa-logo.png" alt="BCITSA Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.twotalltotems.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/ttt-logo.png" alt="Two Tall Totems Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.wavefrontac.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/wavefront-logo.png" alt="Wavefront Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.mobify.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/mobify-logo.png" alt="Mobify Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="https://www.nakedsnacks.ca" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/nakedsnacks-logo.png" alt="Naked Snacks Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.dynamic-leap.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/dynamicleap-logo.png" alt="Dynamic Leap Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://radical.io" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/radicalio-logo.png" alt="radical.io Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.buddybuild.com" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/buddybuild-logo.png" alt="buddybuild Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.axiomzen.co" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/axiomzen-logo.png" alt="AxiomZen Logo"></a>
            </div>
            <div class="col-md-4">
                <a href="http://www.gov.bc.ca" target="_blank"><img class="img-centered img-community-sponsor img-responsive" src="img/logos/bcgov-logo.png" alt="BC Government Logo"></a>
            </div>
        </div> */}

                    {/* End backed up sponsors from last year --> */}
                </div>
            </div>
        </section>
    );
}