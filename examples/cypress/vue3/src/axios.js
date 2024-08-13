'use strict'

import axios from 'axios'

const config = {
    timeout: 30 * 1000,
    baseURL: 'http://backend.test/api/',
}

export default axios.create(config)
