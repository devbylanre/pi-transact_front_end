import React from 'react';
import Form from '../../../components/Form/Form';
import Box from '../../../components/Box/Box';
import TextField from '../../../components/TextField/TextField';
import Button from '../../../components/Button/Button';

const FormPanel = () => {
  return (
    <Form
      onSubmit={() => {}}
      initialValues={{ email: '', password: '' }}
    >
      <Form.Wrapper>
        <Box
          mt={'4xl'}
          spaceY={'xl'}
        >
          <Form.Field name={'email'}>
            <Form.Label>Email address</Form.Label>
            <Form.Bag>
              <TextField placeholder='Enter your email address' />
            </Form.Bag>
            <Form.Helper></Form.Helper>
          </Form.Field>
          <Form.Field name={'password'}>
            <Form.Label>Password</Form.Label>
            <Form.Bag>
              <TextField
                type='password'
                placeholder='Authentication key or Password'
              />
            </Form.Bag>
            <Form.Helper></Form.Helper>
          </Form.Field>
          <Button
            type='submit'
            width={'full'}
          >
            Sign in to my account
          </Button>
        </Box>
      </Form.Wrapper>
    </Form>
  );
};

export default FormPanel;
