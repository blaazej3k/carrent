module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: "CarRentalAppClient",
      script: "usr/bin/grunt",
      args: "serve --force"
    }],
  deploy: {
    production: {
      user: "user-name",
      host: "server-address",
      ref: "origin/develop",
      repo: "git-url",
      path: "/opt/deploy",
      "post-deploy": "npm install && bower install && pm2 startOrRestart ecosystem.json --env production"
    }
  }
}
