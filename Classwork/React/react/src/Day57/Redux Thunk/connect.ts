import { connect } from "react-redux";
import { Dispatch } from "redux";
import LinkActionMethods from './actions/actions'
import { LinkActions } from './actions/types';
import { IRootState } from './reducers';
import PureLinkList from './renders/LinkList'

const mapStateToProp = (state: IRootState) => {
    return {
        links: state.links
    }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: (Dispatch<LinkActions>)) => {
    return {
        addLink: () => dispatch(LinkActionMethods.addLink('Accelerate', 'http://www.acceleratedhk.com')),
        clearLink: () => dispatch(LinkActionMethods.clearLink()),
        reloadLink: async () => {
            try {
                const links = await LinkActionMethods.loadLink()
                dispatch(LinkActionMethods.loadLinkSuccess(links))
            } catch (err) {
                dispatch(LinkActionMethods.loadLinkFailure())
            }
        }
    }
}

// Link with connect()
const LinkList  = connect(mapStateToProp, mapDispatchToProp)(PureLinkList)
export default LinkList