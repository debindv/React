import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


function India() {
    return(
        <div className="row">
            <div className="col-md-12">
                <img src="https://www.countryflags.io/in/shiny/64.png" alt="Indian flag" />
                <h1>INDIA</h1>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TODAYS DEATH</Card.Title>
                                    <h3>11234</h3>
                                    <Card.Text>
                                        [Today: 123]
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>11234</h3>
                                    <Card.Text>
                                        112
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERY</Card.Title>
                                    <h3>11234</h3>
                                    <Card.Text>
                                        112
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default India;