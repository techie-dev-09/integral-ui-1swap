import { useUserState } from "@/state/userStore";
import { Currency, Percent, SwapRouter, Trade, TradeType } from "@cryptoalgebra/sdk";
import { useMemo } from "react";
import { useAccount } from "wagmi";

export function useSwapCallArguments(
    trade: Trade<Currency, Currency, TradeType> | undefined,
    allowedSlippage: Percent,
) {

    const { address: account } = useAccount()

    const { txDeadline } = useUserState()

    return useMemo(() => {

        if (!trade || !account) return []

        const swapMethods: any[] = []

        swapMethods.push(
            SwapRouter.swapCallParameters(trade, {
                feeOnTransfer: false,
                recipient: account,
                slippageTolerance: allowedSlippage,
                deadline: Date.now() + txDeadline * 1000
            })
        )

        if (trade.tradeType === TradeType.EXACT_INPUT) {
            swapMethods.push(
                SwapRouter.swapCallParameters(trade, {
                    feeOnTransfer: true,
                    recipient: account,
                    slippageTolerance: allowedSlippage,
                    deadline: Date.now() + txDeadline * 1000
                })
            )
        }

        return swapMethods.map(({ calldata, value }) => {
            return {
                calldata,
                value,
            }
        })

    }, [trade, account, txDeadline, allowedSlippage])


}
