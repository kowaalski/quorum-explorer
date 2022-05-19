export type SCDFunctionArg = {
<<<<<<< HEAD
  name: string,
  type: string,
  value: any
}
=======
  name: string;
  type: string;
};
>>>>>>> master

export type SCDConstructor = {
  inputs: SCDFunctionArg[];
};

export const VoidSCDConstructor : SCDConstructor = {
  inputs: []
}

export type SCDFunction = {
  inputs: SCDFunctionArg[];
  outputs: SCDFunctionArg[];
  name: string;
};
// todo check on this type - we don't really use it atm
export type SCDEvent = {
  inputs: SCDFunctionArg[];
  outputs: SCDFunctionArg[];
  name: string;
};

export type SCDefinition = {
  constructor: SCDConstructor;
  functions: SCDFunction[];
  events: SCDEvent[];
};

export const VoidSCDefinition: SCDefinition = {
    constructor: VoidSCDConstructor,
    functions: [],
    events: []
}

// below are type definitions for the contart we display in the dropdown
export type SmartContract = {
  name: string;
  contract: string;
};

export type CompiledContract = {
  abi: [];
  bytecode: string;
};

export const defaultSmartContracts: SmartContract[] = [
  {
    name: "Array",
    contract: `
    pragma solidity ^0.8.13;

    contract Array {
        uint[] public arr;
    
        function get(uint i) public view returns (uint) {
            return arr[i];
        }
    
        function getArr() public view returns (uint[] memory) {
            return arr;
        }
    
        function push(uint i) public {
            arr.push(i);
        }
    
        function pop() public {
            arr.pop();
        }
    
        function getLength() public view returns (uint) {
            return arr.length;
        }
    
        function remove(uint index) public {
            delete arr[index];
        }
    
        function examples() external {
            uint[] memory a = new uint[](5);
        }
    }
    
    
    `,
  },
];
