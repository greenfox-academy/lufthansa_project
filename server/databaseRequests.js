'use strict';

function DataBaseRequests(query) {
  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function (err, result) {
      cb(err, result);
    });
  };

  this.getAllProjects = function (cb) {
    query('SELECT * FROM projects INNER JOIN builds ON (projects.project_id = builds.project_id) WHERE is_visible = TRUE', function (err, result) {
      cb(err, result);
    });
  };

  this.getOneProject = function (id, cb) {
    query('SELECT * FROM projects WHERE project_id = $1', [id], function (err, result) {
      cb(err, result);
    });
  };

  this.changeVisibility = function (id, cb) {
    query('UPDATE projects SET project_is_visible = false WHERE project_id= $1', [id], function (err, result) {
      cb(err, result);
    });
  };

  this.updateProjectProperties = function (id, cb) {
    query('UPDATE projects SET project_name=$1, url=$2 WHERE project_id= $3', [project_name, url, id], function (err, result) {
      cb(err, result);
    });
  };
}

module.exports = DataBaseRequests;
