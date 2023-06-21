import React from 'react'
import { Link } from "react-router-dom";
import { Button, Col, Card } from 'react-bootstrap';


function UserCard(props) {
  const { user, index } = props;
  return (
    <>
      <Col key={index}>
        <Card style={{ minWidth: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Card.Text>{user.id}</Card.Text>
            <Link to={`/profile/${user.login}`}>
              <Button variant="" className='btn-primary-changed'>Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default UserCard