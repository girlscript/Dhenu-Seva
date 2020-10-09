import React from 'react'
import Card from 'react-bootstrap/Card';
import './Doctor_Card.css'

const Doctor_Card=(props)=> {
  const {name,qualification,name_of_the_clinic,address,state,city,pincode,gender,fees,timing,website}=props.post;
    return (
        <div>
            <Card className="card">
                <Card.Body className="name">
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{qualification}</Card.Subtitle>
                    <Card.Text>
                        <span className="name_of_the_clinic"></span>{name_of_the_clinic}
                    </Card.Text>
                    <Card.Text>
                        <span className="address"> Address: </span>{address}<br></br>{state}<br></br>{city}<br></br>{pincode}
                    </Card.Text>
                    <Card.Text>
                        <span className="gender"> Gender :</span>{gender}
                    </Card.Text>
                    <Card.Text>
                        <span className="fees"> Fees: </span>{fees}
                    </Card.Text>
                    <Card.Text>
                        <span className="timing">Timing: </span>{timing}
                    </Card.Text>
                    <Card.Link href={`${website}`}>Visit Us</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Doctor_Card;
