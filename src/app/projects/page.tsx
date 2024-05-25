"use client"
import React from 'react';
import Navbar from '../components/Layout/Navbar/Navbar';
import './project.css'
import Image_1 from '@/assets/images/1.jpg'
import Image_2 from '@/assets/images/the-678-building/1.jpg'
import Image_3 from '@/assets/images/the-grace-tower/1.jpg'
import Image_4 from '@/assets/images/condotel/1.jpg'
import Image_5 from '@/assets/images/san-khau-kich-hong-van/1.jpg'
import Image_6 from '@/assets/images/dinh-thu-phu-cuong/1.jpg'
import Image_7 from '@/assets/images/dinh-thu-phu-an/1.jpg'

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const Page = () => {
    
    const route = useRouter()
    const handleLink = (link:string) => {
        route.push(link)
    }

    return (
        <main className='main-wrapper-vertical p-[3rem]'>
            <div className='header-vertical flex justify-center'>
                <Navbar className="muted" />
            </div>
            <section className='section-about-vertical-hero text-center'>
                <div className='p-[6rem]'>
                    <div>
                        <h1 className='text-[3.75rem] uppercase font-semibold'>Một số dự án của chúng tôi</h1>
                    </div>
                    <div className='w-full max-w-[40rem] m-auto'>
                        <p className='text-[16px]'>
                            Các dự án của chúng tôi định nghĩa lại cuộc sống hiện đại thông qua thiết kế bền vững, thể hiện sự kết hợp hài hòa giữa kiến ​​trúc, sự đổi mới và trách nhiệm.
                        </p>
                    </div>
                </div>
            </section>
            <section className='container m-auto'>
                <div className='projects-vertical-projects'>
                    <div className='projects-vertical-projects-list w-dyn-items'>
                        <div className='project-list-right'>
                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                {/* <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>Eastin Grand Hotel Saigon</h2>
                                </div> */}
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_1} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                <h2 className='heading-style-large text-style-allcaps'>Eastin Grand Hotel Saigon</h2>
                                </div>
                                <Link href={"projects/eastin-grand-hotel-saigon"} className='button-icon w-full mt-4 '>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                <div className='project-vertical-preview-content'>
                                    {/* <h2 className='heading-style-large text-style-allcaps'>The 678 Building</h2> */}
                                </div>
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_2} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <h2 className='heading-style-large text-style-allcaps'>The 678 Building</h2>
                                </div>
                                <Link href={"projects/the-678-building"} className='button-icon w-full mt-4'>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                {/* <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>The Grace Tower</h2>
                                </div> */}
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_3} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <h2 className='heading-style-large text-style-allcaps'>The Grace Tower</h2>
                                </div>
                                <Link href={"projects/the-grace-tower"} className='button-icon w-full mt-4'>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                {/* <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>The Grace Tower</h2>
                                </div> */}
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_4} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <h2 className='heading-style-large text-style-allcaps'>Apec Mandala Wyndham Mũi Né</h2>
                                </div>
                                <Link href={"projects/apec-mandala-wyndham-mui-ne"} className='button-icon w-full mt-4'>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='project-list-left'>
                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                {/* <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>The Grace Tower</h2>
                                </div> */}
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_5} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <h2 className='heading-style-large text-style-allcaps'>Sân Khấu Kịch NSND Hồng Vân</h2>
                                </div>
                                <Link href={"projects/san-khau-kich-hong-van"} className='button-icon w-full mt-4'>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                {/* <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>The Grace Tower</h2>
                                </div> */}
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_6} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <h2 className='heading-style-large text-style-allcaps'>Dinh Thự Phú Cường</h2>
                                </div>
                                <Link href={"projects/dinh-thu-phu-cuong"} className='button-icon w-full mt-4'>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                {/* <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>The Grace Tower</h2>
                                </div> */}
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_7} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <h2 className='heading-style-large text-style-allcaps'>Dinh Thự Phú An</h2>
                                </div>
                                <Link href={"projects/dinh-thu-phu-an"} className='button-icon w-full mt-4'>
                                    <div className='button-icon-inner'>
                                        <div className='button-icon-text underline'>Xem dự án</div>
                                        <div className='button-icon-badge'> <FaArrowRight /></div>
                                    </div>
                                </Link>
                                <div className='card-sticky-corner-top-left bottom hide-tablet w-embed'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="card-sticky-corner-top-left top hide-tablet w-embed">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Page;