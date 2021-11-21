import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { getMenu } from '../../actions/Menu'
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
function Header (props){
      Header.propTypes = {
        getMenu: propTypes.func.isRequired,
    }
      const [count, setCount] = React.useState(0);
    var prev = [];
      React.useEffect((prevprops) => {
        const st = props.menu;
        if(st !== prev){
        props.getMenu();
        prev = prev.push(props.menu);
        setCount(100);
        }
      }, []);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
const anchor = 'left';
  const toggleDrawer = (Anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ["left"]: open });
  };
  const list = () => (

    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
      {props.menu.map(menu => {
        console.log(menu.Menu_is_active);
    if(menu.Menu_is_active == 1)
       return <ListItem button component={Link} key={menu.Menu_id} to={menu.Menu_href}>
              <ListItemText primary={menu.Menu_name} />
              </ListItem>
})}
      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer("left", true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CRM
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>      
        <React.Fragment key="left">
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

const mapStateToProps = state => ({
  menu: state.menu.menu
})

export default connect(mapStateToProps, {getMenu})((Header));