// import AlgebraLogo from "@/assets/1swap.svg"
import AlgebraIntegral from "@/assets/1swap-full.svg"
import { cn } from '@/lib/utils';

const PoweredByAlgebra = ({ className }: { className?: string }) => {
    return (
        <a
            href={'https://algebra.finance'}
            className={cn('flex items-center gap-2 p-2', className)}
        >
            <span className="text-sm font-semibold">Powered by</span>
            <div className="flex items-center justify-center gap-1">
                {/* <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full">
                    <img src={AlgebraLogo} width={18} height={18} style={{height:"18px", width:"18px"}}  />
                </div> */}
                <img src={AlgebraIntegral} className="w-full mt-1" height={18} style={{height:"18px"}} />
            </div>
        </a>
    );
};

export default PoweredByAlgebra;
