import { useState, useEffect } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './userlist.css';


export default function UserAPI() {
    const [userList, setUserlist] = useState([]);
    
    const getuser = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setUserlist(await response.json())
    }

    useEffect(() => {
        getuser(); 
    }, [])

    return(
        <div>
            <h2>List of User List</h2>
                <div className = "container-fluid mt-5">
                    <div className="row text-center">
                        <div className="col-10 col-md-4">

                        </div>
                    </div>
                    {
                        userList.map((user) => {
                            return(
                                <div className="col-10 col-md4 mt-5">
                                    <Card className="card">
                                        <CardBody>
                                            <small>{user.id}</small>
                                            <CardTitle className="title">{user.name}</CardTitle>
                                            <CardSubtitle className="subtitle">{user.email}</CardSubtitle>
                                            <CardText className="text">
                                                <p>Phone Number: {user.phone}</p>
                                                <p>Company Website: {user.website}</p>
                                                <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}
                                                    </p>
                                                <p>Zipcode: {user.address.zipcode}</p>
                                                <p>
                                                    Comapany Detail: {user.company.name},  {user.company.catchPhrase}, {user.company.bs}
                                                </p>   
                                            </CardText>
                                        </CardBody>
                                    </Card>

                                </div>
                            )
                        })
                    }

                </div>
        </div>
    )
}