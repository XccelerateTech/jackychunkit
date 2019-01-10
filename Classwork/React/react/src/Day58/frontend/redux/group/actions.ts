import axios from 'axios'
import { ILoadGroupsAction, LOAD_GROUPS } from './types'

export default class Actions {
    public static loadGroups(groups: ReactExamples.Group[]): ILoadGroupsAction {
        return {
            groups,
            type: LOAD_GROUPS,
        };
    }

    public static async fetchGroups() {
        try {
            const res = await axios.get<ReactExamples.User[]>(`${process.env.REACT_APP_API_SERVER}/api/groups`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            return res.data
        } catch (err) {
            throw err
        }

    };
}