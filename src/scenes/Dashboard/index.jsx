import * as React from 'react';
import './index.less';
import Directory from './components/directory/index';
export class Dashboard extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Directory></Directory>
      </div>
    );
  }
}

export default Dashboard;
