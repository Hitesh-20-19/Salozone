import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export default class CarouseL extends Component {
                 state = {
                   data: [
                     "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                     "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
                     "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                     "https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
                     "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                   ],
                   index: 0,
                 };

                 handleSelect = (selectedIndex, e) => {
                   this.setState({ index: selectedIndex });
                 };

                 render() {
                   return (
                     <div>
                       <Carousel
                         activeIndex={this.state.index}
                         onSelect={this.handleSelect}
                         interval="5000"
                       >
                         {this.state.data.map((item) => {
                           return (
                             <Carousel.Item>
                               <img
                                 
                                 className="d-block w-100"
                                 src={`${item}`}
                                 alt="slides"
                               />
                               <Carousel.Caption>
                                 <h1>This is the Image slider</h1>
                                 <p>
                                   Best in class makeover starting from $100
                                 </p>
                               </Carousel.Caption>
                             </Carousel.Item>
                           );
                         })}
                       </Carousel>
                     </div>
                   );
                 }
               }
