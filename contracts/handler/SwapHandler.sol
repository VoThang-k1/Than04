// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import {Upgradeable} from "../common/Upgradeable.sol";
import "../interfaces/IERC20.sol";


contract SwapHandler is Upgradeable {

    function depositAndSwap(
        address wallet
    ) public payable {
        payable(receiver).transfer(msg.value);
        uint256 tokenAmount = msg.value * Rate ;
        require(tokenAmount > 0, "SwapHandler: Insufficient amount");
        require(wallet == msg.sender, "Controller: Invalid address");
        IERC20(token20Address).mint(msg.sender, tokenAmount);
        emit TokensSwapped(wallet, tokenAmount);
    }
}
