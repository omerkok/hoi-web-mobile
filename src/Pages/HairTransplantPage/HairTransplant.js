import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BeardTransplant from '../../images/BeardTransplant.png';
import Dsc1 from '../../images/Dsc1.png';
import DscCopy1 from '../../images/DscCopy1.png';
import DscCopy2 from '../../images/DscCopy2.png';
import DscCopy3 from '../../images/DscCopy3.png';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const WhoCan = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}>
        <span
          style={{
            fontFamily: 'PoppinsBold',
            color: '#779f7d',
            fontSize: 30,
            textAlign: 'left',
          }}>
          {'WHO CAN HAVE A HAIR TRANSPLANT'}
        </span>
        <p
          style={{
            fontFamily: 'PoppinsRegular',
            color: '#1f232a',
            fontSize: 18,
            textAlign: 'left',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
      <div
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}>
        <img
          src={BeardTransplant}
          style={{
            width: '115%',
            height: height * 0.5,
            objectFit: 'contain',
          }}
          alt='BeforeAfter'
        />
      </div>
    </div>
  );
};

export const DividerConst = () => {
  return (
    <Divider
      style={{
        width: width,
        height: height * 0.05,
        backgroundColor: '#f5f5f5',
        border: 0,
      }}
    />
  );
};

export const Operations = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: height * 0.03,
        paddingBottom: height * 0.05,
      }}>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        {' '}
        <span
          style={{
            fontFamily: 'PoppinsBold',
            color: '#779f7d',
            fontSize: 30,
            textAlign: 'center',
          }}>
          {'BEFORE OPERATION'}
        </span>
        <p
          style={{
            fontFamily: 'PoppinsSemiBold',
            color: '#1f232a',
            fontSize: 18,
            textAlign: 'left',
            width: '100%',
          }}>
          Hair transplants are suitable for both men and women of all
          ethnicities. <br /> <br /> Two factors are need to be considered for a
          hair transplant:
        </p>
      </div>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <p
            style={{
              fontFamily: 'PoppinsRegular',
              color: '#1f232a',
              fontSize: 14,
              textAlign: 'left',
            }}>
            1. There is enough healthy hair on your head to transplant to the
            place where hair is needed.
            <br /> <br /> 2. The capacity to develop hair in areas of your scalp
            that are thinning.
            <br /> <br /> You can find out whether you have both during a
            consultation. Professionals at Hair of Istanbul will examine your
            scalp thoroughly.
            <br /> <br /> A blood test may be required to determine the cause of
            your hair loss. This can help you figure out what's going on in your
            body and what's causing your hair loss..
          </p>
        </div>
        <div
          style={{
            width: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <img
            src={Dsc1}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
            alt='BeforeAfter'
          />
        </div>
      </div>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: height * 0.03,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '31%',
          }}>
          <img
            src={DscCopy1}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PoppinsBold',
              fontSize: 18,
              marginBottom: height * 0.01,
            }}>
            {'ANALYSIS'}
          </span>
          <span
            style={{
              color: '#000000',
              fontFamily: 'PoppinsRegular',
              fontSize: 18,
            }}>
            {'1. There is enough healthy hair on your head...'}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '31%',
          }}>
          <img
            src={DscCopy2}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PoppinsBold',
              fontSize: 18,
              marginBottom: height * 0.01,
            }}>
            {'DONOR AREA'}
          </span>
          <span
            style={{
              color: '#000000',
              fontFamily: 'PoppinsRegular',
              fontSize: 18,
            }}>
            {'1. There is enough healthy hair on your head...'}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '31%',
          }}>
          <img
            src={DscCopy3}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
            alt='Hoi'
          />
          <span
            style={{
              color: '#779f7d',
              fontFamily: 'PoppinsBold',
              fontSize: 18,
              marginBottom: height * 0.01,
            }}>
            {'GRAFT SEPERATION'}
          </span>
          <span
            style={{
              color: '#000000',
              fontFamily: 'PoppinsRegular',
              fontSize: 18,
            }}>
            {'1. There is enough healthy hair on your head...'}
          </span>
        </div>
      </div>
    </div>
  );
};

const HairTransplant = () => {
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
      <WhoCan />
      <DividerConst />
      <Operations />
      <DividerConst />
      <Operations />
      <DividerConst />
      <Operations />
      <Footer />
    </div>
  );
};

export default HairTransplant;
