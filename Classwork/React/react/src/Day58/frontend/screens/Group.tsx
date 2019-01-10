import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import action from '../redux/group/actions';
import { GroupActions } from '../redux/group/types'
import { IRootState } from '../redux/store';

interface IGroupScreenProps {
  groups: ReactExamples.Group[];
  reloadGroup: () => void;
}

class PureGroup extends React.Component<IGroupScreenProps> {
  public componentWillMount() {
    this.props.reloadGroup();
  }

  public render() {
    return (
      <div>
        {/* <SearchBox onSearch={this.onFilter}></SearchBox> */}
        
        {this.props.groups.map(group => (
          <ul className="list-group" key={group.id}>
              <li className="list-group-item">{group.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  groups: state.group.groups
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: (Dispatch<GroupActions>) ) => ({
  reloadGroup: async () => {
    try {
      const data = await action.fetchGroups()
      dispatch(action.loadGroups(data));
    } catch(err) {
      throw err
    } 
  }
});

export const Group = connect(mapStateToProps,mapDispatchToProps)(PureGroup);