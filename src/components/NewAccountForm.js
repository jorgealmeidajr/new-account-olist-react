
import React, { Component } from 'react'

import { Form, FormGroup, Label, Input, Button, Progress, Badge } from 'reactstrap'

export default class NewAccountForm extends Component {

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Nome Completo</Label>
          <Input type="text" name="name" id="name" placeholder="" valid />
        </FormGroup>
        <FormGroup>
          <Label for="user_email">Email</Label>
          <Input type="email" name="user_email" id="user_email" placeholder="" valid={false} />
        </FormGroup>
        <FormGroup>
          <Label for="user_password">Senha</Label>
          <Input type="password" name="user_password" id="user_password" placeholder="" />
        </FormGroup>

        <div>
          <Progress value={50} color='success' />
          <div>
            <Badge color="secondary" style={{fontSize: 16, width: 400, textAlign: 'left'}}>Pelo menos 6 caracteres</Badge><br />
            <Badge color="danger" style={{fontSize: 16, width: 400, textAlign: 'left'}}>Pelo menos 1 letra maiúscula</Badge><br />
            <Badge color="success" style={{fontSize: 16, width: 400, textAlign: 'left'}}>Pelo menos 1 número</Badge><br />
          </div>
        </div>

        <FormGroup>
          <Label for="user_password_conf">Confirme a sua Senha</Label>
          <Input type="password" name="user_password_conf" id="user_password_conf" placeholder="" />
        </FormGroup>

        <Button 
          size="lg" 
          block 
          style={{backgroundColor: '#17D499'}} 
          active={false}
          disabled={true}
          onClick={(e) => e.preventDefault()}>Criar conta</Button>
      </Form>
    )
  }

}