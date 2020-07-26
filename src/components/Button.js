import React from 'react'
import {Button} from 'react-bootstrap'
const ButtoN = (props) => {
    return (
      <div>
        <Button variant="info" onClick={props.handleDrawer}>{props.text}</Button>
      </div>
    );
}

export default ButtoN
