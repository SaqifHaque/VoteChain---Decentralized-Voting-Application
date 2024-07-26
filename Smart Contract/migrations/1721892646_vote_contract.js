const Migrations = artifacts.require("VoteContract");

module.exports = function(_deployer) {
  const candidateNames = ["Mark", "Mike", "Henry", "Rock"];
  const duration = 90; 
  _deployer.deploy(Migrations, candidateNames, duration);
};
