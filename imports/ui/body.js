import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({});
    },
});

console.log(Template.body);