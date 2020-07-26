import React from 'react'
import { Container, InputGroup, FormControl } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import img from './india.png'
import icon from './close.png'

const Form = (props) => {
    
    let change
    let heading
    let text 
    if(props.login === true){
      change = (
        <h6
          onClick={props.SigninHandler}
          style={{ cursor: "pointer", marginBottom: "5%", color: "#5bc8c9" }}
        >
          Are you new here?
        </h6>
      );
      heading = (
        <h2 style={{ marginBottom: "1%", color: "#404040" }}>
          <strong>Login</strong>
        </h2>
        
      );

      text = "Login"
    }

    else if(props.login === false){
       change = (
         <h6
           onClick={props.SigninHandler}
           style={{ cursor: "pointer", marginBottom: "5%", color: "#5bc8c9" }}
         >
           Back to Login
         </h6>
       );
       heading = (
         <h2 style={{ marginBottom: "1%", color: "#404040" }}>
           <strong>Join Salozone</strong>
         </h2>
       );

       text ="Sign up"
    }

    let button;

    if (props.inputLength.length < 10) {
      button = (
        <Button
          variant="success"
          size="lg"
          disabled
          style={{ paddingRight: "7%", paddingLeft: "7%" }}
        >
          {text}
        </Button>
      );
    } else if (props.inputLength.length === 10) {
      button = (
        <Button
          variant="success"
          size="lg"
          style={{ paddingRight: "7%", paddingLeft: "7%" }}
        >
          {text}
        </Button>
      );
    }

      return (
        <div style={{ marginTop: "10%", marginLeft: "7%" }}>
          <Container>
            <img
              src={icon}
              onClick={props.close()}
              style={{ marginBottom: "10%", cursor: "pointer" }}
              alt="icon"
            />
            {heading}
            {change}
            <InputGroup size="lg" style={{ width: "80%", marginBottom: "5%" }}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  <img src={img} alt="ind" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                type="tel"
                onChange={props.input}
                maxLength="10"
              />
            </InputGroup>
            {button}
          </Container>
        </div>
      );
}

export default Form
