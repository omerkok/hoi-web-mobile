import React, { useEffect, useState } from 'react';
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
import WideButton from '../../Components/WideButton';
import AfroType from '../../Images/BeforeAfter/AfroType.svg';
import BeardTransplant from '../../Images/BeforeAfter/BeardTransplant.svg';
import HairTransplant from '../../Images/BeforeAfter/HairTransplant.svg';
import WomanHairTransplant from '../../Images/BeforeAfter/WomanHairTransplant.svg';
import BeforeAfterKart1 from '../../Images/BeforeAfter/BeforeAfterKart1.png';
import BeforeAfterKart2 from '../../Images/BeforeAfter/BeforeAfterKart2.png';
import BeforeAfterKart3 from '../../Images/BeforeAfter/BeforeAfterKart3.png';
import BeforeAfterKart4 from '../../Images/BeforeAfter/BeforeAfterKart4.png';
import BeforeAfterModel1 from '../../Images/BeforeAfter/BeforeAfterModel1.png';
import BeforeAfterModel2 from '../../Images/BeforeAfter/BeforeAfterModel2.png';
import BeforeAfterModel3 from '../../Images/BeforeAfter/BeforeAfterModel3.png';
import Asset from '../../Images/HomePage/Asset.png';
import './BeforeAfter.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

var typeList = [
  {
    url: AfroType,
    Selected: true,
  },
  {
    url: BeardTransplant,
    Selected: false,
  },
  {
    url: HairTransplant,
    Selected: false,
  },
  {
    url: WomanHairTransplant,
    Selected: false,
  },
];

var peopleImageList1 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];
var peopleImageList2 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];
var peopleImageList3 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];
var peopleImageList4 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];

var peopleList = [
  {
    url: peopleImageList1,
    Selected: true,
  },
  {
    url: peopleImageList2,
    Selected: false,
  },
  {
    url: peopleImageList3,
    Selected: false,
  },
  {
    url: peopleImageList4,
    Selected: false,
  },
];

var carouselImageList1 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];
var carouselImageList2 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];
var carouselImageList3 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];
var carouselImageList4 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];

var carouselList = [
  {
    list: carouselImageList1,
    Selected: true,
  },
  {
    list: carouselImageList2,
    Selected: false,
  },
  {
    list: carouselImageList3,
    Selected: false,
  },
  {
    list: carouselImageList4,
    Selected: false,
  },
];

/*export const SelectType = () => {
  const [typeListState, setTypeListState] = useState(typeList);

  const changeSelected = (n) => {
    console.log('n', n)
    typeListState.find((x) => x.url === n.url).Selected = !n.Selected;
    console.log('typeListState', typeListState)
    setTypeListState(typeListState);
  };

  return (
   
  );
};*/

export const Carousel = () => {
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
        alignItems: 'center',
        marginBottom: height * 0.05,
      }}>
      <Swiper
        style={{
          width: width,
          height: height * 0.47,
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
              color: '#1f232a',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 36,
              width: 'auto',
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}>
            {'HAIR TRANSPLANT'}
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
              color: '#1f232a',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 36,
              width: 'auto',
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}>
            {'PHOTO ROOM'}
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
              color: '#1f232a',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 36,
              width: 'auto',
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}>
            {'PHOTO ROOM'}
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
              color: '#1f232a',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 36,
              width: 'auto',
              marginLeft: width * 0.1,
              marginRight: width * 0.1,
            }}>
            {'PHOTO ROOM'}
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
    </div>
  );
};

export const SelectPeople = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: height * 0.05,
      }}>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart1}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'JONNY'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart2}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'AHMET'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart3}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'RICHARD'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart4}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'KANE'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart1}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'JONNY'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart2}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
              opacity: 0.5,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'AHMET'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart3}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'RICHARD'}
          </span>
        </IconButton>
        <IconButton
          style={{
            width: '22%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            src={BeforeAfterKart4}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
            }}
            alt='BeforeAfter'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PlayfairDisplayBold',
              fontSize: 16,
            }}>
            {'KANE'}
          </span>
        </IconButton>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const [typeListState, setTypeListState] = useState(typeList);

  const changeSelected = (n) => {
    typeListState.map((n, i) => {
      n.Selected = false;
    });
    typeListState.find((x) => x.url === n.url).Selected = !n.Selected;
    setTypeListState(typeListState);
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
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: height * 0.07,
          marginBottom: height * 0.05,
        }}>
        <div
          style={{
            display: 'flex',
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {typeListState.map((n, i) => {
            return (
              <IconButton
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24%',
                }}
                onClick={() => changeSelected(n)}>
                <img
                  src={n.url}
                  style={{
                    width: n.Selected == true ? '100%' : '70%',
                    marginBottom: height * 0.01,
                    objectFit: 'contain',
                    opacity: n.Selected == true ? 1 : 0.5,
                  }}
                  alt='Hoi'
                />
              </IconButton>
            );
          })}
        </div>
      </div>
      <Carousel />
      <SelectPeople />
      <Footer />
    </div>
  );
};

export default BeforeAfter;
