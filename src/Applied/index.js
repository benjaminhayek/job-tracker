import React, { Component } from 'react';
import { List, arrayMove } from 'react-movable';
import './Applied.css';

class Applied extends Component {
    constructor(){
        super()
        this.state = {
            companies: ['GoSpotCheck', 'TrackVia']
        }
    }

    render() {
        return (
          <List
            values={this.state.companies}
            onChange={({ oldIndex, newIndex }) =>
              this.setState(prevState => ({
                companies: arrayMove(prevState.items, oldIndex, newIndex)
              }))
            }
            renderList={({ children, props }) => <ul className='companies' {...props}>{children}</ul>}
            renderItem={({ value, props }) => <li {...props}>{value}</li>}
          />
        );
      }
}

export default Applied;