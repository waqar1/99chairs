import React from 'react';
import moment from 'moment';

import Misc from '../../Utils/Misc';

const NewsListItem = ({ item, index }) => (
  <li key={ item.id }>
    <a href={item.url}>{ index + 1 }. { item.title }</a>
    <span className="meta-details">
      {item.score} points by {item.by} {moment(item.time * 1000).startOf('day').fromNow()} {Misc.getDomain(item.url)}
    </span>
  </li>
);

export default NewsListItem;