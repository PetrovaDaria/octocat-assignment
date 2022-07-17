import React from 'react';

type TGapsProps = {
  children: (React.ReactNode | JSX.Element)[];
  gapHeight: string;
};

export const Gaps = ({children, gapHeight}: TGapsProps): JSX.Element => {
 return (
  <div>
    {children.map((child, i) => (
      // TODO: refactor key
      <>
        {child}
        {i !== children.length - 1 && <div style={{height: gapHeight}}/>}
      </>
    ))}
  </div>
 );
};
