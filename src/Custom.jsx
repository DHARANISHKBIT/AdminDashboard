import React from 'react';
import './Admin.css';

import './Custom.css';

function Custom  ({ openSidebarToggle })  {

  return (
<div> 


    <div className='view'>
                <table>
          <tbody>
          <tr>
            <td>No.</td>
              <td>Name</td>
              <td>id</td>
              <td>last seen</td>
              <td>status</td>
             
            </tr>
<hr />
            <tr>
            <td>1</td>
              <td>prasanth</td>
              <td>1003</td>
              <td>2 days ago</td>
              <td><a href="#" className="btn">View</a></td>
            </tr>
            <hr />
            <tr>
            <td>2</td>
              <td>prasanth</td>
              <td>1007</td>
              <td>9 days ago</td>
              <td><a href="#" className="btn">View</a></td>
            </tr>
            <hr />
            <tr>
            <td>3</td>
              <td>prasanth</td>
              <td>1317</td>
              <td>6 days ago</td>
              <td><a href="#" className="btn">View</a></td>
            </tr>
            <hr />
            <tr>
            <td>4</td>
              <td>prasanth</td>
              <td>1303</td>
              <td>2 days ago</td>
              <td><a href="#" className="btn">View</a></td>
            </tr>
            <hr />
            <tr className='sh'>
              <td colSpan="4">Show all</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default Custom;
