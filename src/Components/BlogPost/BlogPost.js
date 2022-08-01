import React from 'react';
import Blog1 from '../../images/Blog1.png';
import Blog2 from '../../images/Blog2.png';
import Blog3 from '../../images/Blog3.png';

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

const BlogPost = () => {
  return (
    <div style={styles.container}>
      <div style={styles.subContainerBlock}>
        <div style={styles.block1}></div>
        <div style={styles.block2}></div>
      </div>
      <div style={styles.subContainerPost}>
        <div style={styles.imageContainer}>
          <img src={Blog2} style={styles.image} alt='Hoi'></img>
          <span style={styles.title}>
            {'GRAFT'}
            <br />
            {' SIZE'}
          </span>
          <span style={styles.text}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            }
          </span>
        </div>
        <span style={styles.date}>
          {'02'}
          <br />
          {'MAR'}
          <br />
          {'22'}
        </span>
      </div>
      <div style={styles.subContainerPost}>
        <div style={styles.imageContainer}>
          <img src={Blog3} style={styles.image} alt='Hoi'></img>
          <span style={styles.title}>
            {'GRAFT'}
            <br />
            {' SIZE'}
          </span>
          <span style={styles.text}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </span>
        </div>

        <span style={styles.date}>
          {'02'}
          <br />
          {'MAR'}
          <br />
          {'22'}
        </span>
      </div>
      <div style={styles.subContainerPost}>
        <div style={styles.imageContainer}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <span style={styles.title}>
            {'GRAFT'}
            <br />
            {' SIZE'}
          </span>
          <span style={styles.text}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
            }
          </span>
        </div>
        <span style={styles.date}>
          {'02'}
          <br />
          {'MAR'}
          <br />
          {'22'}
        </span>
      </div>
    </div>
  );
};

export default BlogPost;

const styles = {
  container: {
    width: '100%',
    height: height * 0.9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop:'5%'
  },
  subContainerBlock: {
    width: '100%',
    height: height * 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
  },
  block1: { width: '30%', height: height * 0.8, backgroundColor: '#7d575e' },
  block2: { width: '15%', height: height * 0.8, backgroundColor: '#7d575e' },
  subContainerPost: {
    width: '88%',
    height: height * 0.3,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '2%',
  },
  image: {
    height: height * 0.26,
    width: height * 0.26,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 3,
  },
  imageContainer: { height: height * 0.26, width: '80%', position: 'relative' },
  title: {
    color: '#1f232a',
    position: 'absolute',
    bottom: 0,
    left: 5,
    zIndex: 4,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: 30,
  },
  text: {
    color: '#1f232a',
    position: 'absolute',
    top: height * 0.03,
    right: 5,
    zIndex: 4,
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    width: '90%',
  },
  date: {
    color: '#ffffff',
    zIndex: 4,
    fontFamily: 'PlayfairDisplaybOLD',
    fontSize: 30,
  },
};
