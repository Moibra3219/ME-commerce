import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import HeaderDashed from "../components/HeaderDashed";
import FetchWaitingMsg from "../components/FetchWaitingMsg";

import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";

const ProductDetails = () => {
	const { productId } = useParams();
	const { productsData } = useContext(ShopContext);

	const [productData, setProductData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [activeSize, setActiveSize] = useState(null);
	const [activeImage, setActiveImage] = useState(0);

	useEffect(() => {
		let data = productsData.find((obj) => obj._id === productId);
		data = { ...data, rating: { stars: 4.5, count: 122 } };
		setProductData(data); // the selected product
		setLoading(false);
	}, [productId, productsData]);

	const findRelatedProducts = () => {
		if (!productData || !productsData.length) {
			return <h1 className="text-center my-5">Loading...</h1>;
		}

		const relatedProducts = productsData.filter(
			(product) =>
				product.category === productData.category && product._id !== productData._id
		);

		return (
			<main className="d-flex row-gap-3 flex-wrap mt-4">
				{relatedProducts.slice(0, 5).map((pro, i) => (
					<CollectionCard key={i} data={pro} />
				))}
			</main>
		);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="product-details overflow-hidden"
		>
			{loading ? (
				<FetchWaitingMsg />
			) : (
				<div className="container mt-5">
					<main className="product-wrapper d-flex gap-3 gap-lg-5 flex-wrap align-items-start">
						{/* Product Images */}
						<figure className="d-flex flex-column flex-sm-row-reverse row-gap-3 column-gap-2 col-12 col-sm justify-content-sm-between">
							<img
								style={{ maxHeight: "390px" }}
								src={`${productData.image[activeImage]}`}
								className="col-12 col-sm-9"
								alt={productData.name}
							/>
							<div className="samples col-2 col-sm d-flex flex-sm-column gap-1">
								{productData.image.map((img, i) => (
									<img
										src={`${img}`}
										className={`w-100 trans-3 preview-img ${
											activeImage === i ? "active" : ""
										}`}
										alt={productData.name}
										key={i}
										role="button"
										onMouseOver={() => setActiveImage(i)}
									/>
								))}
							</div>
						</figure>
						{/* Product Info */}
						<article className="col-12 col-sm col-lg-8 mb-3">
							<h1 className="mt-3 mrt-0 fs-2">{productData.name}</h1>
							{/* Product Rating */}
							<div className="rating">
								<div className="stars mb-3">
									{Array(5)
										.fill()
										.map((_, i) => (
											<i
												key={i}
												className={`bx bxs-star ${
													productData.rating.stars >= i + 1 ? "active" : ""
												}`}
											></i>
										))}
									<span className="ms-2">({productData.rating.count})</span>
								</div>
								<span className="fw-bold fs-2 d-block mb-3">
									&#x24;{productData.price}
								</span>
							</div>
							{/* Product Description */}
							<p className="c-gray">{productData.description}</p>
							{/* Select Size */}
							<div className="select-size mt-4">
								<span className="c-gray fw-bold">Select Size</span>
								<div className="size-btns d-flex gap-2 mt-2">
									{productData.sizes.map((size, i) => (
										<span
											className={`d-block px-3 py-2 bg-m-gray border-gray trans-3 ${
												activeSize === size && "active"
											}`}
											role="button"
											key={i}
											onClick={() => setActiveSize(size)}
										>
											{size}
										</span>
									))}
								</div>
							</div>
							{/* Add to Cart Button */}
							<button className="addcart-btn btn rounded-0 bg-black c-white mt-4 trans-3 mb-2 py-2 px-4">
								ADD TO CART
							</button>
							{/* Product Description and Reviews */}
							<ul className="features ps-0 mt-4 border-top pt-3">
								<li className="mb-1">100% Original product.</li>
								<li className="mb-1">
									Cash on delivery is available on this product.
								</li>
								<li className="mb-1">
									Easy return and exchange policy within 7 days.
								</li>
							</ul>
						</article>
					</main>
					{/* Product Description and Reviews */}
					<article className="description d-flex flex-column mt-6 mb-6">
						<ul className="d-flex ps-0 mb-0">
							<li className="py-2 px-4 border-gray fw-bold border-bottom-0 active">
								Description
							</li>
							<li className="py-2 px-4 border-gray border-start-0 border-bottom-0">
								Reviews ({productData.rating.count})
							</li>
						</ul>
						<div className="description-text border-gray p-3 c-gray">
							An e-commerce website is an online platform that facilitates the
							buying and selling of products or services over the internet.
							<br />
							<br />
							E-commerce websites have gained immense popularity due to their
							convenience, accessibility, and the global reach they offer.
						</div>
					</article>
					{/* Related Products */}
					<div className="related-products mt-5">
						<HeaderDashed
							head1="RELATED"
							head2="PRODUCTS"
							classStyle="mt-5 mb-3"
						/>
						{findRelatedProducts()}
					</div>
				</div>
			)}
		</motion.section>
	);
};

export default ProductDetails;
