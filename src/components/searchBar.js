import React, { Component } from 'react';

// import {Paper, TextField} from "@material-ui/core";


import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
        
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'fade(theme.palette.common.black, 0.15)',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
   
      // marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      marginLeft: '15px',
      height: '94%',
      position: 'absolute',
      // pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgb(164, 163, 170)',
      color: 'rgb(164, 163, 170)'

    },
    inputRoot: {
        // paddingLeft: "15px !important",
        color: 'black',
    },
    inputInput: {
    
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      marginLeft: 50,
      transition: theme.transitions.create('width'),
      width: '200%',
      [theme.breakpoints.up('md')]: {
        width: '65ch',
      },
      border: '1px solid rgb(164, 163, 170)'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  



// class SearchBar extends Component {
//     state = {  
//         searchValue: ''
//     }

//     handleChange = (e) => this.setState({searchValue: e.target.value});
    
//     handleSubmit = (event) => {
//         const {searchValue} = this.state;
//         const {onFormSubmit} = this.props;
//         onFormSubmit(searchValue);
        
//         event.preventDefault();
//     }
//     render() { 
//         return ( 
//             <Paper elevation={5} style={{padding: '20px'}}>
//                 <form onSubmit={this.handleSubmit}>
//                     <TextField fullWidth label="Search..." onChange={this.handleChange} />
//                 </form>
//             </Paper>
//          );
//     }
// }
 
// export default SearchBar;


export default function SearchBar({onFormSubmit}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    const [searchValue, setSearchValue] = React.useState('');
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleChange = (event) => {
        setSearchValue(event.currentTarget.value);
        // this.setState({searchValue: e.target.value});
    }

    const handleSubmit = (event) => {
        // const {searchValue} = this.state;
        // const {onFormSubmit} = this.props;
        onFormSubmit(searchValue);
        
        event.preventDefault();
    }
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="black">
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="black">
            <Badge badgeContent={11} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="black"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <div className={classes.grow}>
        <AppBar position="static" elevation = {0} style={{backgroundColor: 'white'}}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{color: 'black', marginLeft: '10px', marginTop: '2px'}} className={classes.title} variant="h6" noWrap>
              <b>Youtube Clone</b>
            </Typography>
            <div className={classes.search} style={{marginLeft: '6em',}}>
              
              {/* updated */}
              {/* <div >
                <SearchIcon />
              </div> */}
              <form className="container" onSubmit={handleSubmit}>
                <InputBase
                    style={{paddingBottom: 17}}
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                />
                <button style={{color: 'black', cursor: 'pointer',  paddingLeft: 10, paddingRight: 10, marginTop: 20, paddingTop: 8, paddingBottom: 6}} aria-label="search">
                  <SearchIcon style={{marginTop: '-6px', marginBottom: -5}} />
                </button>
              </form>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="black">
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="black">
                <Badge badgeContent={17} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="black"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="black"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }