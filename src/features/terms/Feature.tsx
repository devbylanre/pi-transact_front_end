import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';

const users = ['An Entity/Organization', 'An individual'];

const firstTerms = [
  'Intellectual property: all intellectual property rights related to Pi Transact service including but not limited to software, algorithms and calculations are owned by Pi Transact.',

  'Pi Transact shall not be liable for any indirect, incidental, special, consequential or punitive damages, including but not limited to lose to loss of profits, data or goodwill arising from the use of the Pi Transact service.',

  'Pi Transact the right to modify Pi Transact service at any time. Unactivated users are limited to 100Pi Transaction per day. Account will be unlimited when activated via email authentication.',
];

const secondTerms = [
  'Fees and charges may apply for using our services, which are clearly outlined in our fee schedule.',

  ' Pi Transact reserves the right to suspend or terminate your account if we suspect any fraudulent or suspicious activity. We take the security and privacy of your information seriously and employ robust measures to safeguard your data.',
];

const TermsFeature = () => {
  return (
    <Section
      px={'lg'}
      mt={{ initial: 'xl', sm: '5xl' }}
    >
      <Container
        mx={'auto'}
        container={'md'}
      >
        <Box spaceY={'2xl'}>
          <Text
            as={'h1'}
            weight={500}
            size={{ initial: 32, sm: 40 }}
          >
            Terms of service
          </Text>

          <Text
            as={'p'}
            size={16}
          >
            These terms and conditions will serve as a basis of your banking
            relationship with Pi-transact Limited (“Pi-transact”). By choosing
            to open an account with us, you agree to the terms and conditions
            contained herein You also agree to comply with the following
            policies which also apply to your use of our services and
            incorporated by reference into these terms and conditions
          </Text>
          <Text
            as={'p'}
            size={16}
          >
            If you do not agree to these terms and conditions, please do not
            proceed and exit the mobile application or the Pi-transact website
            immediately and do not proceed with the account opening steps. Also,
            please be informed that we reserve the right to terminate your
            relationship with us if we believe that you have violated any of
            these terms.
          </Text>
          <Text
            as={'p'}
            size={16}
          >
            For ease of understanding, “You”, “your”, “Customer” means the
            person who seeks to enter into a banking relationship with
            Pi-transact and and agrees to these terms and conditions, while
            “We”, “us”, “our”, shall mean Pi-transact, and following an
            assignment, any person or company to whom our rights herein are
            assigned to.
          </Text>
        </Box>

        <Box
          mt={'5xl'}
          spaceY={'2xl'}
        >
          <Text
            as={'h2'}
            weight={500}
            size={{ initial: 19, sm: 21 }}
          >
            Users of Pi Transact
          </Text>
          <Box
            as={'ul'}
            spaceY={'sm'}
            style={{ listStyle: 'number' }}
            px={{ initial: '2xl', sm: '4xl' }}
          >
            {users.map((user, index) => (
              <Text
                size={16}
                key={index}
                as={'li' as 'p'}
              >
                {user}
              </Text>
            ))}
          </Box>
        </Box>

        <Box
          mt={'5xl'}
          spaceY={'xl'}
        >
          <Text
            as={'h2'}
            weight={500}
            size={{ initial: 17 }}
          >
            Users may access the Pi Transact service for personal or commercial
            use. Provided such use complies to these terms
          </Text>

          <Box
            as={'ul'}
            spaceY={'md'}
            px={{ initial: '2xl', sm: '4xl' }}
          >
            {firstTerms.map((policy, index) => (
              <Text
                size={16}
                key={index}
                as={'li' as 'p'}
              >
                {policy}
              </Text>
            ))}
          </Box>
        </Box>

        <Box
          mt={'5xl'}
          spaceY={'xl'}
        >
          <Text
            as={'h2'}
            weight={500}
            size={{ initial: 17 }}
          >
            After activation, phone number cannot be changed, email address
            provided at the initial sign up process cannot be changed. However,
            there are exceptions for change of address and phone numbers upon
            application and processing from our office. Change of address or
            phone numbers cannot be changed online. as such, all information
            should be filled excellently.
          </Text>

          <Box
            as={'ul'}
            spaceY={'md'}
            px={{ initial: '2xl', sm: '4xl' }}
          >
            {secondTerms.map((policy, index) => (
              <Text
                key={index}
                size={16}
                as={'li' as 'p'}
              >
                {policy}
              </Text>
            ))}
          </Box>
        </Box>

        <Box
          mt={'5xl'}
          radius={'lg'}
          backgroundColor={'blue-100'}
          p={{ initial: 'lg', sm: '2xl' }}
        >
          <Text
            size={16}
            color={'blue-50'}
          >
            By using our services, you agree to comply with all applicable laws
            and regulations, including anti-money laundering and know-your
            customer requirements.
          </Text>
        </Box>
      </Container>
    </Section>
  );
};

export default TermsFeature;
