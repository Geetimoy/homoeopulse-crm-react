import './Dashboard.css';

import Footer from './Footer';

import logo from '../images/logo.svg';
import logoDark from '../images/logo-dark.png';
import logoSm from '../images/logo-sm.png';
import logoLight from '../images/logo-light.png';
import profileImg from '../images/profile.png'

import MyCarousel from './MyCarousel';
import ContactForm from './ContactForm';

import SliderRating from './SliderRating';

import React, { useState } from 'react';
import Select from 'react-select';


function Dashboard() {
  const data = localStorage.getItem('myData');
  const obj = JSON.parse(data);

  const handleRatingChange = (value) => {
    console.log('Rating changed:', value);
    // You can handle the rating change here
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return(
    <div id='layout-wrapper'>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <a href="https://demo.bluwebmedia.co.in/homoeopulse_v3/project/crm-tool/doctor-admin-panel/" className="logo logo-dark">
                <span className="logo-sm"> <img src={logo} alt="" height="22"/> </span>
                <span className="logo-lg"> <img src={logoDark} alt="" height="17"/> </span>
              </a>

              <a href="https://demo.bluwebmedia.co.in/homoeopulse_v3/project/crm-tool/doctor-admin-panel/" className="logo logo-light">
                <span className="logo-sm"> <img src={logoSm} alt="" height="22"/> </span>
                <span className="logo-lg"> <img src={logoLight} alt="" height="30"/> </span>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                <i className="mdi mdi-menu"></i>
              </button>
              <p className="mb-0 ml-2">Hi Nisha Soprey</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ml-2">
              <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-magnify"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="dropdown d-none d-lg-inline-block">
              <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>

            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" src={profileImg} alt="Header Avatar"/>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <p className="mb-0 pl-4">Hi Nisha Soprey</p>
                <a className="dropdown-item text-danger" href="/logout"><i className="bx bx-power-off font-size-17 align-middle mr-1 text-danger"></i> Logout</a>
              </div>
            </div>

          </div>
        </div>
      </header>
      <div className='vertical-menu mm-active'>
        <div data-simplebar="init" className="h-100 mm-show">
          Hi Dashboard
          <h1>{obj.first_name}</h1>
        </div>
      </div>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className='row'>
              <div className='col-sm-12'>
                <div className="page-title-box">
                  <h3 className='text-2xl font-normal'>Dashboard</h3>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                  <div className='card'>
                      <div className='card-body'>
                        <h4 className='font-semibold text-xl'>Welcome to HomoeoPULSE Admin</h4>

                        <div className='banner-slider mt-6 mb-6'>
                          <MyCarousel />
                        </div>

                      </div>
                  </div>
              </div>
            </div>
            <div className='md:container'>
              <div className='row'>
                <div className='md:container md:mx-auto'>
                  <ContactForm/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div>
                <h1>Rate this:</h1>
                <SliderRating onChange={handleRatingChange} />
              </div>
            </div>
            <div>
            <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
      />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Dashboard;