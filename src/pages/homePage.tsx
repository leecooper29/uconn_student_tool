import "./css/homepage.css";
// @ts-ignore: allow importing image asset without type declarations
// import image_one from "../assets/husky.jpg"

function HomePage() {
  return (
    <>
      <section>
        <div className="banner">
          </div>
          {/* <img src={image_one} alt="UConn Husky" className="banner-image" /> */}
          <div className="main-grid">
            <div className="item-">
           <h1>Welcome to <br></br>the UConn Student Tool</h1>
            <p>
              The UConn Student Tool is designed to help students navigate their academic journey at the University of Connecticut. 
              Our platform provides resources, tools, and information to enhance your student experience.
            </p>
              
            </div>
            <div className="item">
              <p>(recent events below) placeholder image</p>
            </div>
          </div>
          {/* <h2>Contact Us</h2>
            <p>
              If you have any questions or need support, please reach out to our team at <a href="mailto:support@uconn.edu">support@uconn.edu</a>.
            </p> */}
        </section>
    </>
  );
}
export default HomePage;
