import IndexComponent from './IndexComponent'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndexComponent)
