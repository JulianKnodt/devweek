const parsePath = ({location, route}) => {
  if (route.path === '/purse') {
    return {
      pageTitle: 'My Purse',
      // query params id: uuid XOR u:username
      apiEndpoint: `/api/purchased-products${location.search}`
    }
  }
  else if (route.path === '/explore') {
    return {
      pageTitle: 'Explore',
      // query params: limit
      apiEndpoint: `/api/products${location.search}`
    }
  }
}

export default parsePath