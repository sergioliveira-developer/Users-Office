import React from 'react';
import { Button } from './styles';


function Buttons({ children, ...props }) {

  return <Button {...props}>{children}</Button>
}


export default Buttons;
