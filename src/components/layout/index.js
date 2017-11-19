import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsHeader from '../news-header';

export default class Layout extends Component {
  render() {
    const {
      children
    } = this.props;
    return (
      <div>
        <div>
          <NewsHeader />
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
