import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/comp0.scss';

class comp0 extends React.Component {
  static propTypes() {
    return {
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    };
  }

  componentDidMount() {
    const svg = d3.select(ReactDOM.findDOMNode(this));

    svg.append('text')
      .attr('class', style.text)
      .attr('x', this.props.width / 2)
      .attr('y', this.props.height / 2)
      .attr('transform', 'rotate(30)')
      .text('this is not a test');
  }

  render() {
    return (
      <svg
        className={style.comp0}
        width={this.props.width}
        height={this.props.height}
      />
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
