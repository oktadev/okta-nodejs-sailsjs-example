module.exports = {

    friendlyName: 'Logout',

    description: 'Logs the User Out',

    exits: {

    },


    fn: async function () {

        this.req.session.destroy(function () {

        });
        this.res.clearCookie('connect.sid');
        this.res.redirect('/');
    }


};
