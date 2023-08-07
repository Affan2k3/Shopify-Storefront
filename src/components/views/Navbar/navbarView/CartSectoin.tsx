import { CartState } from "@/globalState/context/CartContext";
import Image from "next/image";
import IncrementButtons from "./IncrementButtons";

export default function CartSectoin() {
  const { state, dispatch } = CartState();
  return (
    <div className="h-[63%] w-full overflow-y-auto py-6 space-y-4">
      {state.cart.map((item: any, index: number) => {
        return (
          <div key={index + 66332344} className="max-w-xs flex w-full">
            <Image
              width={90}
              height={50}
              src={item?.images[0]}
              alt="Product img"
            />
            <div className="pt-2 space-y-4 px-2 flex-1 flex flex-col ">
              <h4>{item.title}</h4>
              <h4>Size: {item.node.title}</h4>
              <div className="w-full flex justify-between">
                <IncrementButtons item={item} />
                <h4>${item.node?.price?.amount}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
