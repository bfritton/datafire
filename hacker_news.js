"use strict";
let datafire = require('datafire');

let hacker_news = require('@datafire/hacker_news').actions;
let google_sheets = require('@datafire/google_sheets').actions;
let project = require('@datafire/project').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let storyIDs = await hacker_news.getStories({
      storyType: "top",
    }, context);
    let item = await Promise.all(storyIDs.map(storyID => hacker_news.getItem({
      itemID: storyID,
    }, context)));
    let user = await hacker_news.getUser({}, context);
    return user;
  },
});
