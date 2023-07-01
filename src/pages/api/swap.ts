import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { amountIn, tokenIn, tokenOut, executerAdress } = req.body;
  const url = process.env.INFURA_GOERLI_ENDPOINT
  const privateKey = process.env.privateKey
  // var signer = new ethers.Wallet(privateKey, connection);
  switch (method) {
    case "POST":
      try {
        const provider = new ethers.JsonRpcProvider(url);
        const signer = new ethers.Wallet(privateKey ?? "", provider);
        console.log(executerAdress);
        const swapContract = new ethers.Contract(
          "0x426964a065b8A3cdf4bb7Bbc9AA583e76669BA0a",
          [
          "function swapExactInputSingle(uint256 amountIn, address tokenIn, address tokenOut, address executerAdress) external returns (uint256 amountOut)",
          "function swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum, address tokenIn, address tokenOut, address executerAdress) external returns (uint256 amountIn)"],
          signer
        );
        console.log(signer.provider?.getBalance(signer.address))
        console.log(swapContract?.getFunction("swapExactInputSingle"))
console.log({amountIn,
          tokenIn,
          tokenOut,
          executerAdress})
        const tx = await swapContract?.swapExactInputSingle
          ?.(
          amountIn,
          tokenIn,
          tokenOut,
          executerAdress
        );
        res.status(200).json({ success: true, data: null });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false
        })
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
