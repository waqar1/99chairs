import url from 'url';

const Misc = {
  getDomain
};

function getDomain(itemUrl) {
  return itemUrl ? '| ' + url.parse(itemUrl).hostname : null;
}

export default Misc;