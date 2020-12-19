export const lightColor = 'rgba(255, 255, 255, 0.7)';

export const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  NotificationPopup:{
        position:'absolute',
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: 'translate3d(692px, 56px, 0px)',
  }
});