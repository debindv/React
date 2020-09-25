import React, {useState} from 'react';
import axios from 'axios';

function Test() {

    let [data,setData] = useState([""]);
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setData(data.concat(response.data)));
    return (
        <table>
            <thead>
                <td>ID</td>
                <td>Title</td>
            </thead>
            <tbody>
                {data.map((itm,k) => {
                    console.log(k);
                    return (
                        
                        <tr>
                            <td>{itm.id}</td>
                            <td>{itm.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    );
} 

export default Test;