module.exports = {


    friendlyName: 'Dashboard',
  
  
    description: 'Displays the Garduino Dashboard',
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/dashboard',
      }
  
    },
  
  
    fn: async function () {
  
      var data = await GardenData.find({
        where: {
  
        },
        sort: [{ readingDateTime: 'DESC' }],
        limit: 1
      })
  
      return {
        currentData: data[0]
      };
  
    }
  
  
  };
  