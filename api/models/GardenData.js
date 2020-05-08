module.exports = {
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },

        readingDateTime: {
            type: 'number',
            autoCreatedAt: true
        },

        temperature: {
            type: 'number'
        },

        moistureContent: {
            type: 'number'
        },

        sunlight: {
            type: 'number'
        },

        ph: {
            type: 'number'
        },

        storedWater: {
            type: 'number'
        },

        fountainStatus: {
            type: 'boolean'
        }
    }

}