/*
 * Copyright (c) 2020 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {};
  profile.id = String(json.userId);
  profile.displayName = (json.firstName + ' ' + json.lastName).trim();
  profile.profileUrl = 'https://accounts.autodesk.com/users/' + profile.id + '/view';
  if (json.emailId) {
    profile.emails = [{ value: json.emailId }];
  }

  return profile;
};
