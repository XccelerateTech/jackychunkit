import { connect } from "react-redux";
import { Dispatch } from "redux";
import LinkActionMethods from './actions/actions'
import { LinkActions } from './actions/types';
import { IRootState } from './reducers';
import PureNameList from './renders/NameList'

const mapStateToProp = (state: IRootState) => {
    return {
        people: state.people
    }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: (Dispatch<LinkActions>)) => {
    return {
        reloadLink: async () => {
            try {
                dispatch(LinkActionMethods.loadLinkSuccess(await LinkActionMethods.loadLink()))
            } catch (err) {
                dispatch(LinkActionMethods.loadLinkFailure())
            }
        }
    }
}

// Link with connect()
const NameList  = connect(mapStateToProp, mapDispatchToProp)(PureNameList)
export default NameList