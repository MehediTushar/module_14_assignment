import React from 'react';
import Layout from '../Layout/Layout.jsx';
import Footer from '../Components/Footer.jsx';
import LoginDetails from '../Components/LoginDetails.jsx';

const LoginPage = () => {
    return (
        <Layout>
        <LoginDetails/>
        <Footer/>
    </Layout>
    );
};

export default LoginPage;