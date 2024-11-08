import { ButtonCardBuyProps } from "@/lib/interface"

export const ButtonCardBuyRaffle = ({ number, onClick, loading }: ButtonCardBuyProps) => {
    return (
        <button disabled={loading} className={`flex flex-col ${loading ? "opacity-50 cursor-not-allowed": ""}`} onClick={onClick}>
            <span className="bg-[#111827] items-center justify-center flex rounded-t-[10px] w-[100px] h-[50px] lg:w-[124px] lg:h-[60px] text-white">
                <span className="text-[24px]">{number}</span>
            </span>
            <span className="text-black text-center justify-center rounded-b-[10px] border h-[35px] items-center border-black w-full flex">Selecionar</span>
        </button>
    )
}