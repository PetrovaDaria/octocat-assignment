import React, {Fragment} from 'react';

type TGapsProps = {
  children: (React.ReactNode | JSX.Element)[];
  gapHeight: string;
};

export const Gaps = ({children, gapHeight}: TGapsProps): JSX.Element => {
 return (
  <div>
    {children.map((child, i) => (
      <Fragment key={i}>
        {child}
        {i !== children.length - 1 && <div style={{height: gapHeight}}/>}
      </Fragment>
    ))}
  </div>
 );
};
