// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by flow-routing-react.js.
import { name as packageName } from "meteor/flow-routing-react";

// Write your tests here!
// Here is an example.
Tinytest.add('flow-routing-react - example', function (test) {
  test.equal(packageName, "flow-routing-react");
});
