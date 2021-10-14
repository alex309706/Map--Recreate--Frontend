import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Link } from 'react-router-dom';

const images = [
  {
    url: 'https://mcdn.tvzvezda.ru/storage/default/2020/10/10/e3eafaa5ebf3435d901074ed610cf97c.jpg',
    title: 'Командующие',
    width: '20%',
    urlTo:'/Commanders'
  },
  {
    url: 'https://narkompoisk.ru/upload/000/u2/b/0/1418-662315413141154131541434542554.jpg',
    title: 'Подразделения',
    width: '20%',
    urlTo:'/Subdivisions'
  },
  {
    url: 'https://skr.su/uploaded/31/b3/3d/46fe7e08acf175cdc9d3e21596.jpeg',
    title: 'Местоположение',
    width: '20%',
    urlTo:'/Locations'
  },
  {
    url: 'https://gdb.rferl.org/AD541CA2-FCF7-451D-812C-52B89B7EB348_cx11_cy10_cw89_w1080_h608.jpg',
    title: 'Актуализированные данные',
    width: '20%',
    urlTo:'/ActualData'
  },
  {
    url: 'https://petroleks.ru/worldwars/1941_1.jpg',
    title: 'Карта',
    width: '20%',
    urlTo:'/'
  },
          

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 220,
    width: '100%',
    marginTop:'150px'
  },
  image: {
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  linkText:
  {
    color:'white'
  }
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
             <Link to={image.urlTo} className={classes.linkText}> 
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
           </Link> 
          </span>
        </ButtonBase>
      ))}
    </div>

  );
}