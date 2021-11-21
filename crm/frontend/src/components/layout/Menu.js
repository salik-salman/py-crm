import React, { Component,useState, useEffect } from 'react'
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
        React.useEffect((prevprops) => {
          const st = props.menu;
          if(st !== prev){
          props.getMenu();
          prev = prev.push(props.menu);
          setCount(100);
          }
        }, []);  
  const list = () => (
      props.menu.map(menu => {
        console.log(menu.Menu_is_active);
        return(
          <li className="nav-item">
          <Link to={menu.Menu_href} className="nav-link">
            <i className="far fa-circle nav-icon"></i>
            <p>{menu.Menu_name}</p>
          </Link>
          {menu.Menu_type !== 'single' ?  <ul className="nav nav-treeview">
        <li className="nav-item">
        <Link to={menu.Menu_href} className="nav-link">
          <i className="far fa-circle nav-icon"></i>
          <p>{menu.Menu_name}</p>
        </Link>
      </li>
      </ul> : ''}
        </li>
        )
})
  );
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
        <Link to="#" className="d-block">Alexander Pierce</Link>
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
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
     with font-awesome or any other icon font library */}
       {list()}
        <li className="nav-item">
          <Link to="/pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Widgets
              <span className="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>
        <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/pages/examples/invoice.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Invoice</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/profile.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Profile</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/e-commerce.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>E-commerce</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/projects.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Projects</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/project-add.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Project Add</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/project-edit.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Project Edit</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/project-detail.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Project Detail</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/contacts.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Contacts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/faq.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>FAQ</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pages/examples/contact-us.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Contact us</p>
                </Link>
              </li>
            </ul>
          </li>
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