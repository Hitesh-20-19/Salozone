import React, { Component } from 'react'
import Navbar from './Navbar'
import Drawer from './DraweR'
import Carousel from './Carousel'
export default class Homepage extends Component {

  state={
    open:false,
    input:'',
    login:true
  }

  handleDrawer =() =>{
    this.setState({open:true})
  }

  handleClose=()=>{
    this.setState({open:false})
  }

  handleInput=(e)=>{
     const val = e.target.value;
     
     if (e.target.validity.valid) this.setState({ input: e.target.value });
     
     else if (val === "" || val === "-") this.setState({input: val });
    
  }

  SigninHandler=()=>{
      
      this.setState({login: !this.state.login})
  }

    render() {
        
        return (
          <div>
            <Navbar handleDrawer={this.handleDrawer} />
            <Drawer
              open={this.state.open}
              close={()=>this.handleClose}
              input={this.handleInput}
              inputLength={this.state.input}
              SigninHandler={this.SigninHandler}
              login={this.state.login}
            />
            <Carousel />
          </div>
        );
    }
}
