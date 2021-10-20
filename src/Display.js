function Display(props) {

    return (

        <div className="col-sm-3 rounded">
            <div class="cars">
                <div class="image">
                    <img className="_3oX3Z img-fluid rounded" src={props.imgUrl} />
                </div>

                <div class="title">
                    <img className="heart" src="https://consumer-web-ae.qac24svc.dev/ae/static/js/e8333986534ba8a423ce86582be0003d.svg" alt="Add to wishlist" />
                    <div className="_3TSwN">
                        <h2 className="RZ4T7">{props.carName}</h2>
                        <p className="_1i1E6">GL 1.6 L |<span>  {props.distTravelled} km</span></p>
                    </div>
                    <hr />
                </div>

                <div class="info">
                    <div className="_3aEWp">
                        <div className="_3SXwZ"><strong>AED 482<span>/month</span></strong></div><div className="aApXW"><span>AED 30,137</span></div></div>
                    <span className="_2xBAf">AED 6,027 downpayment</span>
                </div>
            </div>
        </div>
    );
}

export default Display;