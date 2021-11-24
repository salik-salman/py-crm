import React, { Component,useState, useEffect, Children } from 'react'
import { Link } from 'react-router-dom';
import { getMenu } from '../../actions/Menu'
import propTypes from 'prop-types';
import { connect } from 'react-redux';

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

       function create_list(arr, urutan)
       {
           var html;
           if (urutan == 0) {
               html = "<ul class='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'><li class='header'></li>";
           } else {
               html = "<ul class='nav nav-treeview'>";
           }

               arr.forEach(v => {
                 if (v['children'].length > 0){
                     var icon;
                   html += "<li class='nav-item'>";
                   v['Menu_icon'].includes('far') || v['Menu_icon'].includes('fas') ? icon = v['Menu_icon'] : icon = "fa "+v['Menu_icon']+""; 
                   html += '<a class="nav-link"href="javascript:void(0);"><i class="nav-icon '+icon+'"></i><p>'+v['Menu_name']+'</p></a>';
                   html += create_list(v['children'], 1);
                   html += '</li>';
               } else {
                   html += '<li class="nav-item"><a class="nav-link" href="#/'+v["Menu_href"]+'">';
                   if (urutan == 0) {
                     var icon;
                    v['Menu_icon'].includes('far') || v['Menu_icon'].includes('fas') ? icon = v['Menu_icon'] : icon = "fa "+v['Menu_icon']+""; 
                    html += "<i class='nav-icon "+icon+"'></i>";
                   }
                   if (urutan == 1) {
                       html += '<i class="nav-icon fa fa-circle-o"></i>';
                   }
                   html += '<P>'+v["Menu_name"]+'</P></a></li>';
               }
           });
           html += '</ul>';
           return html;
       }
       var menu = list_to_tree(props.menu);
      //  console.log()
$('.mt-2').append(create_list(menu,0));
$('[data-widget="sidebar-search"]').SidebarSearch();
        return (
            <div>
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
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <Link to="#" className="d-block">Salik Salman</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
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