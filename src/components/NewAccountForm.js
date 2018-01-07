
import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress, Badge } from 'reactstrap'

import './NewAccountForm.css'

export default class NewAccountForm extends Component {

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
            <Input type="text" name="name" id="name" placeholder="" valid />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="" valid={false} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Senha</Label>
            <Input type="password" name="password" id="password" placeholder="" />
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
            <Input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="" />
          </FormGroup>

          <Button 
            size="lg" 
            block 
            style={{backgroundColor: '#17D499'}} 
            active={false}
            disabled={true}
            onClick={(e) => e.preventDefault()}>Criar conta</Button>
        </Form>
      </div>
    )
  }

}