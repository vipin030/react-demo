import React, {Component} from 'react';
import uuid from 'uuid';

class AddProject extends Component {

	constructor(){
		super();
		this.state = {
			newProject:{}
		} 
	}
	static defaultProps = {
			categories:['Web Design','Web Development','Mobile Development']
	}

	handleSubmit(e){
		if(this.refs.title.value==""){
			alert("Title cannot be null");
		}
		else {
			this.setState({
				newProject:{id: uuid.v4(),title:this.refs.title.value,
					category:this.refs.category.value
				}
			}, function(){
				console.log(JSON.stringify(this.state))
				this.props.addProject(this.state.newProject);
			})
		}
		e.preventDefault();
	}
	render(){
		let categoryOptions = this.props.categories.map(category => {
				return <option key={category}>{category}</option>
		})
		return(
			<div className="project-container">
			<h3>Add project</h3>
			<form onSubmit={this.handleSubmit.bind(this)}>
			<div>
			<label>Title</label>
			<input type="text" ref="title"/>
			</div>
			<div>
			<label>Category</label>
			<select ref="category">
			{categoryOptions}
			</select>
			</div>
			<div>
			<input type="submit" value="submit" />
			</div>
			</form>
			</div>
		)
	}
}

export default AddProject;