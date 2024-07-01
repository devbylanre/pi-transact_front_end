import React from 'react';
import Flex from '../Flex/Flex';
import { PolymorphicRef } from '../../types/polymorphicTypes';
import Image, { ImageProps } from '../Image/Image';
import Text from '../Text/Text';
import AvatarProvider from '../../contexts/AvatarContext';
import useAvatar from '../../hooks/useAvatar';

namespace Avatar {
  export type Props = Flex.Props & { hasError?: boolean };
  export type Ref = Flex.Ref;
}

type AvatarComponent = React.ForwardRefExoticComponent<
  Omit<Avatar.Props, 'ref'> & React.RefAttributes<HTMLDivElement>
> & {
  Image: React.ForwardRefExoticComponent<
    Omit<ImageProps, 'ref'> & React.RefAttributes<HTMLImageElement>
  >;
  Fallback: React.ForwardRefExoticComponent<
    Omit<Text.Props, 'ref'> & React.RefAttributes<HTMLSpanElement>
  >;
};

const Avatar = React.forwardRef((props: Avatar.Props, ref: Avatar.Ref) => {
  const { position = 'relative', hasError, ...rest } = props;

  return (
    <AvatarProvider hasError={hasError}>
      <Flex
        ref={ref}
        position={position}
        {...rest}
      />
    </AvatarProvider>
  );
}) as AvatarComponent;

const ImageComponent = React.forwardRef(
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

const FallbackComponent = React.forwardRef(
  (props: Text.Props, ref: Text.Ref) => {
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

Avatar.Image = ImageComponent;
Avatar.Fallback = FallbackComponent;
export default Avatar;
