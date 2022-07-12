import * as React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
}

export default function Portal ({ children }: PortalProps) {
  // create div element to render as portal, able to extend the css

  const [container] = React.useState(document.createElement('div'));

  container.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; display: flex; align-items: center; justify-content: center; background-color: rgba(222,222,222,0.9)');

  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}