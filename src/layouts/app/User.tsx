import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Text from '../../components/Text/Text';

const User = () => {
  return (
    <React.Fragment>
      <Avatar>
        <Avatar.Image src={'/assets/images/user.png'} />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Text>Ryan Schidmt</Text>
    </React.Fragment>
  );
};

export default User;
