import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount("ember-caluma", {
    as: "form-builder",
    path: "/form-builder"
  });
  this.route("show-forms");
  this.route("home");
});

export default Router;
