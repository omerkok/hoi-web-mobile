import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import OurClinicRender1 from '../../Images/OurClinic/OurClinicRender1.png';
import Asset from '../../Images/HomePage/Asset.png';
import './OurClinic.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const OurClinic = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <div
        style={{
          width: '100%',
          marginTop: height * 0.08,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2,
            marginBottom: -height * 0.08,
          }}>
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayRegular',
              fontSize: 30,
              width: '80%',
            }}>
            {'WELCOME TO'}
          </span>
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayMediumItalic',
              fontSize: 30,
              marginBottom: height * 0.02,
              width: '80%',
            }}>
            {'HAIR OF ISTANBUL'}
          </span>
        </div>
        <img
          src={OurClinicRender1}
          style={{
            width: '80%',
            objectFit: 'contain',
            zIndex: 1,
          }}
          alt='BeforeAfter'
        />
        <Divider
          style={{
            width: width,
            height: height * 0.1,
            backgroundColor: '#ffffff',
            border: 0,
          }}
        />
        <Swiper
          style={{
            width: width,
            height: height * 0.45,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          autoplay={true}
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={pagination}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          <SwiperSlide>
            <span
              style={{
                color: '#779f7d',
                fontFamily: 'PlayfairDisplayMediumItalic',
                fontSize: 24,
                width: 'auto',
                border: 2,
                borderColor: '#779f7d',
                display: 'inline-block',
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
              }}>
              <Divider
                style={{
                  width: 'auto',
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
              {'KITCHEN'}
              <Divider
                style={{
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
            </span>
            <img
              src={Asset}
              style={{
                width: '80%',
                objectFit: 'contain',
                marginBottom: '5%',
                marginTop: height * 0.02,
              }}
              alt='BeforeAfter'
            />
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{
                color: '#779f7d',
                fontFamily: 'PlayfairDisplayMediumItalic',
                fontSize: 24,
                width: 'auto',
                border: 2,
                borderColor: '#779f7d',
                display: 'inline-block',
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
              }}>
              <Divider
                style={{
                  width: 'auto',
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
              {'PHOTO ROOM'}
              <Divider
                style={{
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
            </span>
            <img
              src={Asset}
              style={{
                width: '80%',
                objectFit: 'contain',
                marginBottom: '5%',
                marginTop: height * 0.02,
              }}
              alt='BeforeAfter'
            />
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{
                color: '#779f7d',
                fontFamily: 'PlayfairDisplayMediumItalic',
                fontSize: 24,
                width: 'auto',
                border: 2,
                borderColor: '#779f7d',
                display: 'inline-block',
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
              }}>
              <Divider
                style={{
                  width: 'auto',
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
              {'PHOTO ROOM'}
              <Divider
                style={{
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
            </span>
            <img
              src={Asset}
              style={{
                width: '80%',
                objectFit: 'contain',
                marginBottom: '5%',
                marginTop: height * 0.02,
              }}
              alt='BeforeAfter'
            />
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{
                color: '#779f7d',
                fontFamily: 'PlayfairDisplayMediumItalic',
                fontSize: 24,
                width: 'auto',
                border: 2,
                borderColor: '#779f7d',
                display: 'inline-block',
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
              }}>
              <Divider
                style={{
                  width: 'auto',
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
              {'PHOTO ROOM'}
              <Divider
                style={{
                  height: 2,
                  backgroundColor: '#779f7d',
                }}
              />
            </span>
            <img
              src={Asset}
              style={{
                width: '80%',
                objectFit: 'contain',
                marginBottom: '5%',
                marginTop: height * 0.02,
              }}
              alt='BeforeAfter'
            />
          </SwiperSlide>
        </Swiper>
        <Divider
          style={{
            width: width,
            height: height * 0.05,
            backgroundColor: '#ffffff',
            border: 0,
          }}
        />
        <span
          style={{
            color: '#1f232a',
            fontFamily: 'PlayfairDisplayBold',
            fontSize: 35,
            marginBottom: height * 0.02,
            width: '50%',
          }}>
          {"YOU'LL ENJOY"}
        </span>
        <p
          style={{
            fontFamily: 'PoppinsRegular',
            width: width * 0.8,
            color: '#1f232a',
            fontSize: 18,
            marginBottom: height * 0.05,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <Divider
          style={{
            width: width,
            height: height * 0.05,
            backgroundColor: '#ffffff',
            border: 0,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default OurClinic;
