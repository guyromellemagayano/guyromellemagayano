import possibleTypes from '@/possibleTypes.json'
import templates from '@/templates'
import { setConfig } from '@faustwp/core'

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
    templates,
    experimentalPlugins: [],
    experimentalToolbar: true,
    possibleTypes,
})
