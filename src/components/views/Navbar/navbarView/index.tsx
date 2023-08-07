"use client";
import { logo, logo2 } from "@/components/assets";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { NavbarItemType } from "@/components/typesandArrays/NavbarItems";
import { Jost } from "next/font/google";
import { useEffect, useState, useContext } from "react";
import DropDownMenu from "./DropDownMenu";
import OffCanvasSidebarMobile from "./OffCanvasSidebarMobile";
import { subMenuType } from "@/components/typesandArrays/NavbarItems";
import Link from "next/link";
import { useRouter } from "next/router";
import CartSectoin from "./CartSectoin";
import { CartState } from "@/globalState/context/CartContext";

const inter = Jost({ subsets: ["latin"] });

interface typeofNavItems {
	navItem: Array<NavbarItemType>;
	page: string;
}

export async function checkout(shopifyCart: any) {
	const cartId = JSON.stringify(shopifyCart?.cart?.id);
	const queryForCheckout = `query checkoutURL {
    cart(id: ${cartId}) {
      checkoutUrl
    }
  }
  
  `;

	const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
	let res = await fetch(url, {
		method: "Post",
		headers: {
			"Content-type": "application/json",
			"X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
		},
		body: JSON.stringify({ query: queryForCheckout }),
	});
	return res.json();

	// window.open(res.data.cart.checkoutURL)
}

