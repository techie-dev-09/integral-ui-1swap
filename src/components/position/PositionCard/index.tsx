import { usePool } from '@/hooks/pools/usePool';
import {
    usePosition,
    usePositionInFarming,
} from '@/hooks/positions/usePositions';
import { Position } from '@cryptoalgebra/sdk';
import PositionNFT from '../PositionNFT';
import { FormattedPosition } from '@/types/formatted-position';
import { formatUSD } from '@/utils/common/formatUSD';
import { Skeleton } from '@/components/ui/skeleton';
import PositionRangeChart from '../PositionRangeChart';
import TokenRatio from '@/components/create-position/TokenRatio';
import { useDerivedMintInfo } from '@/state/mintStore';
import CollectFees from '../CollectFees';
import RemoveLiquidityModal from '@/components/modals/RemoveLiquidityModal';
import { Farming } from '@/types/farming-info';
import { EternalFarming } from '@/graphql/generated/graphql';
import ActiveFarmingCard from '../ActiveFarmingCard';
import ClosedFarmingCard from '../ClosedFarmingCard';
import { IncreaseLiquidityModal } from '@/components/modals/IncreaseLiquidityModal';
import { useCurrency } from '@/hooks/common/useCurrency';

interface PositionCardProps {
    selectedPosition: FormattedPosition | undefined;
    farming?: Farming | null;
    closedFarmings?: EternalFarming[] | null;
}

const PositionCard = ({
    selectedPosition,
    farming,
    closedFarmings,
}: PositionCardProps) => {
    const { loading, position } = usePosition(selectedPosition?.id);

    const positionInFarming = usePositionInFarming(selectedPosition?.id);

    const positionInEndedFarming = closedFarmings?.filter(
        (closedFarming) =>
            closedFarming.id === positionInFarming?.eternalFarming
    )[0];

    const token0 = position?.token0;
    const token1 = position?.token1;

    const currencyA = useCurrency(token0, true);
    const currencyB = useCurrency(token1, true);

    const [, pool] = usePool(position?.pool);
    const positionEntity =
        pool &&
        position &&
        new Position({
            pool,
            liquidity: position.liquidity.toString(),
            tickLower: Number(position.tickLower),
            tickUpper: Number(position.tickUpper),
        });

    const mintInfo = useDerivedMintInfo(
        currencyA,
        currencyB,
        position?.pool,
        100,
        currencyA,
        positionEntity || undefined
    );

    const [positionLiquidityUSD, positionFeesUSD, positionAPR] =
        selectedPosition
            ? [
                  formatUSD.format(selectedPosition.liquidityUSD),
                  formatUSD.format(selectedPosition.feesUSD),
                  `${selectedPosition.apr.toFixed(2)}%`,
              ]
            : [];

    if (!selectedPosition || loading) return;

    return (
        <div className="flex flex-col gap-6 bg-card border border-card-border rounded-3xl p-4 animate-fade-in">
            <div className="relative flex w-full justify-end text-right">
                <div className="absolute left-0 top-0">
                    <PositionNFT positionId={selectedPosition.id} />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h2 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">{`Position #${selectedPosition?.id}`}</h2>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="font-bold text-xs">LIQUIDITY</div>
                            <div className="font-semibold text-2xl">
                                {positionLiquidityUSD ? (
                                    <span className="text-cyan-300 drop-shadow-cyan">
                                        {positionLiquidityUSD}
                                    </span>
                                ) : (
                                    <Skeleton className="w-[100px] h-[30px]" />
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-xs">APR</div>
                            <div className="font-semibold text-2xl">
                                {positionAPR ? (
                                    <span className="text-fuchsia-400 drop-shadow-pink">
                                        {positionAPR}
                                    </span>
                                ) : (
                                    <Skeleton className="w-[100px] h-[30px]" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CollectFees
                positionFeesUSD={positionFeesUSD}
                mintInfo={mintInfo}
                positionId={selectedPosition.id}
            />
            <TokenRatio mintInfo={mintInfo} />

            {positionEntity && (
                <div className="flex justify-between font-semibold">
                    <div>
                        {`${positionEntity.amount0.toFixed(2)} ${
                            currencyA?.symbol
                        }`}
                    </div>
                    <div>
                        {`${positionEntity.amount1.toFixed(2)} ${
                            currencyB?.symbol
                        }`}
                    </div>
                </div>
            )}
            {pool && positionEntity && (
                <PositionRangeChart pool={pool} position={positionEntity} />
            )}

            {positionEntity && (
                <div className="flex gap-4 w-full whitespace-nowrap">
                    <IncreaseLiquidityModal
                        tokenId={Number(selectedPosition.id)}
                        currencyA={currencyA}
                        currencyB={currencyB}
                        mintInfo={mintInfo}
                    />
                </div>
            )}
            {positionEntity && Number(positionEntity.liquidity) > 0 && (
                <div className="flex gap-4 w-full whitespace-nowrap">
                    <RemoveLiquidityModal positionId={selectedPosition.id} />
                </div>
            )}
            {positionInFarming && farming && !positionInEndedFarming && (
                <ActiveFarmingCard
                    farming={farming}
                    selectedPosition={positionInFarming}
                />
            )}
            {positionInEndedFarming && (
                <ClosedFarmingCard
                    positionInEndedFarming={positionInEndedFarming}
                    selectedPosition={selectedPosition}
                />
            )}
        </div>
    );
};

export default PositionCard;
