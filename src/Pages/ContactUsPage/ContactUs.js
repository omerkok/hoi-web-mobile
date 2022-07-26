import React from 'react';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import {
  Menu,
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import Header from '../../Components/Header';
import '../../Components/Footer/Footer.css';
import BeforeAfter2 from '../../Images/HomePage/BeforeAfter2.png';
import AboutUsBuild from '../../Images/HomePage/AboutUsBuild.png';
import logo from '../../Images/HomePage/HoiLogoTop.svg';
import WideButton from '../../Components/WideButton';
import ContactFrom from '../../Components/ContactFrom';
import BlogPost from '../../Components/BlogPost';
import brazil from '../../Images/ContactUs/brazil.svg';
import france from '../../Images/ContactUs/france.svg';
import germany from '../../Images/ContactUs/germany.svg';
import russia from '../../Images/ContactUs/russia.svg';
import spain from '../../Images/ContactUs/spain.svg';
import turkey from '../../Images/ContactUs/turkey.svg';
import unitedKingdom from '../../Images/ContactUs/united-kingdom.svg';
import unitedStates from '../../Images/ContactUs/united-states.svg';

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
        marginTop: height * 0.05,
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
              style={{ objectFit: 'cover' }}
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

const ContactUs = () => {
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
          marginBottom: height * 0.08,
        }}>
        <span
          style={{
            color: '#1f232a',
            fontFamily: 'PlayfairDisplayBold',
            fontSize: 35,
            marginBottom: height * 0.05,
          }}>
          {'CONTACT US'}
        </span>
        <IconButton style={styles.iconButton}>
          <WhatsappOutlined style={styles.icon} />
        </IconButton>
        <div
          style={{
            marginTop: height * 0.05,
            width: '80%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10%',
            backgroundColor: 'rgba(119, 159, 125, 0.3)',
            marginBottom: height * 0.05,
          }}>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={unitedKingdom}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={unitedStates}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={germany}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={spain}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={russia}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={france}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={brazil}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
            <IconButton
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <img
                src={turkey}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 7,
                }}
              />
              <span
                style={{
                  color: '#1f232a',
                  fontFamily: 'PoppinsMedium',
                  fontSize: 16,
                }}>
                {'+90 (530) 688 42 47'}
              </span>
            </IconButton>
          </div>
        </div>
        <div
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <IconButton style={styles.iconButton2}>
            <Instagram style={styles.icon2} />
            <span
              style={{
                color: '#1f232a',
                fontFamily: 'PoppinsMedium',
                fontSize: 16,
              }}>
              {'hairofistanbul'}
            </span>
          </IconButton>
          <IconButton style={styles.iconButton2}>
            <FacebookOutlined style={styles.icon2} />
            <span
              style={{
                color: '#1f232a',
                fontFamily: 'PoppinsMedium',
                fontSize: 16,
              }}>
              {'hairofistanbul'}
            </span>
          </IconButton>
          <IconButton style={styles.iconButton2}>
            <Twitter style={styles.icon2} />
            <span
              style={{
                color: '#1f232a',
                fontFamily: 'PoppinsMedium',
                fontSize: 16,
              }}>
              {'hairofistanbul'}
            </span>
          </IconButton>
        </div>
        <div
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <IconButton style={styles.iconButton2}>
            <YouTube style={styles.icon2} />
            <span
              style={{
                color: '#1f232a',
                fontFamily: 'PoppinsMedium',
                fontSize: 16,
              }}>
              {'hairofistanbul'}
            </span>
          </IconButton>
          <IconButton style={styles.iconButton2}>
            <LinkedIn style={styles.icon2} />
            <span
              style={{
                color: '#1f232a',
                fontFamily: 'PoppinsMedium',
                fontSize: 16,
              }}>
              {'hairofistanbul'}
            </span>
          </IconButton>
        </div>
      </div>
      <Divider
      style={{
        width: width,
        height: height * 0.05,
        backgroundColor: '#f9f7ee',
        border: 0,
      }}
    />
      <ContactFrom />
      <Divider
      style={{
        width: width,
        height: height * 0.05,
        backgroundColor: '#f9f7ee',
        border: 0,
      }}
    />
      <BeforeAfter />
      <BlogPost />
      <AboutUs />
      <BottomMenu />
      <Bottom />
    </div>
  );
};

export default ContactUs;

const styles = {
  icon: {
    height: width * 0.1,
    width: width * 0.1,
    color: '#ffffff',
    backgroundColor: '#779f7d',
    borderRadius: width * 0.1,
    padding: width * 0.01,
  },
  iconButton: {
    height: width * 0.05,
    width: width * 0.05,
  },
  icon2: {
    height: width * 0.05,
    width: width * 0.05,
    color: '#ffffff',
    backgroundColor: '#779f7d',
    borderRadius: width * 0.1,
    padding: width * 0.01,
    marginBottom: height * 0.01,
  },
  iconButton2: {
    width: '31%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'PoppinsMedium',
    color: '#779f7d',
    fontSize: 18,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
};