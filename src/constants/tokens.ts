import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDT: new Token(DEFAULT_CHAIN_ID, '0xe613ebd1eae99d824da8a6c33ec833a62bc04b5a', 6, 'ckUSDT', 'ckUSDT'),
    USDC: new Token(DEFAULT_CHAIN_ID, '0x83D4a9Ea77a4dbA073cD90b30410Ac9F95F93E7C', 18, 'USDC', 'USDC')
}
