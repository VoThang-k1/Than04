// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import {Upgradeable} from "../common/Upgradeable.sol";
import {Implementation} from "../implementation/Implementation.sol";

contract ImplementationV1 is Upgradeable {

    // function setToken20Address(address _addr) public onlyOwner {
    //     require(_addr != address(0), "Controller: The address can not be address 0");
    //     require(_addr != token20Address, "Controller: The address can not be the old address");
    //     token20Address = _addr;
    // }

    function setswapHandler(address _addr) public onlyOwner {
        require(_addr != address(0), "Controller: The address can not be address 0");
        require(_addr != swapHandler, "Controller: The address can not be the old address");
        swapHandler = _addr;
    }

    function setReceiver(address _addr) public onlyOwner{
        require(_addr != address(0), "Controller: The address can not be address 0");
        require(_addr != receiver, "Controller: The address can not be the old address");
        receiver = _addr;
    }

    function setRate(uint256 _rate) public onlyOwner{
        require(_rate > 0, "Controller: can not be 0");
        Rate = _rate;
        emit SetRate(_rate);
    }

    function depositAndSwap(
        address wallet
    ) external payable {
        _delegatecall(swapHandler);
    }
}