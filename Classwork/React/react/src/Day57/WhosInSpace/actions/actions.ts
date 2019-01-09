import axios from 'axios';
import * as type from './types'

export default class LinkActionMethods {
    public static loadLinkSuccess(people: type.IPeople[]): type.ILoadLinkSuccessAction {
        return {
            people,
            type: type.LOAD_LINK_SUCCESS,
        }
    }

    public static loadLinkFailure(): type.ILoadLinkFailureAction {
        return {
            type: type.LOAD_LINK_FAILURE
        }
    }

    public static async loadLink() {
        try {
            const res = await axios('http://api.open-notify.org/astros.json')
            const people = res.data.people.map((person: {craft: string, name: string}) => ({
                craft: person.craft,
                name: person.name
            }));
            return people
        } catch (err) {
            return null
        }
    }
}