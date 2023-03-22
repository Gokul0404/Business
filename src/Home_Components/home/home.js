
import React from 'react'
import { Image } from 'react-bootstrap';



import '../home/home.css'

export default function Home() {
  return (
    <div className="Home_Main" id='home'>
      <div className="Home_Submain d-flex">
        <div className='Home_Third_Layer'>
          <div className="Home_Modul position-absolute ">
            <Image src={require("../../modul.png")} className="home_image" />
          </div>

          <div className="Home_Subcontents w-100 position-relative ">
            <span className="Home_Heading_Span">
              <h1 className="Title fw-bold">
                Find Your <span className="Title_a">Dream Job</span> Now It's
                Easy.
              </h1>
            </span>

            <p>
              Thousands of Jops here. Find Your New Job Today New Job Posting
              Today.
            </p>

            <div className=" pt-5">
              <div className="bg-white Home_Search_contents d-flex justify-content-evenly align-items-center">
                <span>
                  <i class="bi bi-search fs-4 pe-2"></i>

                  <input
                    type="text"
                    placeholder=" Job title Or Keyword"
                    className="border-0 Text_Box"
                  />
                </span>
                <span>
                  <i class="bi bi-geo-alt fs-4"></i>{" "}
                  <input
                    type="text"
                    placeholder="  New York, USA"
                    className="border-0 Text_Box"
                  />
                </span>

                <button className="Search_btn text-white">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
