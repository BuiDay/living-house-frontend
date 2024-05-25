import React from 'react';
import './Footer.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='footer-vertical'>
            <div className='container'>
                <div className='footer-vertical-inner'>
                    <div className='footer-vertical-top text-center'>
                        <h2 className='text-[38px] mb-5 font-semibold'>ĐỊNH HÌNH KHÔNG GIAN MƠ ƯỚC CỦA BẠN!</h2>
                        <Link href='contact-us' className='button font-semibold inverse-primary w-inline-block'>Hãy kết nối</Link>
                    </div>
                    <div className='footer-vertical-bottom'>
                        <div className='footer-vertical-bottom-nav'>

                            <div className='flex flex-col gap-[20px]'>
                                <h3 className='font-bold'>Trang</h3>
                                <ul>
                                    <li className='py-3'><Link href="/">Trang chủ</Link></li>
                                    <li className='py-3'><Link href="/">Dịch vụ</Link></li>
                                    <li className='py-3'><Link href="/">Chúng tôi</Link></li>
                                    <li className='py-3'><Link href="/">Liên hẹ</Link></li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-[20px]'>
                                <h3 className='font-bold'>CMS</h3>
                                <ul>
                                    <li className='py-3'><Link href="/">Dự án</Link></li>
                                    <li className='py-3'><Link href="/">Dịch vụ</Link></li>
                                    <li className='py-3'><Link href="/">Chúng tôi</Link></li>
                                    <li className='py-3'><Link href="/">Liên hệ</Link></li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p><span className='font-bold'>Hotline:</span> 0775518898</p>
                                <p><span className='font-bold'>Email:</span> livinghouse@gmail.com</p>

                                <ul>
                                    <p className='font-bold'>Trụ sở:</p>
                                    <li>186 Bis, đường Trần Quan Khải, phường Tân Định, Quận 1, TP HCM</li>
                                </ul>

                                <ul>
                                    <p className='font-bold'>Xưởng sản xuất:</p>
                                    <li>4/25B KP Đông Chiêu , Phường Tân Đông Hiệp, TP Dĩ AN, Bình Dương</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;