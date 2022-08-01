import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WideButton from '../../components/WideButton';
import Asset from '../../images/Asset.png';
import AfroType from '../../images/AfroType.svg';
import BeardTransplant from '../../images/BeardTransplant.svg';
import HairTransplant from '../../images/HairTransplant.svg';
import WomanHairTransplant from '../../images/WomanHairTransplant.svg';
import './Home.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const OurClinicContent = () => {
  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        paddingTop: '7%',
        paddingBottom: '7%',
      }}>
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PoppinsBold',
          fontSize: 36,
          marginBottom: '5%',
        }}>
        {'OUR CLINIC'}
      </span>
      <img
        src={Asset}
        style={{
          width: '80%',
          objectFit: 'contain',
          marginBottom: '5%',
        }}
        alt='BeforeAfter'
      />
      <p
        style={{
          fontFamily: 'PoppinsRegular',
          width: width * 0.8,
          color: '#1f232a',
          fontSize: 18,
          marginBottom: '5%',
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <WideButton text='MORE' onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const TypeHair = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: height * 0.5,
        marginBottom: '7%',
      }}>
      <div
        style={{
          display: 'flex',
          width: '35%',
          height: height * 0.5,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <IconButton
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40%',
            width: '100%',
          }}
          onClick={() => console.log('tıklandı')}>
          <img
            src={HairTransplant}
            style={{
              height: width * 0.12,
              width: width * 0.12,
              marginBottom: height * 0.01,
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#848484',
              fontFamily: 'PoppinsSemiBold',
              fontSize: 20,
            }}>
            {'HAIR'}
          </span>
        </IconButton>
        <div
          style={{
            height: height * 0.03,
            width: '50%',
          }}>
          {''}
        </div>
        <IconButton
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40%',
            width: '100%',
          }}
          onClick={() => console.log('tıklandı')}>
          <img
            src={BeardTransplant}
            style={{
              height: width * 0.12,
              width: width * 0.12,
              marginBottom: height * 0.01,
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#848484',
              fontFamily: 'PoppinsSemiBold',
              fontSize: 20,
            }}>
            {'BEARD'}
          </span>
        </IconButton>
      </div>
      <div
        style={{
          display: 'flex',
          width: '35%',
          height: height * 0.5,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <IconButton
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40%',
            width: '100%',
          }}
          onClick={() => console.log('tıklandı')}>
          <img
            src={AfroType}
            style={{
              height: width * 0.12,
              width: width * 0.12,
              marginBottom: height * 0.01,
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#848484',
              fontFamily: 'PoppinsSemiBold',
              fontSize: 20,
            }}>
            {'AFRO-TYPE'}
          </span>
        </IconButton>
        <div
          style={{
            height: height * 0.03,
            width: '50%',
          }}>
          {''}
        </div>
        <IconButton
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40%',
            width: '100%',
          }}
          onClick={() => console.log('tıklandı')}>
          <img
            src={WomanHairTransplant}
            style={{
              height: width * 0.12,
              width: width * 0.12,
              marginBottom: height * 0.01,
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#848484',
              fontFamily: 'PoppinsSemiBold',
              fontSize: 20,
            }}>
            {'WOMAN'}
          </span>
        </IconButton>
      </div>
    </div>
  );
};

export const Stages = () => {
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
        height: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: height * 0.05,
      }}>
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PoppinsBold',
          fontSize: 35,
          marginBottom: height * 0.05,
        }}>
        {'STAGES'}
      </span>
      <Swiper
        style={{
          width: width,
          height: height * 0.4,
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
        <SwiperSlide style={{}}>
          <img
            src={Asset}
            style={{
              width: '80%',
              objectFit: 'contain',
              marginBottom: '5%',
            }}
            alt='BeforeAfter'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={Asset}
            style={{
              width: '80%',
              objectFit: 'contain',
              marginBottom: '5%',
            }}
            alt='BeforeAfter'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={Asset}
            style={{
              width: '80%',
              objectFit: 'contain',
              marginBottom: '5%',
            }}
            alt='BeforeAfter'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={Asset}
            style={{
              width: '80%',
              objectFit: 'contain',
              marginBottom: '5%',
            }}
            alt='BeforeAfter'
          />
        </SwiperSlide>
      </Swiper>
      <p
        style={{
          fontFamily: 'PoppinsRegular',
          width: width * 0.8,
          color: '#1f232a',
          fontSize: 18,
          marginBottom: '5%',
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <WideButton text='MORE' onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const Home = () => {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <div
        style={{
          marginTop: height * 0.27,
        }}></div>
      <TypeHair />
      <Stages />
      <OurClinicContent />
      <Footer />
    </div>
  );
};
export default Home;
