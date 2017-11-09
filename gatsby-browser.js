// import { anchorate } from 'anchorate'
//
// exports.onRouteUpdate = () => {
//   console.log('inside onRouteChnage')
//   anchorate()
// }








exports.onRouteUpdate = (location) => {
  if (location.location.hash) {
    location = location.location.hash.slice(2);
    setTimeout(() => {
      let a = document.querySelector(`#${location}`).scrollIntoView();
      window.scrollBy(0, -70);
    }, 0);
  } else {}
};
