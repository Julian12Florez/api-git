import React, { useState } from 'react'
import { Container, Row, Alert } from 'react-bootstrap';
import ResponsiveNavbar from '../layout/ResponsiveNavbar';
import Footer from '../layout/Footer';
import UserCard from '../components/UserCard';
import API from "../Api"

function Home() {
  const [users, setUsers] = useState([]);
  const [searchFailed, setSearchFailed] = useState([]);
  const [alert, setAlert] = useState("Por favor realiza la busqueda.")

  const searchUser = (param) => {
    if (param.length < 4 && param.trim().toLowerCase() !== 'doublevpartners') {
      setSearchFailed(true)
      setUsers([])
      setAlert('El parametro de busqueda no es valido.')
      return
    }
    API.get(`search/users?q=${param}`).then(({ data: { items } }) => {
      setSearchFailed(false)
      setAlert('')
      setUsers(items.slice(0, 10));
    })
  }

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <ResponsiveNavbar searchUser={searchUser} />
        <Container className="mt-5">
          {
            searchFailed ?
              <Alert key={'light'} variant={'light'}>
                {alert}
              </Alert>
              : null
          }
          <Row>
            {users.map((user, index) => {
              return (
                <UserCard number={index} user={user}></UserCard>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Home