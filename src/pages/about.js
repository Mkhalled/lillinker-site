import React from "react";
import PropTypes from "prop-types";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import AboutData from "../data/about.json";
import ServiceDetailsContainer from "../containers/service/service-details";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutDetailsContainer from "../containers/home/about/about-details";

const AboutPage = () => {
    const data = AboutData;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lillinker – Service Details" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={data?.title}
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="/images/about/1.png"
                    />
                    <AboutDetailsContainer data={data} />

                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

// AboutPage.propTypes = {
//     match: PropTypes.shape({
//         params: PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//         }),
//     }),
// };

export default AboutPage;
