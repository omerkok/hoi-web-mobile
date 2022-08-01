import React from 'react';
import {
  Menu,
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import './Header.css';
import logo from '../../images/HoiLogoTop.svg';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  return (
    <>
      <HideOnScroll {...props}>
        <div style={styles.container}>
          <div className='HeaderContainerTop' style={styles.headerContainerTop}>
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
            <div style={{ color: 'transparent', width: width * 0.27 }}></div>
            <IconButton
              style={{
                height: width * 0.05,
                width: width * 0.05,
              }}>
              <Menu
                style={{
                  height: width * 0.05,
                  width: width * 0.05,
                  color: 'white',
                }}
              />
            </IconButton>
            <div style={{ color: 'transparent', width: width * 0.1 }}></div>
          </div>
          <div
            className='HeaderContainerBottom'
            style={styles.headerContainerBottom}>
            <IconButton style={styles.iconButton}>
              <WhatsappOutlined style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <Instagram style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <FacebookOutlined style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <Twitter style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <YouTube style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <LinkedIn style={styles.icon} />
            </IconButton>
          </div>
        </div>
      </HideOnScroll>
    </>
  );
};

export default Header;

const styles = {
  container: {
    height: height * 0.2,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    marginBottom: '7%',
    position: 'fixed',
    zIndex: 99,
  },
  icon: {
    height: width * 0.04,
    width: width * 0.04,
    color: '#779f7d',
    backgroundColor: '#ffffff',
    borderRadius: width * 0.03,
    padding: width * 0.01,
  },
  iconButton: {
    height: width * 0.05,
    width: width * 0.05,
  },
  headerContainerBottom: {
    height: height * 0.07,
    alignItems: 'center',
    backgroundColor: '#779f7d',
    marginLeft: width * 0.05,
    width: width * 0.8,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerContainerTop: {
    height: height * 0.15,
    justifyContent: 'center',
    backgroundColor: '#779f7d',
    width: '100%',
  },
};
