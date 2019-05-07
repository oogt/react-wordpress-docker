import React, { Fragment, useState } from 'react';
import './App.css';

import Posts from './components/posts';
import Loader from './components/loader';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <Fragment>
      <Loader show={showLoader}/>
      <div className="App">
        <Posts onPostsLoaded={() => setShowLoader(false) }/>
      </div>
    </Fragment>
  );
}

export default App;
