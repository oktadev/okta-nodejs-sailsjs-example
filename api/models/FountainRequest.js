module.exports = {
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },

        dateTime: {
            type: 'number',
            autoCreatedAt: true
        },

        toggle: {
            type: 'boolean'
        },

        respondedTo: {
            type: 'boolean'
        },

        respondedAt: {
            type: 'number',
            autoUpdatedAt: true
        }
    }
}