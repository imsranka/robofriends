import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
         onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
         onRequestRobots: () => dispatch(requestRobots())
     }
}

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         //searchfield:''
    //     }
    // } all changed due to onRequestRobots

    componentDidMount(){
        this.props.onRequestRobots()
        // fetch('https://jsonplaceholder.typicode.com/users')
        //  .then(response => response.json())
        //  .then(users => this.setState({robots: users}));
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    //     console.log(event.target.value);
    // }

    render() {
        //const { robots,searchfield } = this.state;
        //const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());// f to F
        })
        return isPending ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {onSearchChange}  />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
