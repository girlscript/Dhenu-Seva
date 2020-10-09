import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './Doctor_Card.css'

const Doctor_Card=(props)=> {
    return (
        <div>
            <Card className="card">
                <Card.Body className="name">
    <Card.Title>{props.post.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.post.qualification}</Card.Subtitle>
    <Card.Text>
                        <span className="name_of_the_clinic"></span>{props.post.name_of_the_clinic}
    </Card.Text>
                    <Card.Text>
                        <span className="address"> Address: </span>{props.post.address}<br></br>{props.post.state}<br></br>{props.post.city}<br></br>{props.post.pincode}
    </Card.Text>
    
                    <Card.Text>
                        <span className="gender"> Gender :</span>{props.post.gender}
    </Card.Text>
                    <Card.Text>
                        <span className="fees"> Fees: </span>{props.post.fees}
    </Card.Text>
                    <Card.Text>
                        <span className="timing">Timing: </span>{props.post.timing}
    </Card.Text>
                    <Card.Link href={`${props.post.website}`}>Visit Us</Card.Link>

                </Card.Body>
            </Card>

        </div>
    )
}

export default Doctor_Card;
