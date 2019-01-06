import * as History from 'history'
import * as React from 'react'
import {
    Link,
    match
} from 'react-router-dom'

import links from './links'

const LinkList = ({ Match, history }: { Match: match, history: History.History }) => {
    return (
        <div>
            <h2>Links</h2>
            <ul>
                {links.map((link, i) => {
                    const clickHandler = () => confirm('Are you sure to proceed?') && history.push(`/links/${i}`, { fromOnClick: true })
                    return (
                        <li key={i}>
                            {link.title}
                            <br />
                            <Link to={`/links/${i}`}> &lt;Link&gt; </Link>

                            <br />
                            <Link to={{
                                pathname: `/links/${i}`,
                                state: { extraInformation: true }
                            }}>{'<Link>'} with extra information </Link>

                            <br />
                            <a onClick={clickHandler}>OnClick Navigate with history</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LinkList