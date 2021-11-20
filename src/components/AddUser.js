import React, { useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import{
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const AddUser = () => { 
  const [name, setName] = useState('');
  const history = useHistory();

  const onSubmit = async () => {
    const newUser = {
      nome: name
    }

    
    const rawResponse = await fetch('http://localhost:4000/usuario', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });
  const content = await rawResponse.json();

  console.log(content);
  
    history.push('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nome</Label>
        <Input type="text" value={name}  onChange={onChange} placeholder="Enter Name" ></Input>
      </FormGroup>
      <Button type="submit">submit</Button>
      <Link to="/" className="btn btn-danger ml-2"> Cancel</Link>
    </Form>
  );
}


// const requisicao = fetch("https://pokeapi.co/api/v2/pokemon/"
// )
// .then(response => {
//   return response.json();
// })
// .then(jsonBody => {
//   document.querySelector("#app").innerHTML = jsonBody[0].nome;
//   console.log(jsonBody)
// })

// console.log(requisicao);