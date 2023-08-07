import Carousel from "@/components/Carousel";
import ProductDetails from "@/components/ProductDetails";
import Journalcard from "@/components/Journalcard";
import { QueryForGettingAllMenProducts } from "@/components/querys/QueryForGettingAllMenProducts";
import { QueryForGettingAllWomenProducts } from "@/components/querys/QueryForGettingAllWomenProducts";
import { AllProductType } from "@/components/typesandArrays/shopifyTypes/productTypes";
import HeroSection from "@/components/views/HeroSection";
import ImageHoverEffect from "@/components/views/ImageHoverEffect";
import Navbar from "@/components/views/Navbar";
import SecondaryTextAfterHero from "@/components/views/SecondaryTextHero";
import Head from "next/head";
import { useEffect } from "react";
import Gift from "../components/Gift";
import Hero from "../components/Hero";
import Shop from "../components/Shop";
import Swiper from "../components/Swiper";
import Svggrid from "@/components/Svggrid";
import Parallex from "@/components/Parallex";
import { Signup } from "@/components/Signupcomponent";

const images = [
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];
const video = "video.mp4";

export default function Home({
	allMenProducts,
	allWomenProducts,
}: {
	allMenProducts: AllProductType;
	allWomenProducts: AllProductType;
}) {
	const featuredProduct = allMenProducts.data.collection.products.edges.find(
		(ele: any) => ele.node.handle === "chambray-button-down"
	);
	useEffect(() => {
		const elements = document.querySelectorAll(".animation_triggering_class");
		// Create an intersection observer
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Add the "animate" class when the element is in the viewport
					entry.target.classList.add("animate");
				} else {
					entry.target.classList.remove("animate");
				}
			});
		});
		// Observe each element
		elements.forEach((element) => {
			observer.observe(element);
		});
		const elements2 = document.querySelectorAll(".scale_triggering_class");
		// Create an intersection observer
		const observer2 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Add the "animate" class when the element is in the viewport
					entry.target.classList.add("scale");
				} else {
					entry.target.classList.remove("scale");
				}
			});
		});
		elements2.forEach((element) => {
			observer2.observe(element);
		});
	}, []);

	return (
		<>
			<Head>
				<title>Shopify</title>
				<meta name="Motion" content="E-commrece solution" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar page="index" />
				<HeroSection />
				<SecondaryTextAfterHero />
				<div className="overflow-hidden">
					<Carousel dataMen={allMenProducts} dataWomen={allWomenProducts} />
				</div>
				<Shop />
				<Hero />
				<Gift />
				<ImageHoverEffect />
				<div className="overflow-hidden mx-auto">
					<Swiper />
				</div>
				<ProductDetails
					images={images}
					video={video}
					videoStatus={true}
					data={featuredProduct}
				/>
				<Svggrid />
				<Parallex />
				<Journalcard />
				<Signup />
			</main>
		</>
	);
}

// used GetStatic Props
export async function getStaticProps() {
	const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";

	let allMenData = await fetch(url, {
		cache: "no-store",
		method: "Post",
		headers: {
			"Content-type": "application/json",
			"X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
		},
		body: JSON.stringify({ query: QueryForGettingAllMenProducts }),
	});

	let allWomenData = await fetch(url, {
		cache: "no-store",
		method: "Post",
		headers: {
			"Content-type": "application/json",
			"X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
		},
		body: JSON.stringify({ query: QueryForGettingAllWomenProducts }),
	});
	const allMenProducts: AllProductType = await allMenData.json();
	const allWomenProducts: AllProductType = await allWomenData.json();

	return {
		props: { allMenProducts, allWomenProducts },
	};
}
