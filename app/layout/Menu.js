import React, { Component,useState, useEffect, Children } from 'react'
import { useLocation } from 'react-router-dom';
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
=======
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom';
import helpers from '../helpers/Helpers';
import Auth from '../controllers/Auth_Controller';
>>>>>>> Stashed changes
import { getMenu } from '../actions/Layout/Menu'
import propTypes from 'prop-types';
import { connect } from 'react-redux';

function Menu (props) {
  const location = useLocation()
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
        React.useEffect(() => {
          var l = location.pathname;
          $("[href='"+l+"']").parent('li').parent('ul').prev('a').addClass('active')
          $("[href='"+l+"']").parent('li').parent('ul').prev('a').parent('li').addClass('menu-open')
          $("[href='"+l+"']").addClass('active')
                  }, [location])
        const chk_menu = () => {
          var l = location.pathname
          var check = location.pathname.split('/').length;
          if(l == '/' || l.toLowerCase().includes('home') || l == ''){
            $('.nav-sidebar').find('.nav-link').removeClass('active');
            $('.nav-sidebar').find("[href='/Home']").addClass('active');
          }else{
          $('.nav-sidebar').find('.nav-link').removeClass('active');
          $("[href='"+l+"']").addClass('active')
          // if(check > 0){
            $("[href='"+l+"']").parent('li').parent('ul').prev('a').addClass('active')
            $("[href='"+l+"']").parent('li').parent('ul').prev('a').parent('li').addClass('menu-open')
          // }
        }
        }

        function list_to_tree(list) {
          var map = {},
             node, roots = [],
             i;
       
          for (i = 0; i < list.length; i += 1) {
             map[list[i].id] = i; // initialize the map
             list[i]['children'] = []; // initialize the children
          }
       
          for (i = 0; i < list.length; i += 1) {
             node = list[i];
             if (node.parent !== "0") {
                // if you have dangling branches check that map[node.parentId] exists
                list[map[node.parent]]['children'].push(node);
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
        item.icon.includes('far') || item.icon.includes('fas') ? icon = item.icon : (item.icon.includes('fa-circle') ? icon = 'fa fa-circle-o' : icon = "fa "+item.icon+""); 
        return (
<<<<<<< Updated upstream
          <><li className="nav-item"><Link className="nav-link"to={`/${item.href}`}><i className={`nav-icon ${icon}`}></i><p>{item.name}</p></Link></li></>
=======
          item.name == 'Logout' ? <><li className="nav-item"><Link className="nav-link" onClick={() => Auth.logout()} to={`/${item.href}`}><i className={`nav-icon ${icon}`}></i><p>{item.name}</p></Link></li></>:
          <><li className="nav-item"><Link className="nav-link" to={`/${item.href}`}><i className={`nav-icon ${icon}`}></i><p>{item.name}</p></Link></li></>
>>>>>>> Stashed changes
        );
      };
       const MultiLevel = ({ item }) => {
          const { children: children } = item;        
          var icon;
          item.icon.includes('far') || item.icon.includes('fas') ? icon = item.icon : (item.icon.includes('fa-circle') ? icon = 'fa fa-circle-o' : icon = "fa "+item.icon+""); 
          return (
<<<<<<< Updated upstream
                  <li className="nav-item">
=======
            <li className="nav-item">
>>>>>>> Stashed changes
                  <a className="nav-link parent" href={'/'+item.href} onClick={event.preventDefault()}><i className={`nav-icon ${icon}`}></i><p>{item.name}<i className="right fas fa-angle-left"></i></p></a>
                  <ul className="nav nav-treeview">
              {children.map((child, key) => (
                    <MenuItem key={key} item={child} />
                    ))}
<<<<<<< Updated upstream
                    </ul>
=======
                  </ul>
>>>>>>> Stashed changes
                  </li>
          );
        };
        return (<div>
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
        <img src="/static/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
<<<<<<< Updated upstream
        <Link to="#" className="d-block">Salik Salman</Link>
=======
        <Link to="#" className="d-block">{helpers.getUser().name}</Link>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <ul className="nav nav-pills nav-sidebar nav-child-indent flex-column" data-widget="treeview" role="menu">
    {menu.map((item, key) => <MenuItem key={key} item={item} />)}
    </ul>
=======
    <ListGroup as="ul" className="nav nav-pills nav-sidebar nav-child-indent flex-column" data-widget="treeview">
    {menu.map((item, key) => <MenuItem key={key} item={item} />)}
    </ListGroup>
>>>>>>> Stashed changes
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
<div className='d-none'>{setTimeout(() => {
  $('.btn-sidebar').attr('disabled',true)
            function sidebar_search(){
              $('.sidebar-search-results').hide()
              var inp = $('[data-widget="sidebar-search"]').find('input').val().toLowerCase();
                            if($('[data-widget="sidebar-search"]').find('input').val().length > 0){
                              $('.btn-sidebar').attr('disabled',false)
              $('.nav-sidebar .nav-link').each(function(index,data){
              if(inp == ''){
              $('.nav-sidebar .nav-link').show()
              }
              if(inp.length > 0){
              if($(data).attr('href').toLowerCase().includes(inp) == false){
                  $('.nav-sidebar .nav-link').eq(index).hide()
              }else{
              $(data).show();
              $(data).parents().show();
              }
              }
              })
              if($('.nav-sidebar').find('a:visible').length <= 0){
              $('.sidebar-search-results').show()
              }
              $('.nav-sidebar').find('.parent:visible').parent('.nav-item').addClass('menu-open')
              $('.btn-sidebar i').removeClass('fas fa-fw fa-search').addClass('fas fa-fw fa-times');
              }else{
              $('.nav-sidebar .nav-link').show()
              $('.nav-treeview').hide()
              $('.nav-item').removeClass('menu-is-opening')
              $('.nav-item').not($('.nav-link.active').parents()).removeClass('menu-open')
              $('.btn-sidebar').attr('disabled',true)
              }
              } 
              $('[data-widget="sidebar-search"]').find('input').on('input',function() {
              sidebar_search();
              });
              $('.btn-sidebar').click(function(){
              event.preventDefault();
              $('.sidebar-search-input').val('');
              sidebar_search()
              })
            chk_menu()
          }, 0.5)
        }
        </div>
            </div>
        )
    }
    const mapStateToProps = state => ({
      menu: state.menu.menu
    })
    
    export default connect(mapStateToProps, {getMenu})((Menu));