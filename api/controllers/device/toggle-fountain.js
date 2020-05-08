module.exports = {

  friendlyName: 'Toggle Fountain',

  description: 'Logs a request for the Fountain to be turned on',

  exits: {

  },

  fn: async function () {

    var on = this.req.body.on == 'true';

    await FountainRequest.create({
      respondedTo: false,
      toggle: on
    });

    return this.res.json({ success: true });

  }


};
