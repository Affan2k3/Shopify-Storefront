import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
type Props = {
	data: any;
};
const CarouselCard = ({ data }: any) => {
	const [showSecondaryImg, setSecondaryImg] = React.useState(false);

	return (
		<div>
			<div
				className={
					"flex flex-col shrink-0 relative bg-no-repeat transition-all duration-300 group bg-cover snap-center pt-6 mx-2 lg:mx-4"
				}
				onMouseEnter={() => setSecondaryImg(true)}
				onMouseLeave={() => setSecondaryImg(false)}
			>
				{showSecondaryImg ? (
					<img
						src={data?.node.images.edges[1]?.node.url}
						className="flex-shrink-0"
					/>
				) : (
					<img
						src={data?.node.images.edges[0]?.node.url}
						className="flex-shrink-0"
					/>
				)}

				{data.banner && (
					<h3
						className={`text-white absolute right-0 ${data.bannerColor} flex-grow-0 text-xs uppercase p-[6px] tracking-[3px] group-hover:hidden`}
					>
						{data.banner}
					</h3>
				)}

				<motion.h3
					className="absolute z-40 -top-0 flex-shrink-0 text-center right-0 hidden group-hover:inline-flex  bg-black text-white p-4 rounded-full leading-5 cursor-pointer "
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					Quick
					<br /> View
				</motion.h3>
			</div>
			<div className="ml-4 flex flex-col space-y-2">
				<h2 className="text-md mt-2">{data?.node.title}</h2>
				<p className="tracking-[1.4px] text-sm">
					${data?.node.variants.edges[0].node.price.amount}
				</p>
				<div className="flex">
					{data.reviews && (
						<div className=" flex items-start space-x-2">
							<div className="w-20">
								<Image src={data.reviews} alt={""} width={50} height={50} />
							</div>
							{data.reviewPerson && (
								<p className="text-xs">{data.reviewPerson}</p>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
