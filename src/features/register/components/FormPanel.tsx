import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import Alert from '../../../components/Alert/Alert';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';

const FormPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Form
      onSubmit={() => setOpen(true)}
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
          <Alert open={open}>
            {({ isOpen }) => (
              <React.Fragment>
                {isOpen ? (
                  <Alert.Body>
                    <Text
                      size={16}
                      color={'orange-40'}
                    >
                      Experiencing server issue
                    </Text>
                    <Flex
                      mt={'md'}
                      gap={'md'}
                    >
                      <Alert.Dismiss
                        height={32}
                        width={'full'}
                        backgroundColor={'white'}
                        pseudos={{ hover: { backgroundColor: 'orange-95' } }}
                      >
                        Close
                      </Alert.Dismiss>
                      <Alert.Action
                        height={32}
                        width={'full'}
                        backgroundColor={'white'}
                        pseudos={{ hover: { backgroundColor: 'orange-90' } }}
                      >
                        Help
                      </Alert.Action>
                    </Flex>
                  </Alert.Body>
                ) : null}
              </React.Fragment>
            )}
          </Alert>
        </Box>
      </Form.Wrapper>
    </Form>
  );
};

export default FormPanel;
