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
      <Ref innerRef={this.contextRef}>
        <Grid columns={2}>
          <Grid.Column>
            <Visibility onUpdate={this.handleUpdate}>
              <Segment>

                  <h1>zaid khan</h1>



                <img src={t1} />
                <img src={t2} />
                <img src={t3} />
                <img src={t4} />
                <img src={t5} />
                <img src={t6} />
                <img src={t7} />
                <img src={t8} />

                <img src={t1} />
                <img src={t2} />
                <img src={t3} />
                <img src={t4} />
                <img src={t5} />
                <img src={t6} />
                <img src={t7} />
                <img src={t8} />

                {/* {_.map(
                  [
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                  ],
                  (src, index, images) => (
                    <React.Fragment key={index}>
                      <Image src={src} />
                      {index !== images.length - 1 && <Divider />}
                    </React.Fragment>
                  ),
                )} */}


              </Segment>
            </Visibility>
          </Grid.Column>

          <Grid.Column>
            <Sticky context={this.contextRef}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Calculation</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>direction</Table.Cell>
                    <Table.Cell>{calculations.direction}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>pixelsPassed</Table.Cell>
                    <Table.Cell>
                      {calculations.pixelsPassed.toFixed()}px
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>percentagePassed</Table.Cell>
                    <Table.Cell>
                      {(calculations.percentagePassed * 100).toFixed()}%
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>fits</Table.Cell>
                    <Table.Cell>{calculations.fits.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>width</Table.Cell>
                    <Table.Cell>{calculations.width.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>height</Table.Cell>
                    <Table.Cell>{calculations.height.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>onScreen</Table.Cell>
                    <Table.Cell>{calculations.onScreen.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>offScreen</Table.Cell>
                    <Table.Cell>{calculations.offScreen.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>passing</Table.Cell>
                    <Table.Cell>{calculations.passing.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>topVisible</Table.Cell>
                    <Table.Cell>
                      {calculations.topVisible.toString()}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomVisible</Table.Cell>
                    <Table.Cell>
                      {calculations.bottomVisible.toString()}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>topPassed</Table.Cell>
                    <Table.Cell>{calculations.topPassed.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomPassed</Table.Cell>
                    <Table.Cell>
                      {calculations.bottomPassed.toString()}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Ref>
    )
  }
}