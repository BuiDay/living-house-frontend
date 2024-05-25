import React from 'react';
import Navbar from '../components/Layout/Navbar/Navbar';
import './project.css'
import Image_1 from '@/assets/images/1.jpg'
import Image_2 from '@/assets/images/2.jpg'
import Image_3 from '@/assets/images/3.jpg'
import Image_4 from '@/assets/images/4.jpg'
import Image_5 from '@/assets/images/5.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
const page = () => {
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
                            Các dự án của chúng tôi định nghĩa lại cuộc sống hiện đại thông qua thiết kế bền vững, thể hiện sự kết hợp hài hòa giữa kiến ​​trúc, sự đổi mới và trách nhiệm với môi trường.
                        </p>
                    </div>
                </div>
            </section>
            <section className='container m-auto'>
                <div className='projects-vertical-projects'>
                    <div className='projects-vertical-projects-list w-dyn-items'>
                        <div className='project-vertical-preview w-dyn-item'>
                            <div className='project-vertical-preview-image-wrapper'>
                                <div className='project-vertical-preview-content'>
                                    <h2 className='heading-style-large text-style-allcaps'>Eastin Grand Hotel Saigon</h2>
                                </div>
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_1} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <p className='text-justify'>Khám phá sự yên tĩnh được tưởng tượng lại. "The Escape" hài hòa giữa thiết kế hiện đại với thiên nhiên, tạo nên một nơi nghỉ dưỡng trẻ hóa và đầy cảm hứng.</p>
                                </div>
                                <Link href={""} className='button-icon w-full mt-4'>
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
                                    <h2 className='heading-style-large text-style-allcaps'>The 678 Building</h2>
                                </div>
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_2} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <p className='text-justify'>Khám phá sự yên tĩnh được tưởng tượng lại. "The Escape" hài hòa giữa thiết kế hiện đại với thiên nhiên, tạo nên một nơi nghỉ dưỡng trẻ hóa và đầy cảm hứng.</p>
                                </div>
                                <Link href={""} className='button-icon w-full mt-4'>
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
                                    <h2 className='heading-style-large text-style-allcaps'>The 678 Building</h2>
                                </div>
                                <div className='image-gradient-bottom'></div>
                                <Image src={Image_3} alt='' className='image-cover' />
                            </div>
                            <div className='project-vertical-preview-card'>
                                <div className='margin-bottom margin-small'>
                                    <p className='text-justify'>Khám phá sự yên tĩnh được tưởng tượng lại. "The Escape" hài hòa giữa thiết kế hiện đại với thiên nhiên, tạo nên một nơi nghỉ dưỡng trẻ hóa và đầy cảm hứng.</p>
                                </div>
                                <Link href={""} className='button-icon w-full mt-4'>
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
            </section>

        </main>
    );
};

export default page;