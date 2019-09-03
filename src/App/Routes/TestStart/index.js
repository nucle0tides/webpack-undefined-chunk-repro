import loadable from '@loadable/component'

const LoadableTestStart = loadable(() => import(/* webpackChunkName:"teststart" */ './TestStart'));

export default LoadableTestStart;