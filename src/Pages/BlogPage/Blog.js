import React from 'react';
import IconButton from '@mui/material/IconButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogImage from '../../images/BlogImage.png';
import DhiFu2 from '../../images/DhiFue2.png';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const BlogContent = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <img
        src={BlogImage}
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
          fontSize: 35,
          marginBottom: height * 0.02,
          width: '50%',
        }}>
        {'WOMAN HAIR PROBLEMS'}
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
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          marginBottom: height * 0.02,
          width: '50%',
        }}>
        {'IMPORTANT'}
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
      <img
        src={BlogImage}
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
          fontSize: 35,
          marginBottom: height * 0.02,
          width: '50%',
        }}>
        {'RESULT'}
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
      </p>
      <span
        style={{
          color: '#1f232a',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          marginBottom: height * 0.02,
          width: '50%',
        }}>
        {'SUGGESTIONS'}
      </span>
      <p
        style={{
          fontFamily: 'PoppinsRegular',
          width: width * 0.8,
          color: '#1f232a',
          fontSize: 18,
          marginBottom: height * 0.15,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'CAUSES OF HAIR LOSS'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'FIRST THREE MONTHS'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'FIRST WASH'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'DONOR AREA'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'AFRO TYPE'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'WOMAN HAIR TRANSPLANT'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'BEFORE OPERATION'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          textDecoration: 'underline',
          marginBottom: height * 0.07,
          width: '90%',
        }}>
        {'NUTRITION AND HAIR'}
      </span>
      <span
        style={{
          color: '#7d575e',
          fontFamily: 'PlayfairDisplayBold',
          fontSize: 35,
          marginBottom: height * 0.15,
          width: '90%',
        }}>
        {'MORE'}
      </span>
    </div>
  );
};

const Blog = () => {
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
      <BlogContent />
      <Footer />
    </div>
  );
};

export default Blog;
