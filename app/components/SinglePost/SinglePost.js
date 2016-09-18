import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
import { bindActionCreators } from 'redux';
import LoadingCircular from '../elements/CircularProgress';
import Paper  from 'material-ui/Paper';

const styles = {
    root: {
        marginBottom: '20px',
        padding: '20px'
    }
};

// @todo Refactor single posts into stateless components - Data is already in state.
class SinglePost extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillUnmount() {
        this.props.actions.resetActivePost();
    }

    componentWillMount() {
        this.props.actions.fetchPost(this.props.params.slug);
    }
    
    render() {
        if(! this.props.post) {
            return <LoadingCircular/>;
        }

        return (
            <Paper style={styles.root}>
                <div>
                    <h2 className="post-title">{this.props.post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}} />
                </div>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);