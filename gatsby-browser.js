exports.onRouteUpdate = (locationHash) => {
  if (locationHash.location.hash) {
    let location = locationHash.location.hash.slice(2);

    if (location === 'ContactUsContainer') {
      setTimeout(() => {
        let a = document.querySelector(`#${location}`).scrollIntoView(false);
      }, 0);
    } else {
      setTimeout(() => {
        let a = document.querySelector(`#${location}`).scrollIntoView();
        window.scrollBy(0, -70);
      }, 0);
    }
  }
};
