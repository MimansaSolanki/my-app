import './App.css';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasmore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => (getItems()), []);

  const options = {
    method: 'GET',
    headers: {
      X_COUNTRY: "AE",
      X_VEHICLE_TYPE: "CAR"
    },
  };
  const getItems = async (page) => {
    Axios.get(`https://listing-service.qac24svc.dev/v1/vehicle?sf=city:DU_DUBAI&size=25&spath=buy-used-cars-dubai&variant=filterV3&page=${page}`, options)
      .then((response) => {
        setHasmore(false);
        setItems([...items, ...response.data.results]);
      });
  }

  return (
    <div className="container">
     
      <nav role="navigation" className="fixed-top navigation">
        <div>
          <a href="https://consumer-web-ae.qac24svc.dev/ae"><img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/42a884476ab8ee4a3642ef07389f1a63.svg" alt="CARS24" /></a>
        </div>
        <div className="nav">
          <a href="tel:042909641"><img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/30f825347a79ab9fa31e6c910e1f65ff.svg" alt="Call" /></a>
          <a href="/"><img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/8dfd970d41879cc53c843f30407d88b8.svg" alt="Wishlist" /></a>
          <a href="/"><img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/ce8c126471ada82fd3f0245de6e68646.svg" alt="Menu" /></a>
        </div>
      </nav>
      <div className="container1">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item1"><a>Home /</a></li>&nbsp;
              <li className="breadcrumb-item2">Used Cars in Dubai</li>
            </ul>
          </nav>
      </div>
      
      <div className="searchbar">     
        <input className="form-control me-2" type="text" placeholder="Search by Brand or Model" aria-label="Search" 
          onChange = {event => {setSearchTerm(event.target.value)}}
        />
        <div className="Kf4mu"><img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/d0f958c97927ea86367b564574ce6790.svg" alt="Sort By Icon"/></div>
      </div>

      <ul className="ulitems">
      <li className="_31V8b"><span>Make / Model</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Price / Finance</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Year</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Body Type</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Mileage</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Colour</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Fuel Type</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Transmission</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Discount</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Engine</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Doors & Seats</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      <li className="_31V8b"><span>Option Type</span>
      <img className="rotate" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/6fae39b71885d4edcd60fe0f00851390.svg"/>
      </li>
      </ul>
      

      <h1 className="qf_dm">Used Cars In Dubai</h1>
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
        {items.filter((item) => {
          if (searchTerm == "") {
            return item
          } else if (item.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     item.model.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            return item
          }
        }).map((item) => {
          return <div className="cars">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://fastly-production.24c.in/${item.mainImage.path}`}
                />
                <CardContent>
                  <Typography className="heart">
                    <img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/e8333986534ba8a423ce86582be0003d.svg" />
                  </Typography>
                  <Typography gutterBottom>
                    <h2 className="make_model">{item.year} {item.make} {item.model}</h2>
                    <p className="desc"><b>{item.variant} |</b>
                    <span>  GCC Specifications</span></p>
                    <br/>
                  </Typography>
                  
                  <Typography>
                    <img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/15bbe7d4f9e51f5043535857c52d7336.svg" alt="abc"/>
                    <span className="text"> {item.odometerReading} km</span>
                    <div className="cyl text">
                      <img src="https://consumer-web-ae.qac24svc.dev/ae/static/js/5570637da94bead30f0c65f9faca1c5e.svg" alt="abc"/>
                      <span>{item.noOfCylinders}cyl{item.engineSize}L </span>
                    </div>
                    <hr />
                    <div className="_3aEWp">
                      <div className="_3SXwZ"><strong>AED {item.emiDetails.emi}<span>/month</span></strong></div>
                      <div className="aApXW cyl"><span>AED {item.price}</span></div>
                    </div>
                    <br />
                    <span className="_2xBAf">{item.emiDetails.downPayment} Downpayment</span>
                    <span className="_2xBAg cyl">AED {item.discountAmount}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        })
        }
      </InfiniteScroll>
    </div>

  );
}

export default App;
