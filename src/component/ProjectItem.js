import React, {Component} from 'react';

class ProjectItem extends Component {

	deleteProject(id){
		this.props.onDelete(id)
	}
	render(){
		return (
		  <li className="project-item">
		  	<strong>{this.props.project.title}</strong>-{this.props.project.category}
		  	<a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>x</a>
		  </li>
		);
	}
}

export default ProjectItem;   