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
                </Helmet>
                <Link to="/">Home</Link>
                <h1>Inside About</h1>
            </div>

        )
    }
}

export default About;
