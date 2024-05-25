import React from 'react';
import './Navbar.css'
import Logo from '@/assets/images/logo_living_house.png'
import Image from 'next/image';
import { FaGripLines } from "react-icons/fa6";
import Link from 'next/link';

interface IProps {
    className?: string
}
const Header: React.FC<IProps> = ({ className }) => {
    return (
        <div className={`navbar ${className}`}>
            <div className='max-w-[100px]'>
                <Link href={'/'}><Image src={Logo} alt=''/></Link>
            </div>
            <div className='flex gap-7 ml-[20px] text-[14px]'>
                <Link href="/" className='uppercase font-semibold'>Trang chủ</Link>
                <Link href="/projects" className='uppercase font-semibold'>Các dự án</Link>
                <Link href="/about-us" className='uppercase font-semibold'>Về chúng tôi</Link>
                <Link href="/contact" className='uppercase font-semibold'>Liên hệ</Link>
            </div>
            <div className='navbar-toggle w-dropdown'>
                <div className='navbar-toggle w-dropdown-toggle h-[40px] w-[40px] bg-[#920d10] rounded-md'>
                    <div className='navbar-toggle-inner h-full w-full flex justify-center items-center '>
                        <FaGripLines color='white' size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;