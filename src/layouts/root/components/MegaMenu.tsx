import React, { useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import Modal from '../../../components/Modal/Modal';
import Container from '../../../components/Container/Container';
import ProductMenu from './ProductMenu';
import ResourcesMenu from './ResourcesMenu';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import navigation from '../../../data/navigation';
import Box from '../../../components/Box/Box';

const MegaMenu = () => {
  const [label, setLabel] = useState('');

  return (
    <Modal>
      {({ isOpen, setIsOpen }) => (
        <React.Fragment>
          <Modal.Trigger
            as={'ul'}
            spaceX={'sm'}
            style={{ listStyle: 'none' }}
          >
            {Object.keys(navigation).map((key) => (
              <Box
                as={'li'}
                key={key}
                display={'inline'}
                onClick={() => {
                  setLabel(key);
                  if (label === key) {
                    setIsOpen(!isOpen);
                  } else {
                    setLabel(key);
                    setIsOpen(true);
                  }
                }}
              >
                <Link
                  to={
                    navigation[key as 'products']?.categories
                      ? `#${key}`
                      : `/${key}/`
                  }
                >
                  <Button
                    gapX={'xs'}
                    height={48}
                    transform={'capitalize'}
                    pseudos={{ hover: { backgroundColor: 'gray-100' } }}
                    backgroundColor={
                      label === key && isOpen ? 'gray-100' : 'inherit'
                    }
                  >
                    {key}
                    {navigation[key as 'products']?.categories ? (
                      <TbChevronDown size={16} />
                    ) : null}
                  </Button>
                </Link>
              </Box>
            ))}
          </Modal.Trigger>
          <Modal.Body top={isOpen ? '8xl' : '6xl'}>
            <Modal.Overlay top={'8xl'} />
            <Modal.Content
              px={'md'}
              transition={'all'}
              transitionDuration={300}
              backgroundColor={'white'}
              transitionTimingFunction={'ease-in-out'}
              style={{
                minHeight: '20vh',
                overflowY: 'scroll',
                maxHeight: isOpen ? '90vh' : '0px',
              }}
            >
              <Container
                mx={'auto'}
                container={'lg'}
              >
                {label === 'products' ? <ProductMenu /> : <ResourcesMenu />}
              </Container>
            </Modal.Content>
          </Modal.Body>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default MegaMenu;
