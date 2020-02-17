import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home Page From Helmet</title>
                    <meta name="description" content="Home Page from Helmet!" />
                    <meta name="theme-color" content="#008f68" />
                    <meta name="title" content="Helmet Title Home | Join your friends in a social platform for friendly competition. Challenge and vote today!" />
                    <meta property="og:title" content="Helmet Title Home | Join your friends in a social platform for friendly competition. Challenge and vote today!" />
                </Helmet>
                <Link to="/about">About</Link>
                <h1>Inside Home</h1>
            </div>

        )
    }
}

export default Home;
