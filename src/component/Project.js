import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem'

class Project extends Component {

	deleteProject(id){
		this.props.onDelete(id)
	}
	render(){
		let projectItems;
		if(this.props.projects){
			projectItems = this.props.projects.map(project =>{
				return(
					<ProjectItem project={project} onDelete={this.deleteProject.bind(this)}/>
				)
			});
		}
		
		return (
		  <div className="project">
		  	<h3>My project</h3>
		  	{ projectItems }
		  </div>
		);
	}
}

Project.propTypes = {
	projects: PropTypes.string,
	onDelete: PropTypes.func
}
export default Project;   