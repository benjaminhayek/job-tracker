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
        const divStyle = {textAlign: "center"}
        if(this.props.isDragged === true) {
            console.log('hi')
            List.style={divStyle}
        }
        return (
            <div className='applied'>
                <h1 className='companies-title'>Companies Applied For</h1>
                <div className='companies-list-holder'>
                    <List
                        values={this.state.companies}
                        onChange={({ oldIndex, newIndex }) =>
                        this.setState(prevState => ({
                            companies: arrayMove(prevState.companies, oldIndex, newIndex)
                        }))
                        }
                        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                        renderItem={({ value, props }) => <li className='companies' {...props}>{value}</li>}
                    />
                </div>
            </div>
        );
      }
}

export default Applied;