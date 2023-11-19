import React from 'react';
import Layout from '../Layout/Layout.jsx';
import Footer from '../Components/Footer.jsx';
import RegistrationDetails from '../Components/RegistrationDetails.jsx';

const RegisterPage = () => {
    return (
        <Layout>
        <RegistrationDetails/>
        <Footer/>
    </Layout>
    );
};

export default RegisterPage;