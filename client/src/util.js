const parsePath = (path) => {
  if (path === '/purse') {
    return {
      pageTitle: 'My Purse',
      apiEndpoint: '/api/purse'
    }
  }
  else if (path === '/explore') {
    return {
      pageTitle: 'Explore',
      apiEndpoint: '/api/Explore'
    }
  }
}

export default parsePath
