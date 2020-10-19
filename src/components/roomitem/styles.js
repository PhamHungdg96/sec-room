export const styles=(theme)=>({
    paper:{
        width:"605px",
    },
    img:{
        width:"140px",
        height:"140px",
        objectFit:"cover",
        borderRadius:"7px",
        padding:"1px"
    },
    Content:{
        textAlign:"center",
    },
    processing:{
        marginLeft:"auto",
        width:"15%",
        paddingTop:theme.spacing(1),
        paddingRight:theme.spacing(2),
    },
    action:{
        borderTop:"solid 1px #efefef",
        backgroundColor:"#f7f7f7",
        borderBottomLeftRadius:"inherit",
        borderBottomRightRadius:"inherit",
        padding:theme.spacing(0.75)
    },
    actionLink:{
        backgroundColor: '#18212c',
        color: "#b0b4b7",
        padding: '2px',
        borderRadius: '4px',
        textDecorationLine: 'none',
    },
    views:{
        marginLeft:"auto"
    }
})