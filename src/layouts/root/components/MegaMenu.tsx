import React from 'react';
import { TbChevronDown } from 'react-icons/tb';
import Modal from '../../../components/Modal/Modal';
import Container from '../../../components/Container/Container';
import ProductMenu from './ProductMenu';
import ResourcesMenu from './ResourcesMenu';
import Button from '../../../components/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import navigation from '../../../data/navigation';
import Box from '../../../components/Box/Box';

const MegaMenu = () => {
  const { hash } = useLocation();
  const HASH = hash.split('#')[1];

  return (
    <Modal>
      {({ isOpen, setIsOpen }) => (
        <React.Fragment>
          <Modal.Trigger
            as={'ul'}
            spaceX={'sm'}
            style={{ listStyle: 'none' }}
          >
            {Object.keys(navigation).map((key, index) => (
              <React.Fragment key={index}>
                {index <= 3 ? (
                  <Box
                    as={'li'}
                    display={'inline'}
                    onClick={() => {
                      if (navigation[key as 'products']?.categories) {
                        setIsOpen(!isOpen);
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
                          HASH === key && isOpen ? 'gray-100' : 'inherit'
                        }
                      >
                        {key}
                        {navigation[key as 'products']?.categories ? (
                          <TbChevronDown size={16} />
                        ) : null}
                      </Button>
                    </Link>
                  </Box>
                ) : null}
              </React.Fragment>
            ))}
          </Modal.Trigger>
          <Modal.Body className={'header-height-top'}>
            <Modal.Overlay className={'header-height-top'} />
            <Modal.Content
              px={'md'}
              transition={'all'}
              transitionDuration={300}
              backgroundColor={'white'}
              transitionTimingFunction={'ease-in-out'}
              className={isOpen ? 'header-height-diff' : 'h-min'}
              style={{ overflowY: 'scroll' }}
            >
              <Container
                mx={'auto'}
                container={'lg'}
              >
                {HASH === 'products' ? <ProductMenu /> : <ResourcesMenu />}
              </Container>
            </Modal.Content>
          </Modal.Body>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default MegaMenu;
