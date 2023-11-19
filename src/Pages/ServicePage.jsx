import React from 'react';
import Layout from '../Layout/Layout.jsx';
import Footer from '../Components/Footer.jsx';
import Subscribe from '../Components/subscribe.jsx';
import Service from '../Components/Service.jsx';

const ServicePage = () => {
    return (
        <Layout>
        <Service/>
        <Subscribe/>
        <Footer/>
    </Layout>
    );
};

export default ServicePage;