import React from 'react';
import Layout from '../Layout/Layout.jsx';
import TeamDetail from "../Components/TeamDetail.jsx";
import Footer from '../Components/Footer.jsx';
import Subscribe from '../Components/subscribe.jsx';

const TeamPage = () => {
    return (
        <Layout>
            <TeamDetail/>
            <Subscribe/>
            <Footer/>
        </Layout>
    );
};

export default TeamPage;