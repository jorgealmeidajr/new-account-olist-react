import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress } from 'reactstrap'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

          <Form>
            <FormGroup>
              <Label for="user_name">Nome Completo</Label>
              <Input type="text" name="user_name" id="user_name" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="user_email">Email</Label>
              <Input type="email" name="user_email" id="user_email" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="user_password">Senha</Label>
              <Input type="password" name="user_password" id="user_password" placeholder="" />
            </FormGroup>

            <div>
              <Progress value={50} color='success' />
              <div>
                Pelo menos 6 caracteres<br />
                Pelo menos 1 letra maiúscula<br />
                Pelo menos 1 número
              </div>
            </div>

            <FormGroup>
              <Label for="user_password_conf">Confirme a sua Senha</Label>
              <Input type="password" name="user_password_conf" id="user_password_conf" placeholder="" />
            </FormGroup>

            <Button size="lg" block style={{backgroundColor: '#17D499'}} onClick={(e) => e.preventDefault()}>Criar conta</Button>
          </Form>

        </div>
      </div>
    )
  }
}

export default App
