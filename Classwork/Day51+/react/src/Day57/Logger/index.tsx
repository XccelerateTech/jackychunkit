import * as React from "react";
import { connect, Provider } from "react-redux";
import { Dispatch } from "redux";
import { addLink, clearLink, LinkActions} from './actions/link';
import { IRootState } from './reducers';
import { store } from './store';

interface ILinkListProps {
  links: Array<{
    title: string,
    url: string
  }>,
  addLink: () => void,
  clearLink: () => void
}

const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map(l => (
        <div>{l.title} - {l.url}</div>
      ))}
    </div>
  );
}

const mapStateToProp = (state: IRootState) => {
  return {
    links: state.links
  }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch(addLink('Accelerate', 'http://www.acceleratedhk.com')),
    clearLink: () => dispatch(clearLink()),
  }
}

// Link with connect()
const LinkList = connect(mapStateToProp, mapDispatchToProp)(PureLinkList)

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);
export default App