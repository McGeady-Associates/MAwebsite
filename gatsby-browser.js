exports.onRouteUpdate = (location) => {
  // console.log('location: ', location)
  if (location.hash) {
    // console.log('inside onRouteUpdate')
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView();
    }, 0);
  } else {
    // console.log('browser API, route change');
  }
};