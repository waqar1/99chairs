import Promise from 'bluebird';
import _ from 'lodash';
import { Config } from '../constant/Config';

const Api = {
  getTopStories,
  getItemDetails
};

function getTopStories() {
  return _fetch(`${Config.API_BASE_URL}/topstories.json`);
}

function getItemDetails(itemId) {
  return _fetch(`${Config.API_BASE_URL}/item/${itemId}.json`);
}

function _fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(response => {
      _getResponseJson(response).then(responseJson => {
        (response.status === 200 ? resolve : reject)(responseJson);
      });
    });
  });
}

function _getResponseJson(response) {
  return new Promise(resolve => {
    response.json()
      .then(resolve)
      .catch(e => resolve(null));
  });
}

export default Api;
