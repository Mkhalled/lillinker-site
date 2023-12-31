import { useEffect, useRef } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Parallax from "parallax-js";

const HomeAboutContainer = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="À propos de nous"
                                title="Votre Boussole <span class='text-primary'>
                                    pour</span>  
                                <br className='d-none d-xl-block' />
                             le Portage Parfait."
                            />
                            <span className="date-meta">
                                Depuis 2023 <span className="hr"></span>
                            </span>
                            <p className="mb-5">
                                Lillinker, votre partenaire dévoué pour
                                simplifier le processus complexe de sélection
                                d&apos;une société de portage en tant que
                                freelance. En tant qu&apos;équipe de passionnés
                                du numérique et du développement, nous avons
                                créé Lillinker pour répondre aux besoins
                                spécifiques des freelances comme vous, en
                                cherchant à résoudre les défis majeurs qui se
                                posent lors du choix d&apos;une société de
                                portage.
                            </p>
                            <p className="high-light mb-8">
                                Rejoignez-nous, façonnez l&apos;avenir du
                                portage salarial ensemble !
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="En savoir plus"
                                path="/about"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 order-first order-lg-last col-lg-6 mb-7 offset-xl-1">
                        <div
                            className="about-photo scene text-center text-lg-left"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/about/1.png`}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="about-shape"
                src={`${process.env.PUBLIC_URL}/images/about/shape.png`}
                alt="bg-shape"
            />
        </div>
    );
};

export default HomeAboutContainer;
