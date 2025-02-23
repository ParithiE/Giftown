import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
const Support = (props) => {
  return (
    <div className={`row g-3 ${props.className}`}>
      <div className="col-md-4">
        <div className="card" style={{backgroundColor: "var(--tertiary-color)"}}>
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconCash width={40} height={40} />
            </span>
           <span style={{fontSize: "larger", fontWeight: "500"}}> Reasonable prices</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-danger">
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconHeadset width={40} height={40} />
            </span>
           <span style={{fontSize: "larger", fontWeight: "500"}}> Customer support 24/7 </span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-success">
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconTruck width={40} height={40} />
            </span>
           <span style={{fontSize: "larger", fontWeight: "500"}}> Quick delivery </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
