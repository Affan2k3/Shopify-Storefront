import ProductDetails from "@/components/ProductDetails";
import Navbar from "@/components/views/Navbar";
import { allProductQuery } from "@/components/querys/PreviewAllProductQuery";

type Props = { params: any };

const apiUrl = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";

const images = [
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];

const video = "/video.mp4";

function findProductUsingLastIndexOfId(itemToMap: any, slug: any) {
	let DataToReturn = itemToMap.find((item: any) => slug === item.node.handle);
	return DataToReturn;
}

export default function Preview({ params, allProductData }: any) {
	if (params && allProductData) {
		let filteredDataForPreviewProduct = findProductUsingLastIndexOfId(
			allProductData.data.products.edges,
			params.id
		);
		return (
			<>
				<Navbar page="preview" />
				<div className="h-20"></div>
				<ProductDetails
					images={images}
					video={video}
					videoStatus={false}
					data={filteredDataForPreviewProduct}
				/>
			</>
		);
	} else {
		return <div>Loading...</div>;
	}
}

export async function getServerSideProps(context: any) {
	let allProductResponse = await fetch(apiUrl, {
		cache: "no-store",
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
		},
		body: JSON.stringify({ query: allProductQuery }),
	});
	let allProductData = await allProductResponse.json();
	return {
		props: {
			params: context.params,
			allProductData: allProductData,
		},
	};
}

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			// { params: { slug: '1' } },
// 		],
// 		fallback: true,
// 	};
// }