export default function NavbarView({ navItem, page }: typeofNavItems) {
	const [inputForSearch, setInputForSearch] = useState("");
	const {
		valueToSearchFromNavbar,
		setValueToSearchFromNavbar,
		state,
		navbarcolor,
		setNavbarcolor,
		dispatch,
	} = CartState();
	const [SearchBoxView, setSearchBoxView] = useState(false);
	const { reload, query } = useRouter();
	const [sidebar, setSidebar] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [opacityForScroll, setOpacityForScroll] = useState(100);
	const [isOpenCart, setOpenCart] = useState(false);
	// const [navbarcolor, setNavbarcolor] = useState(false);

	async function handleclick(shopifyCart: any) {
		const cartId = shopifyCart?.cart?.id;
		const shopifyCheckoutRes = await checkout(shopifyCart);
		const checkoutLink = shopifyCheckoutRes?.data?.cart?.checkoutUrl;

		window.open(checkoutLink);
	}

	const isBrowser = (): boolean => typeof window !== "undefined";

	useEffect(() => {
		if (page != "preview") {
			return () => {
				if (window.scrollY >= 401) {
					if (!navbarcolor) {
						setOpacityForScroll(0);
					}
					window.setTimeout(() => {
						if (!navbarcolor) {
							setOpacityForScroll(100);
						}
					}, 10);
				}
			};
		}
	}, [isBrowser() && window.scrollY >= 401]);

	if (isBrowser()) {
		if (page != "preview") {
			window.addEventListener("scroll", () => {
				if (window.scrollY > 511) {
					setNavbarcolor(true);
				} else {
					setNavbarcolor(false);
				}
			});
		}
	}
	useEffect(() => {
		if (page === "preview") {
			setNavbarcolor(true);
		} else {
			setNavbarcolor(false);
		}
	}, []);

	const handleButtonClickForSearch = (e: any) => {
		if (e.key === "Enter" && e.keyCode == 13) {
			// console.log(e.keyCode);
			window.location.href = `/search/${inputForSearch}`;
		}
	};
	return (
		<div>
			<div
				onClick={() => {
					setSidebar(false);
					setOpenCart(false);
				}}
				className={`${
					sidebar || isOpenCart ? "flex z-40 md:z-50" : "hidden"
				} flex w-full h-screen bg-black opacity-50 fixed inset-0 `}
			></div>
			<main
				className={`w-full py-4 bg-transparent ${
					navbarcolor
						? `top-0 duration-500 bg-white fixed shadow-sm h-20 opacity-${opacityForScroll} z-40`
						: "bg-transparent absolute z-40"
				} ${page !== "preview" ? "" : "bg-white"} `}
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
					<div className={` cursor-pointer `}>
						<Link href="/">
							{page == "index" || page == "allmen" ? (
								navbarcolor ? (
									<Image src={logo2} alt="motion" />
								) : (
									<Image src={logo} alt="motion" />
								)
							) : (
								<Image src={logo2} alt="motion" />
							)}
						</Link>
					</div>
					<ul
						className={`hidden md:flex flex-wrap space-x-10 ${
							page == "preview" && "text-gray-900"
						} ${
							(page == "index" || "allmen") && navbarcolor
								? "text-gray-900"
								: "text-gray-100"
						}`}
					>
						{navItem &&
							navItem.map(
								(
									item: {
										label: string;
										href?: string;
										dropdown: boolean;
										child?: Array<subMenuType>;
									},
									index: number
								) => (
									<div
										key={index + 700}
										className={`${
											item.label == "About" ? "relative" : ""
										} hover:border-b-0  border-white flex items-center cursor-pointer group ${
											item.child ? "hover:bg-white hover:text-black" : ""
										} pt-3 px-4 `}
									>
										<h4
											onClick={() => {
												setValueToSearchFromNavbar({
													type: "update",
													data: "data1",
												});
											}}
											className={`text-lg group-hover:border-b-[1px] pb-2 h-full ${
												item.label == "Theme features"
													? "border-transparent"
													: " "
											} ${inter.className} `}
										>
											<Link href={item.href ? item.href : ""}>
												{item.label}
											</Link>
										</h4>
										<div className="-mt-1">
											{item.dropdown ? <RiArrowDropDownLine size={25} /> : ""}
										</div>
										<div className="z-50">
											<DropDownMenu item={item} navbarcolors={navbarcolor} />
										</div>
									</div>
								)
							)}
					</ul>
					<div
						className={`flex ${
							page == "index"
								? navbarcolor
									? "text-gray-900"
									: "text-gray-100"
								: "text-gray-900"
						} space-x-6 sm:space-x-5`}
					>
						<div
							onClick={() => {
								setSearchBoxView(true);
							}}
						>
							<FiSearch className="cursor-pointer" size={25} />
						</div>
						<div
							onClick={() => {
								setSidebar(!sidebar);
							}}
						>
							<CgMenuLeftAlt
								className="block md:hidden cursor-pointer"
								size={30}
							/>
						</div>
						<div
							onClick={() => {
								setOpenCart(true);
								setOpenCart(true);
							}}
						>
							<RiShoppingBagLine className="cursor-pointer" size={25} />
						</div>
					</div>
				</div>
				<OffCanvasSidebarMobile
					data={navItem}
					sidebar={sidebar}
					setSidebar={setSidebar}
				/>
			</main>
			<div
				className={`${
					navbarcolor
						? `top-0 fixed shadow-sm h-20 sm:h-20`
						: "relative top-0 h-20 sm:h-24"
				} ${
					SearchBoxView ? "visible" : "invisible"
				} overflow-hidden w-full z-50`}
			>
				<div
					className={`px-2 md:px-12 ${
						SearchBoxView ? "traslate-y-0" : "-translate-y-36"
					} duration-700 absolute top-0 w-full bg-white ${
						navbarcolor ? `h-20 sm:h-20` : "h-20 sm:h-24"
					} z-50`}
				>
					<div className="flex flex-1 items-center h-full px-2">
						<button className="px-0 pr-3 md:px-2">
							<a href={`/search/${inputForSearch}`}>
								<CiSearch size={30} />
							</a>
						</button>
						<input
							className="w-full focus:outline-0 px-2 text-2xl "
							type="text"
							placeholder="Search Our Store"
							value={inputForSearch}
							onChange={(e) => {
								setInputForSearch(e.target.value);
							}}
							onKeyDown={handleButtonClickForSearch}
						/>
						<div
							className="cursor-pointer"
							onClick={(e) => {
								setSearchBoxView(false);
								setInputForSearch("");
							}}
						>
							<GrClose size={19} />
						</div>
					</div>
				</div>
			</div>
			<div
				className={`fixed top-0 py-3 sm:py-5 px-4 md:px-8 h-screen z-50 bg-white ${
					isOpenCart ? "right-0 visible" : "-right-[520px] invisible"
				} transition-all duration-500`}
			>
				<div className="relative w-full h-full bg-white">
					<div className="flex item-center justify-center w-full py-4 border-b-2">
						<h2 className="text-3xl font-bold pr-28 md:pr-32 text-gray-800">
							Cart
						</h2>
						<div
							className="pl-28 md:pl-32 mt-3 cursor-pointer"
							onClick={() => {
								setOpenCart(false);
								setOpenCart(false);
							}}
						>
							<GrClose />
						</div>
					</div>
					<CartSectoin />
					<div className="space-y-4 w-full py-4 border-t-2 absolute bottom-0 left-0">
						<div className="w-full flex item-center justify-between items-center ">
							<h2 className="text-xl font-bold text-gray-800">SUBTOTAL</h2>
							<p>${state.shopifyCart.cart?.cost.totalAmount.amount}</p>
						</div>
						<p className="text-xs">
							Shipping, taxes, and discount codes calculated at checkout.
						</p>
						<button
							className="w-full py-3 bg-black font-semibold text-white"
							onClick={() => handleclick(state.shopifyCart)}
						>
							Check out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
