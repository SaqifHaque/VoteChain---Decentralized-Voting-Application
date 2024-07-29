const Migrations = artifacts.require("Ballot");

module.exports = function(_deployer) {
  const initialValue = []; 
  _deployer.deploy(Migrations, initialValue);
};
