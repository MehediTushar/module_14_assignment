import React, {useEffect, useState}  from 'react';
import Layout from '../Layout/Layout.jsx';
import HomeDetail from "../Components/HomeDetail.jsx";
import Footer from "../Components/Footer.jsx";
import Subscribe from '../Components/subscribe.jsx';

const HomePage = () => {
    let [list]=useState(null);
    return (
        <Layout>             
              <HomeDetail/>
                <Subscribe/>
              <Footer/>
        </Layout>
    );
};

export default HomePage;