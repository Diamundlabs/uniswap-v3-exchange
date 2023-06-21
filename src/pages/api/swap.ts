import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { amountIn, tokenIn, tokenOut, executerAdress } = req.body;
  const swapContract = new ethers.Contract(
    "0x426964a065b8A3cdf4bb7Bbc9AA583e76669BA0a",
    `
  [
    {
      "inputs": [],
      "name": "poolFee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "routerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenOut",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "executerAdress",
          "type": "address"
        }
      ],
      "name": "swapExactInputSingle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMaximum",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenOut",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "executerAdress",
          "type": "address"
        }
      ],
      "name": "swapExactOutputSingle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "swapRouter",
      "outputs": [
        {
          "internalType": "contract ISwapRouter",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  `
  );

  switch (method) {
    case "POST":
      try {
        const tx = await swapContract?.swapExactInputSingle(
          amountIn,
          tokenIn,
          tokenOut,
          executerAdress
        );
        res.status(200).json({ success: true, data: tx });
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      console.log(swapContract.interface.fragments);
      res.status(400).json({ success: false });
      break;
  }
}
