import React from 'react';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import { TbChevronDown, TbX } from 'react-icons/tb';
import navigation from '../../../data/navigation';
import Accordion from '../../../components/Accordion/Accordion';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import { Link } from 'react-router-dom';
import Flex from '../../../components/Flex/Flex';

const MobileMenu = () => {
  return (
    <Modal>
      {({ isOpen, setIsOpen }) => (
        <React.Fragment>
          <Modal.Trigger>
            <Button
              backgroundColor={'inherit'}
              onClick={() => setIsOpen(!isOpen)}
              pseudos={{ hover: { backgroundColor: 'gray-100' } }}
            >
              {isOpen ? <TbX size={25} /> : 'Menu'}
            </Button>
          </Modal.Trigger>
          <Modal.Body
            className='header-height-top'
            backgroundColor={'white'}
          >
            <Modal.Content>
              <Container
                p={'lg'}
                backgroundColor={'white'}
                className={'header-height-diff'}
                style={{ overflowY: 'scroll' }}
              >
                <Accordion style={{ overflowY: 'visible' }}>
                  {Object.keys(navigation).map((key) => (
                    <React.Fragment key={key}>
                      {navigation[key as 'products']?.categories ? (
                        <React.Fragment>
                          {navigation[key as 'products'].categories.map(
                            (category) => (
                              <Accordion.Item
                                key={category.name}
                                value={category.name}
                              >
                                <Accordion.Trigger
                                  border={0}
                                  height={56}
                                  borderBottom={1}
                                  alignItems={'center'}
                                  borderStyle={'solid'}
                                  borderColor={'gray-95'}
                                  justifyContent={'between'}
                                >
                                  <Text>{category.name}</Text>
                                  <TbChevronDown size={16} />
                                </Accordion.Trigger>
                                <Accordion.Content
                                  py={'lg'}
                                  spaceY={'2xs'}
                                >
                                  {category.subCategories.map((subCategory) => (
                                    <Box
                                      radius={'xl'}
                                      cursor={'pointer'}
                                      key={subCategory.name}
                                      pseudos={{
                                        hover: { backgroundColor: 'gray-100' },
                                      }}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <Link
                                        to={subCategory.path}
                                        className={'display-block w-full p-lg'}
                                        style={{ textDecoration: 'none' }}
                                      >
                                        <Text color={'gray-40'}>
                                          {subCategory.name}
                                        </Text>
                                      </Link>
                                    </Box>
                                  ))}
                                </Accordion.Content>
                              </Accordion.Item>
                            )
                          )}
                        </React.Fragment>
                      ) : (
                        <Flex
                          border={0}
                          borderBottom={1}
                          cursor={'pointer'}
                          borderStyle={'solid'}
                          alignItems={'center'}
                          borderColor={'gray-95'}
                          onClick={() => setIsOpen(false)}
                        >
                          <Link
                            to={navigation[key as 'products'] as any}
                            className={'display-block w-full py-lg'}
                            style={{ textDecoration: 'none' }}
                          >
                            <Text transform={'capitalize'}>{key}</Text>
                          </Link>
                        </Flex>
                      )}
                    </React.Fragment>
                  ))}
                </Accordion>
              </Container>
            </Modal.Content>
          </Modal.Body>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default MobileMenu;
