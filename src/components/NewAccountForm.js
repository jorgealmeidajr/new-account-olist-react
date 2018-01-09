
import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress, Badge } from 'reactstrap'

import './NewAccountForm.css'

export default class NewAccountForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',

    nameTouched: false,
    emailTouched: false,
    passwordTouched: false,
    passwordConfirmationTouched: false
  }

  isNameValid = name => (name.trim() !== '')

  isEmailValid = email => (email.trim() !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))

  isAllFormValid = () => this.isNameValid(this.state.name) && this.isEmailValid(this.state.email)
  
  createAccountButtonClicked = (e) => {
    e.preventDefault()
    console.log(this.state)
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
              valid={(this.state.nameTouched) ? this.isNameValid(this.state.name) : undefined} 
              value={this.state.name}
              onChange={e => {this.setState({name: e.target.value, nameTouched: true})}} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="" 
              valid={(this.state.emailTouched) ? this.isEmailValid(this.state.email) : undefined} 
              value={this.state.email}
              onChange={e => {this.setState({email: e.target.value, emailTouched: true})}} />
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
              <i className="fa fa-circle"></i>Pelo menos 6 caracteres<br />
              <i className="fa fa-check-circle"></i>
              <i className="fa fa-times-circle"></i>
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
              onChange={e => {this.setState({passwordConfirmation: e.target.value})}} />
          </FormGroup>

          {JSON.stringify(this.state, null, 2)}

          <Button 
            size="lg" 
            block 
            style={{backgroundColor: '#17D499'}} 
            active={this.isAllFormValid()}
            disabled={!this.isAllFormValid()}
            onClick={this.createAccountButtonClicked}>Criar conta</Button>
        </Form>
      </div>
    )
  }

}