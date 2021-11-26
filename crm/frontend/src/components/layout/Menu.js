import React, { Component,useState, useEffect, Children } from 'react'
import { Link } from 'react-router-dom';
import { getMenu } from '../../actions/Menu'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { linkClasses } from '@mui/material';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';

function Menu (props) {
        Menu.propTypes = {
          getMenu: propTypes.func.isRequired,
      }
            const [count, setCount] = React.useState(0);
      var prev = [];
        useEffect((prevprops) => {
          const st = props.menu;
          if(st !== prev){
          props.getMenu();
          prev = prev.push(props.menu);
          setCount(100);
          }
        }, []);  

        const chk_menu = () => {
          var l = location.href.split('#').pop().split('/');
          l.shift();
          if(l[0] == '' || l[0] == 'Home'){
            $('.nav-sidebar').find('.nav-link').removeClass('active');
            $('.nav-sidebar').find("[href='#/Home']").addClass('active');
          }else{
          $('.nav-sidebar').find('.nav-link').removeClass('active');
            $(`[href='${unescape(l[0])}']`).addClass('active')
            $(`[href='${'#/'+unescape(l[0]+'/'+l[1])}']`).addClass('active')
        }
      }
        // $(window).on('hashchange', function() {
        //   var l = location.href.split('#').pop().split('/');
        //   l.shift();
        //     $(`[href='${unescape(l[0])}']`).addClass('active')
        //     $(`[href='${unescape(l[0]+'/'+l[1])}']`).addClass('active')
        //   })

        function list_to_tree(list) {
          var map = {},
             node, roots = [],
             i;
       
          for (i = 0; i < list.length; i += 1) {
             map[list[i].Menu_id] = i; // initialize the map
             list[i]['children'] = []; // initialize the children
          }
       
          for (i = 0; i < list.length; i += 1) {
             node = list[i];
             if (node.Parent_id !== "0") {
                // if you have dangling branches check that map[node.parentId] exists
                list[map[node.Parent_id]]['children'].push(node);
             } else {
                roots.push(node);
             }
          }
          return roots;
       }
       function hasChildren(item) {
        const { children: children } = item;
      
        if (children === undefined) {
          return false;
        }
      
        if (children.constructor !== Array) {
          return false;
        }
      
        if (children.length === 0) {
          return false;
        }
      
        return true;
      }    
       const MenuItem = ({ item }) => {
        const Component = hasChildren(item) ? MultiLevel : SingleLevel;
        return <Component item={item} />;
      };
       var menu = list_to_tree(props.menu);
       const SingleLevel = ({ item }) => {
        var icon;
        item.Menu_icon.includes('far') || item.Menu_icon.includes('fas') ? icon = item.Menu_icon : (item.Menu_icon.includes('fa-circle') ? icon = 'fa fa-circle-o' : icon = "fa "+item.Menu_icon+""); 
        return (
          <><li className="nav-item"><a className="nav-link"href={`#/${item.Menu_href}`}><i className={`nav-icon ${icon}`}></i><p>{item.Menu_name}</p></a></li></>
        );
      };
       const MultiLevel = ({ item }) => {
          const { children: children } = item;        
          var icon;
          item.Menu_icon.includes('far') || item.Menu_icon.includes('fas') ? icon = item.Menu_icon : (item.Menu_icon.includes('fa-circle') ? icon = 'fa fa-circle-o' : icon = "fa "+item.Menu_icon+""); 
          return (
                  <li className="nav-item">
                  <a className="nav-link parent" href={item.Menu_href}><i className={`nav-icon ${icon}`}></i><p>{item.Menu_name}<i className="right fas fa-angle-left"></i></p></a>
                  <ul className="nav nav-treeview">
              {children.map((child, key) => (
                    <MenuItem key={key} item={child} />
                    ))}
                    </ul>
                  </li>
          );
        };
        return (
            <div>
                  {setTimeout(() => {
                     $('[data-widget="sidebar-search"]').SidebarSearch();
                     chk_menu()
                  }, 0.5)
                  }
               <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
    <img src="/static/img/logo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">PY-CRM</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="static/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <Link to="#" className="d-block">Salik Salman</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar sidebar-search-input" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar nav-child-indent flex-column" data-widget="treeview" role="menu">
    {menu.map((item, key) => <MenuItem key={key} item={item} />)}
    </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
            </div>
        )
    }
    const mapStateToProps = state => ({
      menu: state.menu.menu
    })
    
    export default connect(mapStateToProps, {getMenu})((Menu));