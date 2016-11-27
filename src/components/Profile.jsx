import * as d3 from 'd3';
import React from 'react';

import avatarSrc from './styles/profile/avatar6.png';

// import style from './styles/comp0.scss';

class comp0 extends React.Component {
  static propTypes() {
    return {
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12">
        <h2>User</h2>
        <div className="well well-sm">
          <div className="myrow">
            <div className="col-sm-3 col-md-3">
              <img src={avatarSrc} alt="" className="img-thumbnail rounded" />
            </div>
            <div className="col-sm-2 col-md-2">
              <h4>Contact </h4>
              <small><cite title=" San Francisco, USA">San Francisco, USA <i className="glyphicon glyphicon-map-marker" /></cite></small>
              <p>
                Bhaumik Patel <br />
                <i className="glyphicon glyphicon-envelope" />email@example.com
                            <br />
                <i className="glyphicon glyphicon-globe" /><a href="http://www.jquery2dotnet.com">www.jquery2dotnet.com</a>
                <br />
                <i className="glyphicon glyphicon-gift" />June 02, 1988</p>
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                                Social</button>
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  <span className="caret" /><span className="sr-only">Social</span>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Twitter</a></li>
                  <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                  <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                  <li className="divider" />
                  <li><a href="#">Github</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-md-2">
              <h4>Interests </h4>
            </div>
            <div className="col-sm-3 col-md-3">
              <h4>Hobbies </h4>
            </div>
          </div>
          <div className="myrow">
            <div className="col-sm-6 col-md-6">
              <h4>Past Game Performance </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

comp0.defaultProps = {
  width: 1000,
  height: 1000
};
// const pureComp = () => (
//   <div className={style.pureComp}>
//     pureComp
//   </div>
//   );


export default comp0;
