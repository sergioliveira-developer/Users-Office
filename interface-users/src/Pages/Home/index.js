
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

import H1 from '../../Components/Title';
import ContainerItens from '../../Components/ContainerItens';
import Button from '../../Components/Button'


import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles';

const Home = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {

    const { data: newUser } = await axios.post
      ('http://localhost:3001/users',

        {
          name: inputName.current.value,
          age: inputAge.current.value,
        });

    setUsers([...users, newUser]);

    navigate('/users');
  }

  return (<Container>
    <Image alt='log-image' src={People} />

    <ContainerItens>
      <H1>Hi!</H1>

      <InputLabel>Name</InputLabel>
      <Input ref={inputName} placeholder='Name' />

      <InputLabel>Age</InputLabel>
      <Input ref={inputAge} placeholder='Age' />

      <Button onClick={addNewUser}>
        Register <img alt='arrow' src={Arrow} />
      </Button>

    </ContainerItens>


  </Container>
  );
}

export default Home;

