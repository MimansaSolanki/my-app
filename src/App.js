import './App.css';
import React,{ Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useState, useEffect } from 'react';
import Axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasmore] = useState(true);
  useEffect(() => (getItems()), []);

  const options = {
    method: 'GET',
    headers: { 
      X_COUNTRY: "AE",
      X_VEHICLE_TYPE: "CAR"
    },
  };  
  const getItems = async (page) => {
      Axios.get(`https://listing-service.qac24svc.dev/v1/vehicle?sf=city:DU_DUBAI&size=25&spath=buy-used-cars-dubai&variant=filterV3&page=${page}`,options)
      .then((response) => {
        setHasmore(false);
        setItems([...items, ...response.data.results]);
    });
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="https://consumer-web-ae.qac24svc.dev/ae"><img className="logo" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/42a884476ab8ee4a3642ef07389f1a63.svg" alt="logo" /></a>
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
        <InfiniteScroll
          pageStart={0}
          loadMore={getItems}
          hasMore={true || false}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {items.map((item) => {
            return <div className="col-sm-3 rounded">
              <div className="cars m-2">
                <div className="image">
                  <img className="_3oX3Z img-fluid rounded" src={`https://fastly-production.24c.in/${item.mainImage.path}`} />
                </div>

                <div className="title">
                  <img className="heart" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/e8333986534ba8a423ce86582be0003d.svg" />
                  <div className="_3TSwN">
                    <h2 className="RZ4T7">{item.year} {item.make} {item.model}</h2>
                    <p className="_1i1E6">{item.variant} |<span>  GCC Specifications</span></p>
                  </div>
                  <img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/15bbe7d4f9e51f5043535857c52d7336.svg" />
                  <span> {item.odometerReading} km</span>
                  <div className="cyl">
                    <img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/5570637da94bead30f0c65f9faca1c5e.svg" />
                    <span>{item.noOfCylinders}cyl{item.engineSize}L </span>
                  </div>
                  <hr />
                </div>

                <div className="info">
                  <div className="_3aEWp">
                    <div className="_3SXwZ"><strong>AED {item.emiDetails.emi}<span>/month</span></strong></div>
                    <div className="aApXW cyl"><span>AED {item.price}</span></div></div>
                  <br /> 
                  <span className="_2xBAf">{item.emiDetails.downPayment} Downpayment</span>
                  <span className="_2xBAg cyl">AED {item.discountAmount}</span>
                </div>
              </div>
            </div>
            })
          }
        </InfiniteScroll>
      </div>
    </div>

  );
}

export default App;