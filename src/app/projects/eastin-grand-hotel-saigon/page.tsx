"use client"
import React, { useEffect, useRef } from 'react';
import './page.css'
import Navbar from '@/app/components/Layout/Navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Image_1 from '@/assets/images/eastin-grand/1.jpg'
import Image_2 from '@/assets/images/eastin-grand/2.jpg'
import Image_3 from '@/assets/images/eastin-grand/3.jpg'
import Image_4 from '@/assets/images/eastin-grand/4.jpg'
import Image_5 from '@/assets/images/eastin-grand/5.jpg'
import Image_6 from '@/assets/images/eastin-grand/6.jpg'
import Footer from '@/app/components/Layout/Footer/Footer';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page = () => {

    useGSAP(
        () => {
            let sections = gsap.utils.toArray(".slide");
            gsap.to(sections, {
                xPercent: -86 * (sections.length - 1),
                scrollTrigger: {
                    trigger: ".horizontal-sliders",
                    pin: ".main",
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=2000",
                }
            });
        },
    )

    return (
        <main className="main">
            <div className="horizontal-sliders">
                <section className="slide section-project-hero">
                    <div className='project-hero-inner'>
                        <div>
                            <div className='margin-bottom margin-medium'>
                                <Navbar className='muted' />
                            </div>
                            <div className='max-width-medium py-5'>
                                <h1 className="text-[60px] mt-10 font-medium">Eastin Gand Hotel Saigon</h1>
                            </div>
                        </div>
                        <div>
                            <div className='margin-bottom margin-medium'>
                                <div className='max-width-medium'>
                                    Thiết kế, thi công và cải tạo nội thất khách sạn 5 sao Eastin Grand Hotel Saigon
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="slide section-project-about">
                    <div className='project-about-image-wrapper'>
                        <div className='project-about-card'>
                            <div>
                                <div className='margin-bottom margin-xxsmall'>
                                    <div className="text-meta text-color-muted">Địa điểm</div>
                                </div>
                                <div className="text-size-small">Phú Nhuận, TP HCM</div>
                            </div>
                            <div className="line-vertical hide-mobile-portrait"></div>
                            <div>
                                <div className="margin-bottom margin-xxsmall">
                                    <div className="text-meta text-color-muted">Hoàn thành</div>
                                </div>
                                <div className="text-size-small">2023</div>
                            </div>
                            <div className="line-vertical hide-mobile-portrait"></div>
                            <div>
                                <div className="margin-bottom margin-xxsmall">
                                    <div className="text-meta text-color-muted">Quá trình</div>
                                </div>
                                <div className="text-size-small">2 năm</div>
                            </div>
                            <div className="card-sticky-corner-top-right top hide-mobile-landscape w-embed">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="card-sticky-corner-top-right bottom hide-mobile-landscape w-embed">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <Image src={Image_1} alt='' className='image-cover'></Image>
                    </div>
                </section>
                <section className="slide section-project-about">
                    <div className='project-about-image-wrapper'>
                        <Image src={Image_2} alt='' className='image-cover'></Image>
                    </div>
                </section>
                <section className="slide section-project-about">
                    <div className='project-about-image-wrapper'>
                        <Image src={Image_3} alt='' className='image-cover object-bottom'></Image>
                    </div>
                </section>
                <section className="slide section-project-about">
                    <div className='project-about-image-wrapper'>
                        <Image src={Image_4} alt='' className='image-cover'></Image>
                    </div>
                </section>
                <section className="slide section-project-about">
                    <div className='project-about-image-wrapper'>
                        <Image src={Image_5} alt='' className='image-cover'></Image>
                    </div>
                </section>
                <section className="slide section-project-about">
                    <div className='project-about-image-wrapper'>
                        <Image src={Image_6} alt='' className='image-cover'></Image>
                    </div>
                </section>
                <section className="slide section-project-about">          
                    <div className='project-about-image-wrapper'>
                        <Footer className='!mt-0'/>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Page;