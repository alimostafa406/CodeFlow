/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

      <div className='w-screen h-[60vh] bg-white'>

      </div>
          <footer>
    <div className="bg-custom-dark opacity-70 py-4 text-gray-600">
      <div className="container md:px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between text-white">
          <div className="md:px-4 my-4 w-full xl:w-1/5">
            <Link to={"/"} href="/" className="block w-56 mb-10">
              <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(0 -75)">
                    <g transform="translate(0 75)">
                      <rect width="512" height="512" rx="128" fill="#3D5AFE"></rect>
                      <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                      <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                      <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                    </g>
                    <text fill="white" fontFamily="Nunito-Bold, Nunito" fontSize="510" fontWeight="bold">
                      <tspan x="654" y="518">DEV FLOW</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </Link>
            <p className="text-justify">
            DevFlow is where innovation meets inspiration—a digital hub designed for developers to unleash their full potential. Imagine a world where creativity flows effortlessly, every line of code tells a story.
            </p>
          </div>

          <div className="md:px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
            </div>
            <ul className="leading-8">
              <li><Link to={'/about'} href="#" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to={'/services'} href="#" className="hover:text-blue-400">Services</Link></li>
              <li><Link to={'/technology'} href="#" className="hover:text-blue-400">Technology</Link></li>
              <li><Link to={'/contact'} href="#" className="hover:text-blue-400">Contact Us</Link></li>

            </ul>
          </div>

          <div className="md:px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-blue-400">Getting Started With HTML and CSS</a></li>
              <li><a href="#" className="hover:text-blue-400">What Is Flex And When to Use It?</a></li>
              <li><a href="#" className="hover:text-blue-400">How TailwindCSS Can Help Your Productivity?</a></li>
              <li><a href="#" className="hover:text-blue-400">5 Tips to Make Responsive Website</a></li>
              <li><a href="#" className="hover:text-blue-400">See More</a></li>
            </ul>
          </div>

          <div className="md:px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
            </div>
            <div className="flex">
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.7-27.6-62.3-36.4-97.8-36.4-39.1 0-68.8 16.5-92.8 40.5-23.7 23.8-31.7 54.7-31.7 84.9s10.7 60.5 34.6 84.7c24.5 24.7 56.6 40.3 95.2 40.3 28.3 0 51.7-7.2 68.3-20.2v-67.2c-13.1 8.7-29.5 13.8-47.6 13.8-41.7 0-75.6-33.9-75.6-75.6 0-41.7 33.9-75.6 75.6-75.6 12.4 0 25.4 3.3 35.8 9.2 10.4 6.1 16.5 16.7 16.5 27.5v58.8h60.6v-7.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-4 text-sm text-gray-500">
          &copy; Dev Flow, Inc. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer