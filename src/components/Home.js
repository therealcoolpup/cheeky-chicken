import React, { Fragment } from 'react';
import Nav from './Nav';
import logo from "../imgs/tabicon.png";

function Home() {
    return (

        <Fragment>
            {<Nav />}
            <div id="home">
                <main>
                    <h1>
                        Welcome to Cheeky Chicken
                    </h1>
                    <img src={logo} alt="logo" />
                    <h2>
                        The best chicken and chips in Geelong.
                    </h2>
                    <h4>
                    <br />
                        Located in Westfield Geelong, 
                        <br />
                        Level 1, Food Court 
                        <br />
                        95 Malop St, Geelong VIC 3220
                        <br />
                        Tel: 1300 657 866
                    </h4>
                </main>        
            </div>
            
        </Fragment>

        
    )
}

export default Home
