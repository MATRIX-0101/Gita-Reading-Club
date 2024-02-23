import React from 'react'
import '../styles/courseStyle/assets/css/fontawesome.css'
import '../styles/courseStyle/assets/css/templatemo-digimedia-v3.css'
import '../styles/courseStyle/assets/css/animated.css'
// import '../styles/courseStyle/assets/css/owl.css'
// import '../styles/courseStyle/assets/js/owl-carousel.js'
import '../styles/courseStyle/assets/js/animation.js'
import '../styles/courseStyle/assets/js/imagesloaded.js'
// import '../styles/courseStyle/assets/js/custom.js'
// import '../styles/courseStyle/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../styles/courseStyle/vendor/jquery/jquery.min.js'
import '../styles/courseStyle/vendor/bootstrap/css/bootstrap.min.css'
import logo from '../styles/courseStyle/assets/images/logo-v3.png'
// import '../styles'

export default function Header() {
  return (
    <>
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            {/* <!-- ***** Logo Start ***** -->} */}
            <a href="index.html" class="logo">
              <img src={logo} alt=""/>
            </a>
            {/* <!-- ***** Logo End ***** --> */}
            {/* <!-- ***** Menu Start ***** --> */}
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section"><a href="#services">Services</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Projects</a></li>
              <li class="scroll-to-section"><a href="#blog">Blog</a></li>
              <li class="scroll-to-section"><a href="#contact">Contact</a></li> 
              <li class="scroll-to-section"><div class="border-first-button"><a href="#contact">Free Quote</a></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}
