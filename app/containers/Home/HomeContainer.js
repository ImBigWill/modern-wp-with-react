import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
//import { Link } from 'react-router';
import LoadingCircular from '../../components/elements/CircularProgress';
//import Paper from 'material-ui/Paper';
import HomePage from '../../components/Home/HomePage';

class HomeContainer extends Component {

	renderPost() {
		if(! this.props.isFetched) {
			return <LoadingCircular/>
		} else {
			return (
				<HomePage posts={this.props.posts} />
			)
		}
	}

	render() {
		return (
			<div>
			{this.renderPost()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.posts, isFetched: state.posts.isFetched };
}

export default connect(mapStateToProps, actions)(HomeContainer);