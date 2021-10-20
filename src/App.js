import './App.css';
import data from './data';
import Display from './Display';
import React from 'react';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="https://consumer-web-ae.qac24svc.dev/ae"><img className="logo" src="https://static.cars24.com/cars24/images/cars-logo.png?v=1" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://consumer-web-ae.qac24svc.dev/ae/faq">FAQ</a>
              </li>
              <li className="_1inZ-">
                <a href="tel:042909641" className="_2VLDK">042909641</a><small>  8am - 10pm </small>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div className="container1"><div className="_1_rE8"><nav aria-label="breadcrumb"><ul className="breadcrumb"><li className="breadcrumb-item"><a>Home</a></li><li className="breadcrumb-item">Used Cars in Dubai</li></ul></nav></div></div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Find your dream car with us" aria-label="Search" />
      </form>
      <h1 className="qf_dm">Used Cars In Dubai</h1>
      <div className="col-sm-3 rounded">
    {data.map((object, index) => (
      <Display
        key={index}
        index={index}
        imgUrl = {data[index].mainImage.path}
        distTravelled = {data[index].odometerReading}
        carName = {data[index].make}
      />
  ))}
    </div>
    </div>

  );
}
const container = document.querySelector(".cars");
let limit = 5;
let pageCount = 1;
let postCount = 1;

/**const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}$`)
  console.log(response);
  const data = await response.json();
  console.log(data);

  data.map((curElm, index) => {
    const htmldata = `
    
    `
  }
  )
}

getPost();*/
export default App;



/**<div class = "cars">
      <div class = "image">
        <img className="_3oX3Z img-fluid rounded" src="https://fastly-production.24c.in/inspection-car/appointments/spincar/qa/AE/AE_CAR_9714804977/POST_REFURB/1629815477986/cu-2.jpg?w=397&amp;auto=format" alt="2018 Hyundai Accent GL 1.6 L" />
      </div>

      <div class = "title">
        <img className = "heart" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/e8333986534ba8a423ce86582be0003d.svg" alt="Add to wishlist"/>
        <div className="_3TSwN">
          <h2 className="RZ4T7">2018 Hyundai Accent</h2>
          <p className="_1i1E6">GL 1.6 L |<span>  80,862 km</span></p>
        </div>
        <hr/>
      </div>

      <div class = "info">
        <div className="_3aEWp">
          <div className="_3SXwZ"><strong>AED 482<span>/month</span></strong></div><div className="aApXW"><span>AED 30,137</span></div></div>
        <span className="_2xBAf">AED 6,027 downpayment</span>
      </div>
    </div> */