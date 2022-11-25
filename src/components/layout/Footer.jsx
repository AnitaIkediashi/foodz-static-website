import React from 'react'
import {Link} from 'react-router-dom'
import { accordion } from '../../data'
import footerLogo from '../../images/Logo.png'
import Accordion from '../Accordion'


const Footer = () => {
  return (
    <>
      <footer className="max-w-[1440px] mx-auto lg:px-[5%] px-8 md:py-3 lg:py-0 lg:h-[22.19rem] hidden md:flex items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-2 md:gap-4">
          {/* col-1 */}
          <div className="flex flex-col gap-5 text-center items-center">
            <Link to="/">
              <img src={footerLogo} alt="" />
            </Link>
            <p className="text-sm text-color-black-100">
              Explore your Taste with speacial food in the special place, that
              will make you happy. I try to write some thing without lorem isum.
            </p>
          </div>
          {/* col-2 */}
          <div className="flex flex-col lg:items-end items-start gap-3">
            <h4 className="text-black font-medium text-base lg:mr-24">
              Support
            </h4>
            <ul>
              <li className="mb-4 text-color-black-100">Help Centre</li>
              <li className="mb-4 text-color-black-100">Safety information</li>
              <li className="mb-4 text-color-black-100">
                Cancellation options
              </li>
              <li className=" text-color-black-100">Report Complaint</li>
            </ul>
          </div>
          {/* col-3 */}
          <div className=" flex flex-col lg:items-end items-start gap-3 ">
            <h4 className="text-black font-medium text-base lg:mr-11">
              Community
            </h4>
            <ul>
              <li className="mb-4 text-color-black-100">Customer Review</li>
              <li className=" text-color-black-100">Newsletter</li>
            </ul>
          </div>
          {/* col-4 */}
          <div className=" flex flex-col lg:items-end items-start gap-3 ">
            <h4 className="text-black font-medium text-base lg:mr-6">About</h4>
            <ul>
              <li className="mb-4 text-color-black-100">Our Chef</li>
              <li className="mb-4 text-color-black-100">Careers</li>
              <li className="mb-4 text-color-black-100">Blog</li>
              <li className=" text-color-black-100">Contact</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* for mobile */}
      <div className="max-w-[767px] mx-auto px-8 md:hidden h-full pt-4 pb-8 ">
        <div className='flex flex-col gap-5 items-center text-center mb-11'>
          <Link to="/">
            <img src={footerLogo} alt="" />
          </Link>
          <p className="text-sm text-color-black-100">
            Explore your Taste with speacial food in the special place, that
            will make you happy. I try to write some thing without lorem isum.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 items-start">
          {
            accordion.map((items, idx) => {
              return (
                <Accordion items={items} key={idx} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Footer