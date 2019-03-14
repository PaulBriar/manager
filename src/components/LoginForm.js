import React from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="Email@gmail.com" />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="Password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
