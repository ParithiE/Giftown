import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function CardProductDetail(props) {
    return (
        <div className="card" style={{ width: "20rem", borderRadius: "40px", overflow: "hidden" }}>
            <Link>
                   <div style={{overflow: "hidden"}}><img src={props.img} className="card-img-top zoom-img" alt="..." style={{ borderRadius: "40px 40px 0px 0px" }} />
                   </div> 
            </Link>
            <div class="card-body">
                <a><span className="card-title" style={{ textDecoration: 'none', color: 'inherit' }}>{props.title}</span></a>
                <div className='d-flex align-items-center justify-content-between' >
                    <div className='d-flex' style={{ fontWeight: "600" }}>
                        <span className="card-text text-danger">₹ {props.discountPrice}</span>
                        <span style={{ marginLeft: "5px", textDecorationLine: "line-through", color: "grey" }}>₹{props.originalPrice}</span>
                    </div>

                    <span className='badge bg-success me-2'>{props.rating}</span>
                </div>
            </div>
        </div>

    )
}
