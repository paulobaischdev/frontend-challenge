/** @type {import('next').NextConfig} */

const dotenv = require('dotenv')

dotenv.config()

const nextConfig = {
    compiler: {
        styledComponents: true 
    }
}

module.exports = nextConfig

