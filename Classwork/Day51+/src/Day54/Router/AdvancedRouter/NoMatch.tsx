import * as History from 'history'
import * as React from 'react'

const NoMatch = ({ location }: { location: History.Location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);
export default NoMatch