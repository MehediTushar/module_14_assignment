import React from 'react';
import Layout from '../Layout/Layout.jsx';
import Footer from '../Components/Footer.jsx';
import Subscribe from '../Components/subscribe.jsx';
import Project from '../Components/Project.jsx';

const ProjectPage = () => {
    return (
        <Layout>
        <Project/>
        <Subscribe/>
        <Footer/>
    </Layout>
    );
};

export default ProjectPage;