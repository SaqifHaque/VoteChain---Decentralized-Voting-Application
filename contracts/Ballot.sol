// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ballot {
  
  struct Voter {
    uint vote;
    bool voted;
    uint weight;
  } 

  struct Proposal {
    bytes32 name;
    uint voteCount;
  }

  Proposal[] public proposals;

  mapping(address => Voter) public voters;

  address public chairperson;

  


}
