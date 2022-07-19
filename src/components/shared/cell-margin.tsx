import React from 'react';

type TCellOffsetProps = {
  margin: string;
  children: React.ReactNode | JSX.Element;
};

export const CellMargin = ({children, margin}: TCellOffsetProps): JSX.Element => {
 return (
  <div style={{margin}}>{children}</div>
 );
};
