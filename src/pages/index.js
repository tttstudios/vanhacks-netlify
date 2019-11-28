import Link from 'next/link';
import Head from 'next/head';
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
import '../components/font-awesome/css/font-awesome.min.css';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const IndexPage = () => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description"
                content="A hackathon to help improve Vancouver's community by solving problems for organizations that do social good." />
            <meta name="author" content="VanHacks" />

            <link rel="manifest" href="/manifest.json" />

            <link rel="icon" type="image/x-icon" href="favicon.ico?v=4" />
            <link rel="mask-icon" href="/favicon_96px.svg?v=2" color="#5bbad5" />

            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <title>VanHacks 2019 - Vancouver's Hackathon for Social Good</title>

            {/* Bootstrap Core CSS */}
            {/* <link href="./css/bootstrap.min.css" rel="stylesheet" /> */}

            {/* Custom CSS */}
            {/* <link href="./css/agency.css?v=1.0.20" rel="stylesheet" /> */}

            {/* Plugin CSS */}
            {/* <link rel="stylesheet" href="./css/animate.min.css" type="text/css" /> */}

            {/* Custom Fonts */}
            {/* <link href="./font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" /> */}
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap" rel="stylesheet" type='text/css' />
            <link href="http://cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />

            {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries 
            WARNING: Respond.js doesn't work if you view the page via file:// 
            [if lt IE 9] */}
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
            {/* <![endif]  */}
            <meta name="title" property="og:title" content="VanHacks 2019 - Vancouver's Hackathon for Social Good" />
            <meta name="image" property="og:image" content="http://www.vanhacks.com/img/social_banner_8%402x.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description"
                content="A hackathon to help improve Vancouver's community by solving problems for organizations that do social good." />
            <meta name="twitter:title" content="VanHacks 2019 - Vancouver's Hackathon for Social Good" />
            <meta name="twitter:site" content="@TTT_Studios" />
            <meta name="twitter:image" content="http://www.vanhacks.com/img/social_banner_8%402x.png" />
            <meta name="twitter:creator" content="@TTT_Studios" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
            <Layout>
                <div className="container">
                    <p className="about-subheader-for-images">
                        Hacking and caring with
                </p>
                    <div className="row">
                        <div className="text-center">
                            <a href="http://vanstartupweek.ca/" target="_blank"><img className="img-sponsor-small about-img-left"
                                src="img/logos/VSW_logo.jpg" alt="VSW Logo" /></a>
                            <a href="https://ttt.studio" target="_blank"><img className="img-sponsor-small about-img-right"
                                src="img/logos/ttt-logo.png" alt="ViDIA Logo" /></a>
                        </div>
                    </div>
                </div>
                <About />
                <div className='section-divider'></div>

                <Groups />
                <div className='section-divider'></div>

                <Schedule />
                <div className='section-divider'></div>

                <Sponsors />
                <div className='section-divider'></div>

                <Judges />
                <div className='section-divider'></div>

                <Hosts />
                <div className='section-divider'></div>

                <Mentors />
                <div className='section-divider'></div>

                <Info />
                <div className='section-divider'></div>

                <Contact />
            </Layout>
        </article>
    </>
);

export default IndexPage