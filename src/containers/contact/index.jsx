import React from "react";

import ContactForm from "../../components/contact-form";
import ContactInfo from "../../components/contact-info";
import ContactData from "../../data/contact.json";

const ContactContainer = () => {
    return (
        <section className="contact-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-6 col-lg-6 mb-7">
                        <div className="contact-title-section">
                            <h3 className="title">Contactez-nous</h3>
                            <p>
                                Nous sommes là pour vous aider et répondre à
                                toutes vos questions, préoccupations ou
                                commentaires. Votre opinion compte pour nous.
                                {/* <br className="d-none d-xl-block" />
                                consequences interesting who loves or pursue or
                                desires */}
                            </p>
                        </div>

                        <ContactForm />
                    </div>

                    <div className="col-xl-5 col-lg-6 mb-7 offset-xl-1">
                        <div className="contact-address text-center">
                            {ContactData &&
                                ContactData.map((single, key) => {
                                    return (
                                        <ContactInfo key={key} data={single} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;
