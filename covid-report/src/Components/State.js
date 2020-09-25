import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Accordion, Card, Button, Table} from 'react-bootstrap'

function State() {
    let [stateData,setData] = useState({});
    let keys = Object.keys(stateData);

    return(
        axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(response => {setData(response.data)}),
        <div className="row">
            <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,k) => {
                            let dist = stateData[itm].districtData;
                            let dist_key = Object.keys(dist);
                            let total_cases = 0;
                            let total_death = 0;
                            let recovered = 0;
                            let active = 0;
                            let dist_list = [];
                            for(let x in dist) {
                                total_cases+=dist[x].total_cases;
                                total_death+=dist[x].deceased;
                                recovered+=dist[x].recovered;
                                active+=dist[x].active;
                                let ob = dist[x];
                                ob["dist_name"] = x;
                                dist_list.concat(ob);
                                console.log(ob);
                            }
                            
                            return (
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        {itm}
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        {
                                            dist_list.map((data,k) => {
                                                // console.log(data);
                                                return (
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                            <th>District</th>
                                                            <th>Active Cases</th>
                                                            <th>Death</th>
                                                            <th>Recovery</th>
                                                            <th>Total Cases</th>
                                                            </tr>
                                                        </thead>
                                                        {/* <tbody>
                                                            <tr>
                                                                <td>{data.dist_name}</td>
                                                                <td>{data.active}</td>
                                                                <td>{data.deceased}</td>
                                                                <td>{data.recovered}</td>
                                                                <td>{data.active}</td>
                                                            </tr>
                                                        </tbody> */}
                                                    </Table>
                                                )
                                                
                                            })
                                        }
                                        
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    }
                    
                </Accordion>
            </div>
        </div>
    )
}

export default State;