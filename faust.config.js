import { setConfig } from '@faustwp/core'
import possibleTypes from './possibleTypes.json'
import templates from './src/templates'

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
    templates,
    experimentalPlugins: [],
    experimentalToolbar: true,
    possibleTypes,
    usePersistedQueries: true,
})
