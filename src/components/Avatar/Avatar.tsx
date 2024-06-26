import React from 'react';
import Flex, { FlexProps } from '../Flex/Flex';
import { PolymorphicRef } from '../../types/polymorphicTypes';
import { ImageProps } from '../Image/Image';
import Text, { TextProps } from '../Text/Text';
import AvatarProvider from '../../contexts/AvatarContext';
import useAvatar from '../../hooks/useAvatar';

type AvatarComponent = React.ForwardRefExoticComponent<
  Omit<FlexProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> & {
  Image: React.ForwardRefExoticComponent<
    Omit<ImageProps, 'ref'> & React.RefAttributes<HTMLImageElement>
  >;
  Fallback: React.ForwardRefExoticComponent<
    Omit<TextProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
  >;
};

const Avatar = React.forwardRef(
  (props: FlexProps, ref: PolymorphicRef<'div'>) => {
    const { position = 'relative', ...rest } = props;

    return (
      <AvatarProvider>
        <Flex
          ref={ref}
          position={position}
          {...rest}
        />
      </AvatarProvider>
    );
  }
) as AvatarComponent;

const Image = React.forwardRef(
  (props: ImageProps, ref: PolymorphicRef<'img'>) => {
    const { size = 4, radius = 'max', onError, ...rest } = props;
    const { isError, setIsError } = useAvatar();

    if (isError) {
      return null;
    }

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsError(true);
      onError && onError(e);
    };

    return (
      <Image
        ref={ref}
        size={size}
        radius={radius}
        onError={handleError}
        {...rest}
      />
    );
  }
);

const Fallback = React.forwardRef(
  (props: TextProps, ref: PolymorphicRef<'span'>) => {
    const { size = 14, weight = 500, ...rest } = props;
    const { isError } = useAvatar();

    if (!isError) {
      return null;
    }

    return (
      <Text
        ref={ref}
        size={size}
        weight={weight}
        {...rest}
      />
    );
  }
);

Avatar.Image = Image;
Avatar.Fallback = Fallback;
export default Avatar;
