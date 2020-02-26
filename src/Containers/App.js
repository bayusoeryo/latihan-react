import React , {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from "../Components/ErrorBoundry";
// import {Robots} from '../Components/Robots.js'
import './App.css';
import {setSearchField, requestRobots} from "../actions";



const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange : (event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch (requestRobots())
    }
};

class App extends Component {
    // replace by props
    // constructor() {
    //     super()
    //     this.state = {
    //         Robots : []
    //     }
    // };
    componentDidMount() {
        this.props.onRequestRobots()
        // replace by action and reducers
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(respond=> respond.json())
        //     .then(users => this.setState({Robots : users}))
    }
     // replace by action and reducers
     // onSearchChange = (event) => {
     //     this.setState({searchfield: event.target.value});
     // };
    render(){
        const {searchField, onSearchChange, robots, isPending } =this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return isPending ?
            <div className= 'tc'>
                <h1 className='f1' >RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <h2> Loading </h2>
            </div> :
            (
                <div className='tc'>
                    <h1 className='f1' >RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Robots ={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);