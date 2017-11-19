import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Pages from './constant/Pages';

import NewsListItem from './components/news-list-item';
import NewsList from './components/news-list';
import Layout from './components/layout';

export const routes = (
  <Route path={Pages.INDEX} component={Layout}>
    <IndexRoute component={NewsList} />
    <Route path={Pages.NEWS_ITEM} component={NewsListItem} />      
  </Route>
);
