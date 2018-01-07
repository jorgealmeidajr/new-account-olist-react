
import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress, Badge } from 'reactstrap'

import './NewAccountForm.css'

export default class NewAccountForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  render() {
    return (
      <div className='newAccountContainer'>
        <div className='newAccountHeader'>
          <img src='olist.png' className="newAccountLogo" alt="logo" />
          <h4>Crie sua conta</h4>
        </div>

        <Form className='newAccountForm'>
          <FormGroup>
            <Label for="name">Nome Completo</Label>
            <Input 
              type="text" 
              id="name"
              name="name" 
              placeholder="" 
              valid 
              innerRef={input => this.name = input} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="" 
              valid={false}
              innerRef={input => this.email = input}
              onChange={e => {console.log(e.target.value)}} />
          </FormGroup>

          <FormGroup>
            <Label for="password">Senha</Label>
            <Input 
              type="password" 
              id="password" 
              name="password" 
              placeholder=""
              value={this.state.password}
              onChange={e => {this.setState({password: e.target.value})}} />
          </FormGroup>

          <div>
            <Progress value={(100 / 3) * 2} color='success' />
            <div>
              <Badge color="secondary" className='newAccountBadge'>Pelo menos 6 caracteres</Badge><br />
              <Badge color="danger" className='newAccountBadge'>Pelo menos 1 letra maiúscula</Badge><br />
              <Badge color="success" className='newAccountBadge'>Pelo menos 1 número</Badge>
            </div>
            <br />
          </div>

          <FormGroup>
            <Label for="passwordConfirmation">Confirme a sua Senha</Label>
            <Input 
              type="password" 
              name="passwordConfirmation" 
              id="passwordConfirmation" 
              placeholder=""
              value={this.state.passwordConfirmation}
              onChange={e => {this.setState({passwordConfirmation: e.value})}} />
          </FormGroup>

          {JSON.stringify(this.state)}

          <Button 
            size="lg" 
            block 
            style={{backgroundColor: '#17D499'}} 
            active={true}
            disabled={false}
            onClick={(e) => { e.preventDefault(); console.log(this.name.value) }}>Criar conta</Button>
        </Form>
      </div>
    )
  }

}