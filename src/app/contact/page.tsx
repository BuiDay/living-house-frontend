import React from 'react';
import './page.css'
import Navbar from '../components/Layout/Navbar/Navbar';
import Image from 'next/image';
import Image_1 from '@/assets/images/quy-trinh.png'
const Page = () => {
    return (
        <div className='main-wrapper-vertical'>
            <div className='container'>
                <div className='contact-grid'>
                    <div className='contact-grid-left'>
                        <div className='contact-grid-left-top'>
                            <div className='m-0 margin-medium'>
                                <Navbar className='muted' />
                            </div>
                            <h1 className='heading-style-medium text-style-allcaps fo'>Liên hệ</h1>
                        </div>
                        <div className="form-wrapper w-form">
                            <form action="">
                                <div className="contact-form-grid">
                                    <div className="form-field-wrapper">
                                        <label htmlFor="Name" className="form-label">Tên *</label>
                                        <input className="form-input w-input" name="Name-2" data-name="Name 2" placeholder="John Doe" type="text" id="Name-2" />
                                    </div>
                                    <div className="form-field-wrapper">
                                        <label htmlFor="Email" className="form-label">Số điện thoại *</label>
                                        <input className="form-input w-input" name="Email-2" data-name="Email 2" placeholder="email@example.com" type="email" id="Email-2" />
                                    </div>
                                </div>
                                <div className="contact-form-grid">
                                    <div className="form-field-wrapper">
                                        <label htmlFor="Name" className="form-label">Email *</label>
                                        <input className="form-input w-input" name="Name-2" data-name="Name 2" placeholder="John Doe" type="text" id="Name-2" />
                                    </div>
                                    <div className="form-field-wrapper">
                                        <label htmlFor="Email" className="form-label">Dịch vụ *</label>
                                        <select name="cars" id="cars" className="form-input w-input">
                                            <option value="volvo">Tư vấn thiết kế kiến trúc</option>
                                            <option value="saab">Tư vấn thiết kế nội thất</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='form-field-wrapper'>
                                    <label htmlFor="Message" className="form-label">Nội dung *</label>
                                    <textarea className="form-input is-text-area w-input" name="Message-2" data-name="Message 2" placeholder="Your Message" id="Message-2" />
                                </div>
                                <div className="contact-form-button-wrapper">
                                    <input type="submit" data-wait="Please wait..." className="button primary w-button" value="Gửi" />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className='contact-grid-right'>
                        <div className='w-full h-full flex items-center'>
                            <div className='mt-[50px]'>
                                <h2 className='text-center text-[24px]'>Quy trình làm việc</h2>
                                <Image src={Image_1} alt='' className='contact-grid-right-image'></Image>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )

}

export default Page;