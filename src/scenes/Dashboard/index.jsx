import * as React from 'react';
import './index.less';
import directory from './components/directory/index';
export class Dashboard extends React.Component {
  render() {
    return (
      <div className="homepage">
        <directory />
      </div>
    );
  }
}

export default Dashboard;
