import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        console.log("inside aboutr");

        return (
            <div>
                <Helmet>
                    <title>About Page from Helmet</title>
                    <meta name="description" content="This is about page!" />
                    <meta name="title" content="Helmet Title About | Join your friends in a social platform for friendly competition. Challenge and vote today!" />
                    <meta property="og:title" content="Helmet Title About | Join your friends in a social platform for friendly competition. Challenge and vote today!" />
                </Helmet>
                <Link to="/">Home</Link>
                <h1>Inside About</h1>
            </div>

        )
    }
}

export default About;
