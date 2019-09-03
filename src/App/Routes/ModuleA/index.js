import loadable from '@loadable/component'

const LoadableModuleA = loadable(() => import(/* webpackChunkName:"modulea" */ './ModuleA'));

export default LoadableModuleA;