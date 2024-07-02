import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';

const policies = [
  'Pi Transact is a financial services company that specializes in providing tailored payment solutions to businesses and individuals.',

  ' By using our services, you agree to comply with all applicable laws and regulations, including anti-money laundering and know-your-customer requirements.',

  'Customers must provide accurate and up-to-date information when signing up for our services, including personal identification documents and proof of address.',

  'Pi Transact reserves the right to suspend or terminate your account if we suspect any fraudulent or suspicious activity.',

  ' Fees and charges may apply for using our services, and these will be clearly outlined in our fee schedule.',

  'We take the security and privacy of your information seriously and employ robust measures to safeguard your data.',

  'Pi Transact is not liable for any loss or damages resulting from the use of our services, including but not limited to financial losses or delays in processing transactions.',

  'We reserve the right to update or modify these terms and conditions at any time.',
];

const PrivacyFeature = () => {
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
            size={{ initial: 40, sm: 48 }}
          >
            Our privacy policy
          </Text>

          <Text
            as={'p'}
            size={16}
          >
            We’re Pi-transact Limited (‘we’, ‘our’, ‘us’) and operate under the
            name Pi-transact. We’re registered with the Corporate Affairs
            Commission with the number RC796975. IAt least one of the following
            lawful basis must apply before we process your personal information:
            contractual or legal obligations, legitimate interest of the data
            controller, public interest, vital interest of the data subject or
            consent. The Nigerian Data Protection Regulations 2019 (NDPR)
            requires that we have a lawful basis for processing your personal
            information.
          </Text>
          <Text
            as={'p'}
            size={16}
          >
            This policy describes what information we collect about you, how we
            collect and use the information you share with us, and with whom we
            share that information. You don’t have to share any information with
            us, but to use our services, we’ll need some information from you.
            This policy also contains information about when we share your
            personal information with third parties (such as our service
            providers and credit bureaus).
          </Text>
          <Text
            as={'p'}
            size={16}
          >
            We collect and use any information you supply when you interact with
            any of our touch points. When you open an account with us, you share
            details like your names, Bank Verification Number (BVN),
            identification documents, address and pictures. By using any
            Pi-transact Application to transact, you also share details of your
            transactions with us.
          </Text>
        </Box>

        <Box
          mt={'5xl'}
          spaceY={'xl'}
        >
          <Text
            as={'h2'}
            weight={500}
            size={{ initial: 19, sm: 21 }}
          >
            Things you should know:
          </Text>

          <Box
            as={'ul'}
            px={'4xl'}
            spaceY={'md'}
          >
            {policies.map((policy, index) => (
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
      </Container>
    </Section>
  );
};

export default PrivacyFeature;
