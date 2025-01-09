import TokenCard from '@/components/swap/TokenCard';
import { IDerivedMintInfo, useMintActionHandlers, useMintState } from '@/state/mintStore';
import { useSwapActionHandlers } from '@/state/swapStore';
import { SwapField } from '@/types/swap-field';
import { Currency } from '@cryptoalgebra/sdk';
import { ChevronsUpDownIcon } from 'lucide-react';
import { useCallback } from 'react';

interface ISelectPair {
    mintInfo: IDerivedMintInfo;
    currencyA: Currency | undefined;
    currencyB: Currency | undefined;
}

const SelectPair = ({ mintInfo, currencyA, currencyB }: ISelectPair) => {
    const { onCurrencySelection, onSwitchTokens } =
        useSwapActionHandlers();

    const { onStartPriceInput } = useMintActionHandlers(mintInfo.noLiquidity);

    const { startPriceTypedValue } = useMintState();

    const handleInputSelect = useCallback(
        (inputCurrency: Currency) => {
            onCurrencySelection(SwapField.INPUT, inputCurrency);
        },
        [onCurrencySelection]
    );

    const handleOutputSelect = useCallback(
        (outputCurrency: Currency) => {
            onCurrencySelection(SwapField.OUTPUT, outputCurrency);
        },
        [onCurrencySelection]
    );

    const handleTypeInput = useCallback(
        (value: string) => {
            onStartPriceInput(value);
        },
        [onStartPriceInput]
    );

    return (
        <div className="relative flex flex-col gap-2 items-center">
            <TokenCard
                disabled
                showBalance={false}
                value={'1'}
                currency={currencyA}
                otherCurrency={currencyB}
                handleTokenSelection={handleInputSelect}
            />

            <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 bg-card-dark w-fit rounded-full border-[5px] border-[#1a1d2b] hover:bg-card-hover duration-200"
                onClick={onSwitchTokens}
            >
                <ChevronsUpDownIcon size={16} />
            </button>

            <TokenCard
                showBalance={false}
                value={startPriceTypedValue}
                handleTokenSelection={handleOutputSelect}
                currency={currencyB}
                otherCurrency={currencyA}
                handleValueChange={handleTypeInput}
            />

        </div>
    );
};

export default SelectPair;
