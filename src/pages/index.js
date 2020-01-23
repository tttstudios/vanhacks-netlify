import Head from 'next/head';
import { Component } from 'react';
import { attributes, react as HomeContent } from './index.md';
import Header from '../components/Header';
import TicketPurchase from '../components/TicketPurchase';
import Collaborators from '../components/Collaborators';
import Layout from '../components/Layout';
import About from '../components/About';
import Groups from '../components/Groups';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';
import Judges from '../components/Judges';
import Hosts from '../components/Hosts';
import Mentors from '../components/Mentors';
import Info from '../components/Info';
import Contact from '../components/Contact';

import '../components/css/bootstrap.min.css';
import '../components/css/agency.css';
import '../components/css/animate.min.css';

export default class Home extends Component {
    render() {
        const {
            facebook,
            twitter,
            header,
            collaborators,
            about,
            groups,
            schedule,
            sponsors,
            judges,
            hosts,
            mentors,
            info
        } = attributes;
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description"
                        content="A hackathon to help improve Vancouver's community by solving problems for organizations that do social good." />
                    <meta name="author" content="VanHacks" />

                    <link rel="manifest" href="../manifest.json" />

                    <link rel="icon" type="image/x-icon" href="../favicon.ico?v=4" />
                    <link rel="mask-icon" href="../favicon_96px.svg?v=2" color="#5bbad5" />

                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />

                    <title>VanHacks 2019 - Vancouver's Hackathon for Social Good</title>

                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap" rel="stylesheet" type="text/css" />
                    <link href="http://cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />

                    {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
            WARNING: Respond.js doesn't work if you view the page via file://
            [if lt IE 9] */}
                    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" />
                    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" />
                    {/* <![endif]  */}
                    <meta name="title" property="og:title" content={facebook.ogTitle} />
                    <meta name="image" property="og:image" content={facebook.ogImage} />

                    <meta name="twitter:card" content={twitter.card} />
                    <meta name="twitter:description" content={twitter.description} />
                    <meta name="twitter:title" content={twitter.title} />
                    <meta name="twitter:site" content="@TTT_Studios" />
                    <meta name="twitter:image" content={twitter.image} />
                    <meta name="twitter:creator" content="@TTT_Studios" />

                    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
                </Head>

                <body id="page-top" className="index">
                    <HomeContent />
                    <Layout>
                        <Header data={header} />

                        <TicketPurchase />

                        <Collaborators data={collaborators} />

                        <About data={about} />
                        <div className="section-divider" />

                        <Groups data={groups} />
                        <div className="section-divider" />

                        <Schedule data={schedule} />
                        <div className="section-divider" />

                        <Sponsors data={sponsors} />
                        <div className="section-divider" />

                        <Judges data={judges} />
                        <div className="section-divider" />

                        <Hosts data={hosts} />
                        <div className="section-divider" />

                        <Mentors />
                        <div className="section-divider" />

                        <Info data={info} />
                        <div className="section-divider" />

                        <Contact />
                    </Layout>

                    <script src="/js/jquery.js" />

                    {/* <!-- Bootstrap Core JavaScript --> */}
                    <script src="/js/bootstrap.min.js" />

                    {/* <!-- Contact Form JavaScript --> */}
                    <script src="/js/contact_me.js" />

                    {/* <!-- Index.js file--> */}
                    <script src="/js/index.js" />

                    {/* <!-- Custom Theme JavaScript --> */}
                    <script src="/js/agency.js" />
                </body>
            </>
        );
    }
}
