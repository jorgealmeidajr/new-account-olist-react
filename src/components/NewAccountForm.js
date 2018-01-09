
import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress, Badge } from 'reactstrap'

import './NewAccountForm.css'

const passwordValidator = {
  checkLength: (email) => email.length >= 6,

  hasOneNumber: (email) => /\d{1}/.test(email),

  hasOneLetterUppercase: (email) => /[A-Z]{1}/.test(email)
}

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

  isPasswordValid = password => (passwordValidator.checkLength(password) 
    && passwordValidator.hasOneLetterUppercase(password) && passwordValidator.hasOneNumber(password))

  isAllFormValid = () => this.isNameValid(this.state.name) && this.isEmailValid(this.state.email) 
    && this.isPasswordValid(this.state.password)

  getClassPasswordRule1 = () => {
    if(!this.state.passwordTouched) 
      return 'fa-circle'

    if(passwordValidator.checkLength(this.state.password)) {
      return 'fa-check-circle password-success'
    } else {
      return 'fa-times-circle password-danger'
    }
  }

  getClassPasswordRule2 = () => {
    if(!this.state.passwordTouched) 
      return 'fa-circle'

    if(passwordValidator.hasOneLetterUppercase(this.state.password)) {
      return 'fa-check-circle password-success'
    } else {
      return 'fa-times-circle password-danger'
    }
  }

  getClassPasswordRule3 = () => {
    if(!this.state.passwordTouched) 
      return 'fa-circle'

    if(passwordValidator.hasOneNumber(this.state.password)) {
      return 'fa-check-circle password-success'
    } else {
      return 'fa-times-circle password-danger'
    }
  }

  getPasswordProgress = password => {
    let progress = 0

    if(passwordValidator.checkLength(password)) progress++

    if(passwordValidator.hasOneLetterUppercase(password)) progress++
    
    if(passwordValidator.hasOneNumber(password)) progress++

    return progress
  }

  getPasswordProgressValue = (password) => (this.getPasswordProgress(password) * (100 / 3))
  
  getPasswordProgressColor = (password) => {
    let progress = this.getPasswordProgress(password)

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
              valid={(this.state.passwordTouched) ? this.isPasswordValid(this.state.password) : undefined} 
              value={this.state.password}
              onChange={e => {this.setState({password: e.target.value, passwordTouched: true})}} />
          </FormGroup>

          <div>
            <Progress 
              value={this.getPasswordProgressValue(this.state.password)} 
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
              value={this.state.passwordConfirmation}
              onChange={e => {this.setState({passwordConfirmation: e.target.value})}} />
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