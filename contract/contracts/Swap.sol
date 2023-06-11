// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.9;
pragma abicoder v2;
import "../../node_modules/uniswap/v3-peripheral/contracts/libraries/TransferHelper.sol";
import "../../node_modules/uniswap/v3-peripheral/contracts/interfaces/ISwapRouter.sol";

contract SwapToken{
  ISwapRouter public constant swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564); 
  address public constant WETH9 = 0xc778417E063141139Fce010982780140Aa0cD5Ab;
  address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
  address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
  function swapExactInputString(uint amountIn) external returns(uint amountOut){
    TransderHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountIn);
    TransferHelper.safeApprove(WETH9, address(swapRouter), amountIn);
    ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
      tokenIn: WETH9,
      tokenOut: DAI,
      fee: 3000,
      recipient: msg.sender,
      deadline: block.timestamp,
      amountIn: amountIn,
      amountOutMinimum:0,
      aqrtPriceLimitX96: 0
  });
  amountOut = swapRouter.exactInputSingle(params);
  }
}