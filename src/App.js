import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Project from './component/Project';
import AddProject from './component/AddProject';

class App extends Component {

  constructor() {
  	super();
  	this.state = {
  		projects:[]
  	}
  }

  componentWillMount(){
  	this.setState({projects:[{id:uuid.v4(), title:'Business Website', category:'Web design'},{id:uuid.v4(),title:'Social App',category:'Mobile Application'}]})
  }

  handleAddProject(obj){
    let project = this.state.projects;
    project.push(obj);
    this.setState({projects:project})
  }

  handleDelete(id){
    let project = this.state.projects;
    let index = project.findIndex(x=> x.id===id)
    project.splice(index,1);
    this.setState({projects:project})
  }

  render() {
    return (
      <div className="App">
       <h2>Simple React Demo</h2>
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Project test="Hello World" projects={this.state.projects}  onDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
