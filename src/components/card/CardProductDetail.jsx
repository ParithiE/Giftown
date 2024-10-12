import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function CardProductDetail(props) {
    return (
        <Link to={props.to} className="text-decoration-none">
        <div className="card" style={{ overflow: "hidden" }}>
                <div style={{ overflow: "hidden" }}><img src={props.img} className="card-img-top zoom-img" alt="..." />
                </div>

            {props.category && <div className="card-body" style={{textAlign: "center"}}>
                {props.children}
                <h6 className="card-title text-capitalize" >{props.title}</h6>
                <div className="card-text text-success">{props.text}</div>
                <small className="text-muted">{props.tips}</small>
            </div>}

            {props.product &&
                <div class="card-body">
                    <a><span className="card-title" style={{ textDecoration: 'none', color: 'inherit' }}>{props.title}</span></a>
                    <div className='d-flex align-items-center justify-content-between' >
                        <div className='d-flex' style={{ fontWeight: "600" }}>
                            <span className="card-text text-danger">₹ {props.discountPrice}</span>
                            <span style={{ marginLeft: "5px", textDecorationLine: "line-through", color: "grey" }}>₹{props.originalPrice}</span>
                        </div>

                        <span className='badge bg-success me-2'>
                            <i class="bi bi-star-fill"></i>
                            <span className='m-1'>{props.star}</span>
                        </span>
                    </div>
                </div>

            }
        </div>
        </Link>

    )
}
