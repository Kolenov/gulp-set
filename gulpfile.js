'use strict';

const { registry, task, parallel } = require('gulp');
const HubRegistry = require('gulp-hub');

/* load some files into the registry */
const hub = new HubRegistry(['./gulp/tasks/*.js']);
/* tell gulp to use the tasks just loaded */
registry(hub);

const requireDir = require('require-dir')
const taskList = requireDir('./gulp/tasks/', {recurse: true});
const tasks = Object.keys(taskList)

exports.default = task('start', parallel(tasks))
