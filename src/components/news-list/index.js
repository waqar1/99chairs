import React, { Component } from 'react';
import _ from 'lodash';
import NewsListItem from '../news-list-item';
import Api from '../../service/Api';

export default class NewsList extends Component {
  state = {
    isError: false,
    topStoriesList: null,
    itemsData: []
  };

  componentDidMount() {
    Api.getTopStories()
      .then((response) => {
        _.forEach(response, (item) => {
          Api.getItemDetails(item)
            .then((itemResponse) => {
              this.setState({
                itemsData: [...this.state.itemsData, itemResponse]
              });
            });
        });
      })
      .catch((error) => {
        this.setState({
          isError: true
        });
      });
  }

  render() {

    if (this.state.isError) {
      return (
        <div>An Error Occured, Please Try again</div>
      );
    }

    if (!this.state.itemsData.length) {
      return null;
    }

    return (
      <div>
        <ul className="items-list">
          {
            this.state.itemsData.map((item, index) => NewsListItem({ item, index }))
          }
        </ul>
      </div>
    );
  }
}
