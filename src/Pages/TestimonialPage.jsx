import React from 'react';
import Layout from '../Layout/Layout.jsx';
import Footer from '../Components/Footer.jsx';
import Subscribe from '../Components/subscribe.jsx';
import Testimonial from '../Components/Testimonial.jsx';

const TestimonialPage = () => {
    return (
        <Layout>
        <Testimonial/>
        <Subscribe/>
        <Footer/>
    </Layout>
    );
};

export default TestimonialPage;