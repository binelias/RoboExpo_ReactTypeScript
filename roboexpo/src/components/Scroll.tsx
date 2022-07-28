import * as React from 'react';

type Props = {
  children?: JSX.Element
}
const Scroll = (prop: Props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;