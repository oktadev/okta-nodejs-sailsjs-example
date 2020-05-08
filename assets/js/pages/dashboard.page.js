parasails.registerPage('dashboard', {

    data: {
        currentData: undefined
    },

    beforeMount: function () {
        // Attach any initial data from the server.
        _.extend(this, window.SAILS_LOCALS);
    },

    methods: {

        toggleFountain: function (e) {

            $.post("device/toggle-fountain",
                {
                    on: e.target.checked,
                    _csrf: window.SAILS_LOCALS._csrf
                }
            )
        }

    }

});