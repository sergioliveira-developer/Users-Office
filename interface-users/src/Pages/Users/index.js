
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import Logo from '../../assets/users.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';
import H1 from '../../Components/Title';
import ContainerItens from '../../Components/ContainerItens';
import Button from '../../Components/Button';

import {
  Container,
  Image,
  User
} from './styles';

const Users = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get('http://localhost:3001/users');

      setUsers(newUsers);

    };

    fetchUsers();
  }, []);

  function goBackPage() {
    navigate('/');
  };

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers)
  };



  return (<Container>
    <Image alt='log-image' src={Logo} />

    <ContainerItens isBlur={true}>
      <H1>Users</H1>

      <ul>

        {users.map((user) => (

          <User key={user.id}>
            <p>{user.name}</p><p>{user.age}</p>
            <button onClick={() => deleteUser(user.id)}>
              <img alt="delete-user" src={Trash} />
            </button>
          </User>

        ))}
      </ul>

      <Button isBack={true} onClick={goBackPage}>
        <img alt='arrow' src={Arrow} />
        Back </Button>

    </ContainerItens>


  </Container>
  );
};

export default Users;

