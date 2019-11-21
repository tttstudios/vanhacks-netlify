import Head from 'next/head';
import Header from './Header';
import Navbar from './Navbar';

import './css/bootstrap.min.css';
import './css/agency.css';
import './css/animate.min.css';
// import './font-awesome/css/font-awesome.min.css';

const Layout = props => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description"
                content="A hackathon to help improve Vancouver's community by solving problems for organizations that do social good." />
            <meta name="author" content="VanHacks" />

            <link rel="manifest" href="/manifest.json" />

            <link rel="icon" type="image/x-icon" href="favicon.ico?v=4" />
            {/* <link rel="mask-icon" href="/favicon_96px.svg?v=2" color="#5bbad5"> */}

            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <title>VanHacks 2019 - Vancouver's Hackathon for Social Good</title>

            {/* Bootstrap Core CSS */}
            <link href="css/bootstrap.min.css" rel="stylesheet" />

            {/* Custom CSS */}
            <link href="css/agency.css?v=1.0.20" rel="stylesheet" />

            {/* Plugin CSS */}
            <link rel="stylesheet" href="css/animate.min.css" type="text/css" />

            {/* Custom Fonts */}
            <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
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

        </Head>

        <Navbar />

        <Header />

        {props.children}

    </div>
);

export default Layout;
