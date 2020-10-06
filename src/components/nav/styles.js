export const styles = (theme) => ({
    menuHeader: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    menuHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemmenu: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
    },
    itemmenularge: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 32,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      backgroundColor: '#132d54',
      color:"#eee"
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(0),
    },
});