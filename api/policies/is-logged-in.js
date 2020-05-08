module.exports = async function (req, res, proceed) {

  if (req.session.passport) {     
    return proceed();
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.
  return res.unauthorized();

};
