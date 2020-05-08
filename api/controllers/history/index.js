module.exports = {


    friendlyName: 'History',
  
  
    description: 'Displays the Garduino History for the last Month',  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/history',
      }
  
    },
  
  
    fn: async function () {  

        var data = await GardenData.find({})
        return {
          gardenData: data
        };  
    }  
  
  };
  