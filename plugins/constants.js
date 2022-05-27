import top from './constants/top'
import info from './constants/info'

export default (context, inject) => {
  inject('constants', {
    top,
    info,
  });
}
