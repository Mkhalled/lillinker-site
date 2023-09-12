import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lillinker – Contact" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Contactez-nous"
                        excerpt="Besoin d'aide ou d'informations ? N'hésitez pas à nous contacter.
                        Notre équipe est là pour répondre à toutes vos questions."
                        image="./images/contact/1.png"
                    />
                    <ContactContainer />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
