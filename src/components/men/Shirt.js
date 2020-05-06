import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Divider,
  Grid,
  Image,
  Segment,
  Sticky,
  Table,
  Ref,
  Visibility,
} from 'semantic-ui-react'

import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';
import t4 from '../images/t4.jpg';
import t5 from '../images/t5.jpg';
import t6 from '../images/t6.jpg';
import t7 from '../images/t7.jpg';
import t8 from '../images/t8.jpg';
import t9 from '../images/t9.jpg';
import t10 from '../images/t10.jpg';

export default class VisibilityExampleVisibility extends Component {
  state = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  }
  contextRef = createRef()

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { calculations } = this.state

    return (


        // <div className="ui container">
        //     <div className="ui two column grid">
        //         <div className="four wide column">
                    
        //         </div>
        //         <div className="twelve wide column">

        //         </div>
        //     </div>
        // </div>
        
      <Ref innerRef={this.contextRef}>
        <Grid columns={2}>

        <Grid.Column>
            <Sticky context={this.contextRef}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Filters</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                  <div className="ui segment"> 
                                <h3>REFINE YOUR COLLECTION</h3> 
                                <div className="ui divider"></div>
                                    <input type="checkbox" /> Product Type : JACKETS <br/>
                                    <input type="checkbox" /> Product Type : JEANS <br/>
                                    <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                                    <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                                    <a>Clear All</a>
                                </div> 
                  </Table.Row>
                  <Table.Row>
                            <div className="ui segment"> 
                                <h3>GENDER </h3> 
                                <div className="ui divider"></div>
                                    <input type="checkbox" /> Product Type : JACKETS <br/>
                                    <input type="checkbox" /> Product Type : JEANS <br/>
                                    <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                                    <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                                    <a>Clear All</a>
                                </div> 
                  </Table.Row>
                  <Table.Row>
                  <div className="ui segment"> 
                                <h3>CATEGORY </h3> 
                                <div className="ui divider"></div>
                                    <input type="checkbox" /> Product Type : JACKETS <br/>
                                    <input type="checkbox" /> Product Type : JEANS <br/>
                                    <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                                    <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                                    <a>Clear All</a>
                                </div> 
                  </Table.Row>
                 
                
                
                   
                </Table.Body>
              </Table>
            </Sticky>
          </Grid.Column>

          <Grid.Column>
            <Visibility onUpdate={this.handleUpdate}>
              <Segment>


              <div className="ui container">
                <div className="ui container center aligned">
                    <h1 className="underline1">Men's Clothing</h1> <br/>
                </div>
      
                <div className="doubling ui two column grid">

                    <div className="four wide column">

                   </div>
                 


                    <div className="sixteen wide column">
                        <div className="doubling ui three column grid">

                            {/* First Column */}
                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t1} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t2} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                    
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t1} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t2} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t1} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t2} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t1} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t2} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>


                            {/* Second Column */}
                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t3} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t4} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t3} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t4} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t3} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t4} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t3} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t4} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>


                            {/*  Third Column*/}
                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t5} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t6} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t5} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t6} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t5} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t6} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t5} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t6} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            {/* Fourth Column */}
                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t7} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t8} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t7} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t8} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t7} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t8} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t7} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t8} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            {/*Fitth Column  */}
                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t9} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t10} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t9} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t10}  class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div class="ui fade reveal">
                                        <div class="visible content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t9} class="ui big image" />
                                        </div>
                                        <div class="hidden content">
                                            <a className="ui right corner label large">
                                                <i className="heart icon"></i>
                                            </a>
                                            <img src={t10} class="ui big image" />
                                        </div>
                                    </div>
                                    Half Mangos T-shirt <br/>
                                    <b>&#8377; 250</b>
                                </div>
                            </div>


                            </div>

                    </div>
                </div>

               
            </div>

                



              

              </Segment>
            </Visibility>
          </Grid.Column>

            <Grid.Column>
              zaid
            </Grid.Column>

         
        </Grid>
      </Ref>
    )
  }
}