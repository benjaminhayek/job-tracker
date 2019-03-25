import React, { Component } from 'react';
import { List, arrayMove } from 'react-movable';
import './TopCompanys.css';

class TopCompanys extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            companies: ['Motley Fool', 'Pax8', 'Bitly', 'Travelers Haven', 'Havenly', 'Xero', 'FrontSteps', 'Quantum Metric'],
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    addCompany = (company) => {
        const companies = [...this.state.companies, company]
        this.setState({ companies })
    }

    removeCompany = (name) => {
        const companies = this.state.companies.filter(company => company !== name)
        this.setState({companies})
    }

    hasReplied = (value) => {
        this.setState({response: !this.state.response})
    }

    render() {
        return (
            <div className='applied'>
                <h1 className='companies-title'>Top Company's to Work For</h1>
                <div className='companies-list-holder'>
                    <div className='input-holder'>
                        <button onClick={() => this.addCompany(this.state.name)} className='add-company-btn'>Add A Company</button>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className='company-input' 
                            placeholder='Company Name'>
                        </input>
                    </div>
                    <List
                        values={this.state.companies}
                        onChange={({ oldIndex, newIndex }) =>
                        this.setState(prevState => ({
                            companies: arrayMove(prevState.companies, oldIndex, newIndex)
                        }))
                        }
                        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                        renderItem={({ value, props }) => <div><li className='companies' {...props}>{value}</li><button className='delete-btn' onClick={() => this.removeCompany(value)}>delete</button><button onClick={() => this.hasReplied(value)} className={this.state.response === false ? 'not-replied' : 'have-replied'}></button></div>}
                    />
                </div>
            </div>
        );
      }
}

export default TopCompanys;