import React from 'react'
import "./Partner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { BsTelegram, BsGithub } from "react-icons/bs"
import { BiLogoNetlify, BiLogoGmail } from "react-icons/bi"

function Partner() {

  const data = [
    {
      id: 1,
      ism: "Elshodbek",
      netlify: "https://app.netlify.com/teams/rov1dev/overview",
      github: 'https://github.com/dashboard',
      telegram: "https://t.me/nazarovoff",
      email: "nazarov1.off@gmail.com",
    },
    {
      id: 2,
      ism: "Muhsinjon",
      github: "https://github.com/al-muhsinjon",
      telegram: "https://t.me/Al_Muhsinjon_0",
      email: "https://muhsinjonmullajonov0@gmail.com",
    },
    {
      id: 3,
      ism: "Aliakbar",
      github: "",
      netlify: "https://yorqinjon-turobjonov.netlify.app",
      email: "anvarovaliakbar80@gmail.com",
      telegram: "https://t.me/akmalovich_077"
    },
    {
      id: 4,
      ism: "Yorqinjon",
      github: "",
      netlify: "",
      email: "",
      telegram: "https://t.me/Yorkin_dev"
    },
  ]
  return (
    <div className='partner' >
      <h1 className='pt-4' >My Partners</h1>
      <Swiper
        slidesPerView={1} spaceBetween={30} loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(item => {
          const { github, netlify, email, telegram, ism, id } = item
          return (
            <SwiperSlide key={id}>
              <div className='partnerContainer' >
                <img src="https://avatars.mds.yandex.net/i?id=f35a253a6a534c4f7200e4dbf591415b75bc6003-9266849-images-thumbs&n=13" alt="" />
                <div className="partnerRight">
                  <div>
                    <h1>Name:  {ism}</h1>
                    <h2>Their Contact</h2>
                  </div>
                  <div className="partnerIcons">
                    <a href={telegram} target="_blank">
                      {telegram && (<h3> <i><BsTelegram /></i> Telegram </h3>)}
                    </a>
                    <a href={`${email}`} target="_blank">
                      {email && (<h3><i><BiLogoGmail /></i> Gmail</h3>)}
                    </a>
                    <a href={github} target="_blank">
                      {github && (<h3><i><BsGithub /></i> Github</h3>)}
                    </a>
                    <a href={netlify} target="_blank">
                      {netlify && (<h3><i><BiLogoNetlify /></i> Netlify</h3>)}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}

export default Partner