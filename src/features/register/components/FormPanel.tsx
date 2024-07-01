import React from 'react';
import Form from '../../../components/Form/Form';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';

const FormPanel = () => {
  return (
    <Form
      onSubmit={() => {}}
      initialValues={{ firstName: '', lastName: '' }}
    >
      <Form.Wrapper>
        <Box
          mt={'4xl'}
          spaceY={'xl'}
        >
          <Form.Field name={'firstName'}>
            <Form.Label>First name</Form.Label>
            <Form.Bag>
              <TextField placeholder='Enter your firstname' />
            </Form.Bag>
            <Form.Helper>Tell us your first name</Form.Helper>
          </Form.Field>
          <Form.Field name={'lastName'}>
            <Form.Label>Last name</Form.Label>
            <Form.Bag>
              <TextField placeholder='Enter your lastname' />
            </Form.Bag>
          </Form.Field>
          <Button
            type='submit'
            width={'full'}
          >
            Create free account
          </Button>
        </Box>
      </Form.Wrapper>
    </Form>
  );
};

export default FormPanel;
