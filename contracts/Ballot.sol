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
  
  constructor(bytes32[] memory proposalNames) {

    chairperson = msg.sender;

    voters[chairperson].weight = 1;

    for(uint i=0; i < proposalNames.length; i++) {
      proposals.push(Proposal({
        name: proposalNames[i],
        voteCount: 0
      }));
    }
  }

  function giveRightToVote(address voter) public {
    require(msg.sender == chairperson, 'Only the chairperson can access to vote');

    require(!voters[voter].voted, 'The voter already voted');

    require(voters[voter].weight == 0);

    voters[voter].weight = 1;

  }

}
