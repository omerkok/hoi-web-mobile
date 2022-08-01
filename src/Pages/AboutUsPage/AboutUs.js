import React from 'react';
import IconButton from '@mui/material/IconButton';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WideButton from '../../components/WideButton';
import HoiIcon from '../../images/HoiIcon.svg';
import HoiMan from '../../images/HoiMan.svg';
import Pers from '../../images/Pers.png';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const AboutUsContent = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <img
        src={HoiIcon}
        style={{
          height: width * 0.45,
          width: width * 0.45,
          marginTop: height * 0.05,
          marginBottom: height * 0.05,
        }}
        alt='Hoi'
      />
      <img
        src={HoiMan}
        style={{
          height: width * 0.45,
          width: width * 0.45,
          marginBottom: height * 0.05,
        }}
        alt='Hoi'
      />
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          marginBottom: height * 0.02,
          width: '50%',
        }}>
        {'ABOUT US'}
      </span>
      <p
        style={{
          fontFamily: 'PoppinsRegular',
          width: width * 0.8,
          color: '#1f232a',
          fontSize: 18,
          marginBottom: height * 0.05,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commodLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
        commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commod
      </p>
      <img
        src={Pers}
        style={{
          width: '80%',
          objectFit: 'contain',
          marginBottom: height * 0.05,
        }}
      />
      <p
        style={{
          fontFamily: 'PoppinsRegular',
          width: width * 0.8,
          color: '#1f232a',
          fontSize: 18,
          marginBottom: height * 0.1,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commodLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
        commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commod
      </p>
    </div>
  );
};

const AboutUs = () => {
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
          marginTop: height * 0.25,
        }}></div>
      <AboutUsContent />
      <Footer />
    </div>
  );
};

export default AboutUs;
