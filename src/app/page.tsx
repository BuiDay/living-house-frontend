import Image from "next/image";
import Image1 from '@/assets/images/5.jpg'
import Navbar from "./components/Layout/Navbar/Navbar";
import { FaSquare } from "react-icons/fa";
import Link from "next/link";
import Icon1 from '@/assets/icon/1.png'
import Icon2 from '@/assets/icon/2.png'
import Icon3 from '@/assets/icon/3.png'
import Icon4 from '@/assets/icon/4.png'
import Icon5 from '@/assets/icon/5.png'
import Icon6 from '@/assets/icon/6.png'
import Icon7 from '@/assets/icon/7.png'
import Marquee from "react-fast-marquee";
import Footer from "./components/Layout/Footer/Footer";


import Image2 from '@/assets/images/the-grace-tower/1.jpg'
import Image3 from '@/assets/images/san-khau-kich-hong-van/1.jpg'
import Image4 from '@/assets/images/eastin-grand/1.jpg'

export default function Home() {
  return (
    <>
      <main className="xl:p-[3rem] relative main-wrapper-vertical">
        <section className="section-home-vertical-hero relative">
          <div className="header-vertical-fixed z-100">
            <div className="navbar">
              <Navbar />
            </div>
          </div>

          <div className="container mr-auto ml-auto w-full">
            <div className="home-vertical-hero-wrapper relative">
              <div className="home-vertical-hero-image-wrapper rounded-[2.5rem] overflow-hidden h-full relative">
                <div className="home-vertical-hero-content z-50 text-white pb-[3rem] pl-[3rem] pr-[3rem] absolute top-auto bottom-0 left-0">
                  <h1 className="home-vertical-hero-heading text-[5rem] uppercase font-semibold">Xây dựng <br /> tương lai </h1>
                </div>
                <div className="home-vertical-hero-image-gradient"></div>
                <div className="w-full h-full">
                  <Image className="w-full h-full object-cover" src={Image1} alt="" />
                </div>
              </div>
              <div className="home-vertical-hero-card">
                <div className="text-size-large text-justify">
                  Nâng tầm không gian của bạn một cách bền vững với <span className="font-bold"> Living House</span>. Khám phá các thiết kế hiện đại, sáng tạo cho kiến ​​trúc, nội thất và ngoại thất.
                </div>
                <div className="card-sticky-corner-top-left bottom hide-tablet w-embed">
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
        </section>
        <section className="section-home-about">
          <div className="container m-auto">
            <div className="pt-[50px]">
              <Marquee direction="left" speed={80} className="">
                <div className="flex items-center gap-2 px-[50px]">
                  <Image src={Icon1} alt="" width={60} />
                  <span className="uppercase font-semibold">Tư vấn <br /> thiết kế</span>
                </div>
                <div className="flex items-center gap-2  px-[50px]">
                  <Image src={Icon2} alt="" width={60} />
                  <span className="uppercase font-semibold">Thiết kế <br /> kiến trúc</span>
                </div>
                <div className="flex items-center gap-2 px-[50px]">
                  <Image src={Icon3} alt="" width={60} />
                  <span className="uppercase font-semibold">Thiết kế <br /> nội thất</span>
                </div>
                <div className="flex items-center gap-2  px-[50px]">
                  <Image src={Icon4} alt="" width={60} />
                  <span className="uppercase font-semibold">Thi công <br /> thiết kế</span>
                </div>
                <div className="flex items-center gap-2  px-[50px]">
                  <Image src={Icon5} alt="" width={60} />
                  <span className="uppercase font-semibold">Thi công<br /> nội thất</span>
                </div>
                <div className="flex items-center gap-2  px-[50px]">
                  <Image src={Icon6} alt="" width={60} />
                  <span className="uppercase font-semibold">Quản lí<br /> dự án</span>
                </div>
                <div className="flex items-center gap-2  px-[50px]">
                  <Image src={Icon7} alt="" width={60} />
                  <span className="uppercase font-semibold">Phát triển <br /> dự án</span>
                </div>
              </Marquee>
            </div>
          </div>
        </section>
        <section className="section-home-vertical-about">
          <div className="p-[3rem]">
            <div className="container">
              <div className="home-vertical-about-grid">
                <div>
                  <div className="flex items-center gap-2 bg-[#f8f8f8] px-2 py-1 w-[150px]">
                    <FaSquare size={10} />
                    <span className="uppercase text-[12px] font-semibold">Chúng ta làm gì</span>
                  </div>
                  <div className="m-[1rem]">
                    <h2 className="uppercase text-[42px] font-medium">Định hình <br /> kiến trúc tương lai</h2>
                  </div>
                </div>
                <div className="m-[1rem] flex flex-col gap-5 text-justify">
                  <p className="text-[16px] font-medium">Living House được thành lập vào năm 2022. Giám Đốc điều hành là Ông Võ Văn Tiến sinh năm 1999 vào đời đi làm từ lúc 14 tuổi xuất thân từ một người lao động tay chân cho đến vị trí Giám Đốc điều hành bây giờ. Trong quá trình 10 năm Ông Võ Văn Tiến đã tham gia cá nhân đã làm cho nhiều công ty và dự án lớn ở Việt Nam. Tuy công ty mới thành lập nhưng Ông Võ Văn Tiến chắc chắn sẽ mang lại chất lượng và sự hài lòng cho từng khách hàng khi làm việc với Living House. Ngay từ những ngày đầu thành lập, Living House xác định sứ mệnh cao cả là “Kiến tạo không gian sống” cho mỗi khách hàng.  </p>
                  <p className="text-[14px]">Hãy tham gia cùng chúng tôi trong hành trình thú vị biến ý tưởng thành hiện thực phi thường. Hãy cùng nhau làm cho thương hiệu của bạn nổi bật, phát triển và chinh phục những tầm cao mới.</p>
                  <Link href="/about-us" className="underline uppercase text-[12px]">Về chúng tôi</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-about-vertical-hero text-center'>
          <div className='p-[2rem]'>
            <div className="flex items-center justify-center w-full gap-2">
              <div className="bg-[#f8f8f8] flex px-2 py-1 items-center gap-2">
                <FaSquare size={10} />
                <span className="uppercase text-[12px] font-semibold ">Dự án</span>
              </div>

            </div>
            <div>
              <h1 className='text-[2rem] uppercase font-semibold'>Dự án được chọn</h1>
            </div>
            <div className='w-full max-w-[40rem] m-auto'>
              <p className='text-[16px]'>
                Các dự án của chúng tôi định nghĩa lại cuộc sống hiện đại thông qua thiết kế bền vững, thể hiện sự kết hợp hài hòa giữa kiến ​​trúc, sự đổi mới và trách nhiệm.
              </p>
            </div>
          </div>
        </section>
        <section className="section-home-vertical-services">
          <div className="p-[2rem]">
            <div className="container">
              <div className="home-vertical-services-grid">
                <div className="home-vertical-services-architecture relative">
                  <div className="home-vertical-services-architecture-image-wrapper">
                    <Image src={Image4} alt="" className="home-vertical-services-architecture-image" />
                  </div>
                  <div className="home-vertical-services-architecture-card">
                    <div className="margin-bottom margin-xxsmall">
                      <Link href={"/projects/eastin-grand-hotel-saigon"} className="font-semibold">Eastin Grand Hotel Saigon</Link>
                    </div>
                    {/* <div className="text-size-small">
                      From vision to reality, we shape innovative structures that seamlessly merge modern aesthetics with eco-friendly principles, redefining urban landscapes.
                    </div> */}
                    <div className="card-sticky-corner-top-right top hide-mobile-landscape w-embed">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                      </svg>
                    </div>
                    <div className="card-sticky-corner-top-right bottom hide-mobile-landscape w-embed">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="home-vertical-services-grid-right">
                  <div className="home-vertical-services-interior">
                    <Image src={Image3} alt="" className="home-vertical-services-interior-image" />
                    <div className="home-vertical-services-interior-card">
                      <div className="margin-bottom margin-xxsmall">
                        <Link href={"/projects/san-khau-kich-hong-van"} className="heading-style-h5 font-semibold">Sân Khấu Kịch NSND Hồng Vân</Link>
                      </div>
                      {/* <div className="text-size-small">We create interiors that reflect your personality while embracing nature&#39;s beauty.</div> */}
                      <div className="card-sticky-corner-top-left top hide-mobile-landscape w-embed">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                        </svg>
                      </div>
                      <div className="card-sticky-corner-top-left bottom hide-mobile-landscape w-embed">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="home-vertical-services-exterior">
                    <Image src={Image2} alt="" className="home-vertical-services-interior-image" />
                    <div className="home-vertical-services-exterior-card">
                      <div className="margin-bottom margin-xxsmall">
                        <Link href={"/projects/the-grace-tower"} className="heading-style-h5 font-semibold">The Grace Tower</Link>
                      </div>
                      {/* <div className="text-size-small">We create interiors that reflect your personality while embracing nature&#39;s beauty.</div> */}
                      <div className="card-sticky-corner-top-right top hide-mobile-landscape w-embed">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                        </svg>
                      </div>
                      <div className="card-sticky-corner-top-right bottom hide-mobile-landscape w-embed">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="white"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
