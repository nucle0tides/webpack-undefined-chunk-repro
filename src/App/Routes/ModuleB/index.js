import loadable from '@loadable/component'

const LoadableModuleB = loadable(() => import(/* webpackChunkName:"moduleb" */ './ModuleB'));

export default LoadableModuleB;