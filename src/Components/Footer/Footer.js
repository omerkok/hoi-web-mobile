import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import './Footer.css';
import BeforeAfter2 from '../../Images/HomePage/BeforeAfter2.png';
import AboutUsBuild from '../../Images/HomePage/AboutUsBuild.png';
import logo from '../../Images/HomePage/HoiLogoTop.svg';
import logo2 from '../../logo2.svg';
import WideButton from '../WideButton';
import ContactFrom from '../ContactFrom';
import BlogPost from '../BlogPost';
import Link from '@mui/material/Link';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const BeforeAfter = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {' '}
      <span id='BeforeAfter'>{'BEFORE & AFTER'}</span>
      <span id='HairTransparent'>{'hair transplant'}</span>
      <div id='ImageContainer' style={{ paddingBottom: height * 0.1 }}>
        <div
          style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <div style={{ width: '15%', height: '80%', paddingRight: '10%' }}>
            <img
              id='Image1'
              src={BeforeAfter2}
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.5,
                objectFit: 'cover',
              }}
              alt='BeforeAfter'
            />
          </div>
          <div style={{ width: '50%', height: '100%' }}>
            <img
              src={BeforeAfter2}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt='BeforeAfter'
            />
          </div>
          <div style={{ width: '15%', height: '80%', paddingLeft: '10%' }}>
            <img
              id='Image2'
              src={BeforeAfter2}
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.5,
                objectFit: 'cover',
              }}
              alt='BeforeAfter'
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: 'PoppinsRegular',
            width: width * 0.8,
            color: '#1f232a',
            fontSize: 18,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod
        </p>
        <WideButton
          text='MORE RESULT'
          onPress={() => console.log('tıllandı')}
        />
      </div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div
      className='FooterBottomContainer'
      style={{
        height: height * 0.4,
        width: width,
        backgroundColor: '#779f7d',
      }}>
      <IconButton style={{ height: width * 0.16, width: width * 0.16 }}>
        <img
          src={logo}
          style={{
            height: width * 0.16,
            width: width * 0.16,
          }}
          alt='Hoi'
        />
      </IconButton>
      <p
        style={{
          fontFamily: 'PoppinsLight',
          width: width * 0.8,
          color: '#ffffff',
          fontSize: 14,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className='gradientbackground'>
      <span
        style={{
          color: '#ffffff',
          fontFamily: 'PoppinsBold',
          fontSize: 35,
          marginBottom: '5%',
        }}>
        {'ABOUT US'}
      </span>
      <img
        src={AboutUsBuild}
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
      <WideButton text='ABOUT US' onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const BottomMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: height * 0.3,
        marginBottom: '7%',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          width: '40%',
          paddingRight: '3%',
          height: height * 0.3,
        }}>
        <Link href='#' underline='none' style={styles.link}>
          {'HAIR TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'BEARD TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'AFRO TYPE'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'WOMAN TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'EYEBROW'}
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingLeft: '3%',
          width: '45%',
          height: height * 0.3,
        }}>
        <Link href='#' underline='none' style={styles.link}>
          {'HAIR TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'BEARD TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'AFRO TYPE'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'WOMAN TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'EYEBROW'}
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <BeforeAfter />
      <ContactFrom />
      <BlogPost />
      <AboutUs />
      <BottomMenu />
      <Bottom />
    </div>
  );
};

export default Footer;

const styles = {
  link: {
    fontFamily: 'PoppinsMedium',
    color: '#779f7d',
    fontSize: 18,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
};
