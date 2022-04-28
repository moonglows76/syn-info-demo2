import info from './constants/info'

export default (context, inject) => {
  inject('constants', {
    info,
  });
}
