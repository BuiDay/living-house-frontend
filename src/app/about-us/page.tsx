import React from 'react';
import Navbar from '../components/Layout/Navbar/Navbar';
import Image_1 from '@/assets/images/1.jpg'
import Image_2 from '@/assets/images/2.jpg'
import Image_3 from '@/assets/images/3.jpg'
import Image_4 from '@/assets/images/4.jpg'
import Image_5 from '@/assets/images/5.jpg'
import './about-us.css'
import Image from 'next/image';
import { FaSquare } from "react-icons/fa";



const page = () => {
    return (
        <main className='main-wrapper-vertical p-[3rem]'>
            <div className='header-vertical flex justify-center'>
                <Navbar className="muted"/>
            </div>
            <section className='section-about-vertical-hero text-center'>
                <div className='p-[6rem]'>
                    <div>
                        <h1 className='text-[3.75rem] uppercase font-semibold'>Giới thiệu về Living House</h1>
                    </div>
                    <div className='w-full max-w-[30rem] m-auto'>
                        <p className='text-[16px]'>
                        Với sự kết hợp giữa sự sáng tạo và trách nhiệm sinh thái, chúng tôi định hình lại cuộc sống hiện đại đầy cảm hứng hơn.
                        </p>
                    </div>
                </div>
            </section>

            <section className='section-about-vertical-how'>
                <div className='container m-auto flex flex-col gap-[100px]'>
                    <div className='about-vertical-how-grid'>
                        <div className='rounded-[50px] overflow-hidden max-w-[80%] m-auto'>
                            <Image src={Image_1} alt=''/>
                        </div>
                        <div className='about-vertical-how-content'>
                            <div className='muted flex items-center gap-2 px-2 py-1 rounded-md'>
                                <span><FaSquare size={10}/></span>
                                <span className='text-[14px] font-semibold uppercase'>Giá trị cốt lõi của chúng tôi</span>
                            </div>
                            <div className='text-justify'>
                                <p>Mỗi nhân sự đều là một mắt xích quan trọng để đem đến cho khách hàng sự hài lòng trong mọi trải nghiệm. Tại Living House, chúng tôi phát triển và hoàn thiện bản thân trong cả công việc và cuộc sống, luôn cập nhật xu hướng và nhu cầu của thị trường để hướng đến sự thành công lâu dài.</p>
                            </div>
                        </div>
                    </div>

                    <div className='about-vertical-how-grid reverse'>
                        <div className='about-vertical-how-content'>
                            <div className='muted flex items-center gap-2 px-2 py-1 rounded-md'>
                                <span><FaSquare size={10}/></span>
                                <span className='text-[14px] font-semibold uppercase'>Sứ mệnh</span>
                            </div>
                            <div className='text-justify w-[80%]'>
                                <p>Với sứ mệnh kiến tạo những không gian sống, Living House luôn đồng hành cùng khách hàng từ khâu thiết kế đến thi công và sản xuất mang đến trải nghiệm trọn vẹn và đẳng cấp nhưng phù hợp với mong muốn và chi phí đầu tư. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu, nỗ lực không ngừng để đáp ứng mọi nhu cầu và mong muốn của quý khách hàng.</p>
                            </div>
                        </div>
                        <div className='rounded-[50px] overflow-hidden'>
                            <Image src={Image_2} alt=''/>
                        </div>
                    </div>

                    <div className='about-vertical-how-grid'>
                        <div className='rounded-[50px] overflow-hidden max-w-[80%] m-auto'>
                            <Image src={Image_3} alt=''/>
                        </div>
                        <div className='about-vertical-how-content'>
                            <div className='muted flex items-center gap-2 px-2 py-1 rounded-md'>
                                <span><FaSquare size={10}/></span>
                                <span className='text-[14px] font-semibold uppercase'>Tầm nhìn</span>
                            </div>
                            <div className='text-justify'>
                                <p>Trong những năm tới, Living House hướng đến mục tiêu trở thành thương hiệu công ty mang lại không gian sống chất lượng và sự hài lòng cho khách hàng Việt Nam, được khách hàng tin tưởng và lựa chọn. Chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ, mang đến những trải nghiệm tuyệt vời nhất cho mỗi khách hàng.</p>
                            </div>
                        </div>
                    </div>

                    <div className='about-vertical-how-grid reverse'>
                        <div className='about-vertical-how-content'>
                            <div className='muted flex items-center gap-2 px-2 py-1 rounded-md'>
                                <span><FaSquare size={10}/></span>
                                <span className='text-[14px] font-semibold uppercase'>Công ty của chúng tôi, con người của chúng tôi </span>
                            </div>
                            <div className='text-justify w-[80%]'>
                                <p>Chúng tôi nuôi dưỡng và thúc đẩy văn hóa sáng tạo và hòa nhập nhằm phát triển tối đa tiềm năng mọi cá nhân. Tinh thần cải tiến liên tục tạo động lực cho chúng tôi duy trì sự nhanh nhạy trong việc thu hút, phát triển và giữ chân nhân tài để đứng vững lợi thế cạnh tranh của mình. </p>
                            </div>
                        </div>
                        <div className='rounded-[50px] overflow-hidden'>
                            <Image src={Image_4} alt=''/>
                        </div>
                    </div>

                    <div className='about-vertical-how-grid'>
                        <div className='rounded-[50px] overflow-hidden max-w-[80%] m-auto'>
                            <Image src={Image_5} alt=''/>
                        </div>
                        <div className='about-vertical-how-content'>
                            <div className='muted flex items-center gap-2 px-2 py-1 rounded-md'>
                                <span><FaSquare size={10}/></span>
                                <span className='text-[14px] font-semibold uppercase'>Khách hàng của chúng tôi</span>
                            </div>
                            <div className='text-justify'>
                                <p>Chúng tôi giữ vững sự chính trực và vươn tới sự vượt trội như một lời hứa với khách hàng. Chúng tôi tin rằng nền tảng vững chắc của tất cả các mối quan hệ được xây dựng dựa trên sự kết nối chân thành và trung thực với khách hàng.</p>
                            </div>
                        </div>
                    </div>

                    <div className='about-vertical-how-grid reverse'>
                        <div className='about-vertical-how-content'>
                            <div className='muted flex items-center gap-2 px-2 py-1 rounded-md'>
                                <span><FaSquare size={10}/></span>
                                <span className='text-[14px] font-semibold uppercase'>Chất lượng hoàn thiện</span>
                            </div>
                            <div className='text-justify w-[80%]'>
                                <p>Chúng tôi xem sự hoàn thiện là một quá trình. Chúng tôi luôn đề cao tiêu chuẩn và chất lượng của từng dự án lên hàng đầu, tôn trọng các quyết định, góp ý của khách hàng để hoàn thiện các dự án một cách chỉn chu nhất.</p>
                            </div>
                        </div>
                        <div className='rounded-[50px] overflow-hidden'>
                            <Image src={Image_2} alt=''/>
                        </div>
                    </div>

                </div>
            </section>

            <section className='section-about-vertical-team flex flex-col gap-[3rem]'>
                <div className='container text-center p-[7rem]'>
                    <div>
                        <h2 className='uppercase font-semibold text-[34px]'>Đội ngũ của chúng tôi</h2>
                        <p className='w-[50%] m-auto mt-4'>Đội ngũ kiến ​​trúc sư và nhà thiết kế có tầm nhìn đa dạng của chúng tôi được hợp nhất bởi niềm đam mê đổi mới bền vững, định hình một cảnh quan kiến ​​trúc xanh hơn.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;