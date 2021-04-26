import React, { useState } from 'react';

import ResourceList from './ResourceList';

const App = () => {
  const [resourceName, setResourseName] = useState('posts');

  return (
    <React.Fragment>
      <button onClick={() => setResourseName('posts')}>Posts</button>
      <button onClick={() => setResourseName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  )
}
export default App;