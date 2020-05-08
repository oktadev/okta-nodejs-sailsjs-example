module.exports.routes = {

  '/': { view: 'pages/homepage' },

  'GET /dashboard': { action: 'dashboard/index' },
  'GET /history': { action: 'history/index' },

  'POST /users/logout': { action: 'users/logout' },
  'POST /device/toggle-fountain': { action: 'device/toggle-fountain' }
  
};
