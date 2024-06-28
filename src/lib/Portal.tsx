import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  container: HTMLElement | DocumentFragment;
};

const Portal = (props: PortalProps) => {
  return createPortal(props.children, props.container);
};

export default Portal;
