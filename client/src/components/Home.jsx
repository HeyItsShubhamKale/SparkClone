import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import oneImage from "../images/one.jpg";
import twoImage from "../images/two.jpg";
import threeImage from "../images/three.jpg";
import creativityImage from "../images/creativity.png";
import guranteeImage from "../images/guarantee.png";
import supportImage from "../images/support.png";
import testiOne from "../images/testi1.jpg";
import testiTwo from "../images/testi2.jpg";
import testiThree from "../images/testi3.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
      <Carousel fade interval={3000} wrap={true} pause={false}  controls={false} indicators={false}>
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${oneImage})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${twoImage})` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${threeImage})` }}
          />
        </Carousel.Item>
      </Carousel>
    </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <h2 className="section-title">Our Courses</h2>
        <div className="course-list">
          <div className="course-item">
            <h3>Web Development</h3>
            <p>Complete Training to become Full stack developer.Static & dynamic Web Page design & Development
               Program Covers HTML5 – CSS3 Along with Typescript, Angular 6.0, MongoDB, NodeJS
               Real Time Projects, Industry Expert as a Training Faculty</p>
          </div>
          <div className="course-item">
            <h3>Data Analytics</h3>
            <p>This data analytics course provides a comprehensive understanding of the principles and techniques 
              used to extract meaningful insights from raw data, enabling you to collect, clean, transform,
               analyze, and visualize data to inform strategic decision-making across various industries.</p>
          </div>
          <div className="course-item">
            <h3>JAVA </h3>
            <p>"This course provides a comprehensive introduction to Java, a versatile, object-oriented 
              programming language renowned for its "write once, run anywhere" capability, enabling you 
              to develop cross-platform applications for web, mobile, and enterprise environments.</p>
          </div>
        </div>
      </section>



       {/* Our Highlights Section */}
       <section id="highlights" className="highlights">
        <h2 className="section-title">Our Highlights</h2>
        <div className="highlight-list">
          <div className="highlight-item">
            <img src={creativityImage} alt="Quality" />
            <h3>Top Quality</h3>
            <p>We prioritize excellence in everything we offer, from training to resources.</p>
          </div>
          <div className="highlight-item">
            <img src={guranteeImage} alt="Innovation" />
            <h3>Innovation</h3>
            <p>Stay ahead of the curve with our cutting-edge solutions and approaches.</p>
          </div>
          <div className="highlight-item">
            <img src={supportImage} alt="Support" />
            <h3>24/7 Support</h3>
            <p>Our team is always available to assist you, ensuring a seamless experience.</p>
          </div>
        </div>
      </section>

      {/* WHY SELECT SPARK Section */}
      <section id="why-select-spark" className="why-select-spark">
        <h2 className="section-title">WHY SELECT SPARK?</h2>
        <div className="why-list">
          <div className="why-item">
            <h3>Expert Trainers</h3>
            <p>Our courses are led by industry experts with years of experience.</p>
          </div>
          <div className="why-item">
            <h3>Cutting-Edge Curriculum</h3>
            <p>Stay ahead with courses designed to meet the latest industry standards.</p>
          </div>
          <div className="why-item">
            <h3>Flexible Learning</h3>
            <p>Learn at your own pace with online and offline course options.</p>
          </div>
          <div className="why-item">
            <h3>Career Support</h3>
            <p>We provide guidance and support to help you land your dream job.</p>
          </div>
          <div className="why-item">
            <h3>State-of-the-Art Resources</h3>
            <p>Access advanced tools and resources for an unparalleled learning experience.</p>
          </div>
          <div className="why-item">
            <h3>Proven Track Record</h3>
            <p>Thousands of professionals have upskilled with Spark to achieve their goals.</p>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section id="testimonials" className="testimonials">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <img src={testiOne} alt="Client 1" />
            <p>"Spark3e transformed our business. Highly recommend!"</p>
            <h4>- Karan Kumar</h4>
          </div>
          <div className="testimonial-item">
            <img src={testiTwo} alt="Client 2" />
            <p>"Amazing services with a dedicated team!"</p>
            <h4>- Riya Rajan</h4>
          </div>
          <div className="testimonial-item">
            <img src={testiThree} alt="Client 3" />
            <p>"A perfect blend of innovation and support."</p>
            <h4>- Ajay Dutt</h4>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-us">
        <h2 className="section-title">About Us</h2>
        <p>
          Spark is dedicated to delivering the best-in-class solutions for education, 
          training, and corporate growth. With a team of experienced professionals, 
          we bring innovative solutions that meet the demands of the ever-changing industry.
        </p>
        <p>
          Our vision is to empower individuals and organizations with the tools and knowledge 
          they need to excel. From top-notch courses to expert-led training sessions, 
          we aim to create a lasting impact.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="hhttps://www.facebook.com/SPARK3E/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://x.com/SPARK3E/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com/sparkpune/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>

    </>
  );
};

export default Home;
