const Migrations = artifacts.require("Ballot");

module.exports = function(_deployer) {
  _deployer.deploy(Migrations);
};
