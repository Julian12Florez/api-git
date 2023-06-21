/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import "../assets/profile.css"
import { Card, Container } from 'react-bootstrap';
import API from "../Api"

function Profile() {
    const [userData, setUserData] = useState({})
    let params = useParams();
    let { user_login } = params

    useEffect(() => {
        getUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user_login])

    const getUserData = () => {
        API.get(`/users/${user_login}`).then(({ data }) => {
            setUserData(data)
        })
    }

    return (
        <>
            <Container className="mt-5">
                <Card style={{ minWidth: '10rem', margin: '20px' }}>
                    <Card.Img variant="top" src={""} />
                    <Card.Body>
                        <div className="text-center">
                            <img src={userData.avatar_url} width="100" className="rounded-circle" />
                        </div>

                        <div className="text-center mt-3">
                            <span className="bg-secondary p-1 px-4 rounded text-white">{userData.company}</span>
                            <h5 className="mt-2 mb-0">{userData.name}</h5>
                            <span>UI/UX Designer</span>

                            <div className="px-4 mt-1">
                                <p className="fonts">{userData.bio}  {userData.location}</p>
                            </div>

                            <div className="buttons">
                            <Link to={`/`}>
                                <button className="btn btn-outline-primary px-4">Go Back</button>
                            </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Profile;