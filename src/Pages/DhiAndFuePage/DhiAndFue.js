import React from 'react';
import IconButton from '@mui/material/IconButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DhiFue from '../../images/DhiFue.png';
import DhiFu2 from '../../images/DhiFue2.png';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const DhiFueContent = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <img
        src={DhiFue}
        style={{
          width: '80%',
          objectFit: 'contain',
          marginBottom: height * 0.05,
        }}
        alt='BeforeAfter'
      />
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 60,
          marginBottom: height * 0.05,
        }}>
        {'FUE'}
      </span>
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
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <img
        src={DhiFu2}
        style={{
          width: '80%',
          objectFit: 'contain',
          marginBottom: height * 0.05,
        }}
        alt='BeforeAfter'
      />
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 60,
          marginBottom: height * 0.05,
        }}>
        {'DHI'}
      </span>
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
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 60,
          marginBottom: '5%',
        }}>
        {'FUE - DHI DIFFERENT'}
      </span>
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

const DhiAndFue = () => {
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
          marginTop: height * 0.27,
        }}></div>
      <DhiFueContent />
      <Footer />
    </div>
  );
};

export default DhiAndFue;
