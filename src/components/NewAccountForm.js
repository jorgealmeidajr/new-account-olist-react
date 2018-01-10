
import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress } from 'reactstrap'

import './NewAccountForm.css'

import AccountValidator from './AccountValidator'


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

  isAllFormValid = () => AccountValidator.isNameValid(this.state.name) 
    && AccountValidator.isEmailValid(this.state.email) 
    && AccountValidator.isPasswordValid(this.state.password) 
    && AccountValidator.isConfirmationPasswordValid(this.state.password, this.state.passwordConfirmation)

  getClassPasswordRule1 = () => {
    if(!this.state.passwordTouched) 
      return 'fa-circle'

    if(AccountValidator.checkPasswordLength(this.state.password)) {
      return 'fa-check-circle password-success'
    } else {
      return 'fa-times-circle password-danger'
    }
  }

  getClassPasswordRule2 = () => {
    if(!this.state.passwordTouched) 
      return 'fa-circle'

    if(AccountValidator.passwordHasOneLetterUppercase(this.state.password)) {
      return 'fa-check-circle password-success'
    } else {
      return 'fa-times-circle password-danger'
    }
  }

  getClassPasswordRule3 = () => {
    if(!this.state.passwordTouched) 
      return 'fa-circle'

    if(AccountValidator.passwordHasOneNumber(this.state.password)) {
      return 'fa-check-circle password-success'
    } else {
      return 'fa-times-circle password-danger'
    }
  }

  getPasswordProgressColor = (password) => {
    let progress = AccountValidator.getPasswordProgress(password)

    if(progress === 1) return 'danger'

    if(progress === 2) return 'warning'

    if(progress === 3) return 'success'
  }
  
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
              valid={(this.state.nameTouched) ? AccountValidator.isNameValid(this.state.name) : undefined} 
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
              valid={(this.state.emailTouched) ? AccountValidator.isEmailValid(this.state.email) : undefined} 
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
              valid={(this.state.passwordTouched) ? AccountValidator.isPasswordValid(this.state.password) : undefined} 
              value={this.state.password}
              onChange={e => {this.setState({password: e.target.value, passwordTouched: true})}} />
          </FormGroup>

          <div>
            <Progress 
              value={AccountValidator.getPasswordProgressValue(this.state.password)} 
              color={this.getPasswordProgressColor(this.state.password)} />
            
            <div>
              <i className={`fa ${this.getClassPasswordRule1()}`}></i>Pelo menos 6 caracteres<br />
              <i className={`fa ${this.getClassPasswordRule2()}`}></i>Pelo menos 1 letra maiúscula<br />
              <i className={`fa ${this.getClassPasswordRule3()}`}></i>Pelo menos 1 número
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
              valid={(this.state.passwordConfirmationTouched) ? AccountValidator.isConfirmationPasswordValid(this.state.password, this.state.passwordConfirmation) : undefined} 
              value={this.state.passwordConfirmation}
              onChange={e => {this.setState({passwordConfirmation: e.target.value, passwordConfirmationTouched: true})}} />
          </FormGroup>

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