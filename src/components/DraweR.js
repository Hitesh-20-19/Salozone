import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import Form from './Form'
const DraweR = (props) => {
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={props.close()}
      >
        <div style={{ width: 600 }} >
          <Form input={props.input} inputLength={props.inputLength} close={props.close}
            login={props.login}
            SigninHandler={props.SigninHandler}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default DraweR

