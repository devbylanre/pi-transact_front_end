import React from 'react';
import Flex from '../../components/Flex/Flex';
import Avatar from '../../components/Avatar/Avatar';
import Text from '../../components/Text/Text';

import { TbBellRingingFilled } from 'react-icons/tb';
import Form from '../../components/Form/Form';
import TextField from '../../components/TextField/TextField';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      py={'md'}
      border={0}
      borderBottom={1}
      borderStyle={'solid'}
      alignItems={'center'}
      borderColor={'gray-95'}
      justifyContent={'between'}
    >
      <Flex
        gapX={'sm'}
        alignItems={'center'}
      >
        <Avatar>
          <Avatar.Image />
        </Avatar>
        <Text>@ Pi-Vest</Text>
      </Flex>

      <Flex display={{ initial: 'hidden', sm: 'flex' }}>
        <Form
          onSubmit={() => {}}
          initialValues={{ keyword: '' }}
        >
          <Form.Wrapper style={{ minWidth: '32rem' }}>
            <Form.Field name={'keyword'}>
              <Form.Bag
                radius={'max'}
                borderColor={'transparent'}
              >
                <TextField placeholder={'Search for beneficiaries...'} />
              </Form.Bag>
            </Form.Field>
          </Form.Wrapper>
        </Form>
      </Flex>

      <Flex>
        <TbBellRingingFilled
          size={28}
          className={'p-2xs text-gray-50 radius-max bg-white'}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
