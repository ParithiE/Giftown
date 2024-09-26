import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";

import '../App.css'
const Support = (props) => {
  return (
    // <div className={`row g-3 ${props.className}`}>
    //   <div className="col-md-4">
    //     <div className="card" style={{backgroundColor: "var(--tertiary-color)"}}>
    //       <div className="card-body text-white">
    //         <span className="p-3 bg-light rounded-circle me-3 text-dark">
    //           <IconCash width={40} height={40} />
    //         </span>
    //        <span style={{fontSize: "larger", fontWeight: "500"}}> Reasonable prices</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-md-4">
    //     <div className="card bg-danger">
    //       <div className="card-body text-white">
    //         <span className="p-3 bg-light rounded-circle me-3 text-dark">
    //           <IconHeadset width={40} height={40} />
    //         </span>
    //        <span style={{fontSize: "larger", fontWeight: "500"}}> Customer support 24/7 </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-md-4">
    //     <div className="card bg-success">
    //       <div className="card-body text-white">
    //         <span className="p-3 bg-light rounded-circle me-3 text-dark">
    //           <IconTruck width={40} height={40} />
    //         </span>
    //        <span style={{fontSize: "larger", fontWeight: "500"}}> Quick delivery </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="container">
  <div class="row no-gutters">
    <div class="col-md-4">
      <div class="card bg-dark overflow-hidden">
       <span className="zoom-img">
       <img
          src="https://demo2.themelexus.com/gifymo/wp-content/uploads/2021/05/h1-banner3.jpg"
          class="card-img-top "
          alt="Shop Online Gifts Under $19.99"
        />
       </span> 
        <div class="card-img-overlay d-flex flex-column justify-content-evenly text-center h-70">
          <h5 className="mt-auto">Shop Online Gifts Under</h5>
          <h2 class="card-title mt-auto">$19.99</h2>
          <a href="https://demo2.themelexus.com/gifymo/shop/" class="animated-button">
            Shop Now
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-md-8">
      <div class="card bg-dark overflow-hidden">
        <img
          src="https://demo2.themelexus.com/gifymo/wp-content/uploads/2021/05/h1-banner4.jpg"
          class="card-img zoom-img"
          alt="30% Off home decor"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-evenly text-center h-70">
          <h5 className="mt-auto">Amazing Gifts</h5>
          <h2 class="card-title mt-auto">30% Off home decor</h2>
          <a href="https://demo2.themelexus.com/gifymo/shop/" class="animated-button">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
export default Support;
