import React from 'react';
import WideButton from '../WideButton';
import './ContactFrom.css';

const ContactFrom = () => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  return (
    <div className='ContactFromContainer' style={{ height: height * 0.6 }}>
      <div className='ContactFromContainer' style={{ height: height * 0.4 }}>
        <input
          className='ContactFormInput'
          style={{
            height: height * 0.05,
            width: width * 0.66,
            paddingLeft: width * 0.02,
            paddingRight: width * 0.02,
            fontFamily: 'PoppinsMedium',
            fontSize: 14,
          }}
          placeholder='FULL NAME'
        />
        <input
          className='ContactFormInput'
          style={{
            height: height * 0.05,
            width: width * 0.66,
            paddingLeft: width * 0.02,
            paddingRight: width * 0.02,
            fontFamily: 'PoppinsMedium',
            fontSize: 14,
          }}
          placeholder='TELEPHONE NUMBER'
        />
        <input
          className='ContactFormInput'
          style={{
            height: height * 0.05,
            width: width * 0.66,
            paddingLeft: width * 0.02,
            paddingRight: width * 0.02,
            fontFamily: 'PoppinsMedium',
            fontSize: 14,
          }}
          placeholder='E-MAIL'
        />
        <textarea
          className='ContactFormInput'
          style={{
            height: height * 0.15,
            width: width * 0.66,
            paddingTop: width * 0.02,
            paddingLeft: width * 0.02,
            paddingRight: width * 0.02,
            fontFamily: 'PoppinsMedium',
            fontSize: 14,
            resize: 'none',
          }}
          placeholder='MESSAGE'
        />
      </div>
      <WideButton text={'CONTACT US'} onPress={() => console.log('tıklandı')} />
    </div>
  );
};

export default ContactFrom;
