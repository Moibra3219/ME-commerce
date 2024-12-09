import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_img.png";
import SubscriptionForm from "../components/SubscriptionForm";
import DescribedImage from "../components/DescribedImage";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="about-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Page header with dashed styling */}
				<HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />
				
				{/* Main image with descriptive text */}
				<DescribedImage img={mainImg} imgTitle="clothes image" 
				styleInLarge="column-gap-xl-4"
				styleImg="col-xl-5"
				styleText="col-xl-6"
				sideText={					
					<>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus velit corporis. Architecto ducimus iure error, optio asperiores non alias sint cupiditate. Nulla similique dignissimos saepe voluptatum laudantium quia quaerat.
						<br />
						<br />
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente animi natus ullam unde amet, ex odit libero, dignissimos quam iure nostrum accusantium! Provident quidem numquam magnam unde repudiandae commodi adipisci?
					</p>
					{/* Mission statement */}
					<div className="mission">
						<h4 className="my-3 mt-4 c-black">Our Mission</h4>
						<p className="mb-0">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, velit itaque pariatur ad, vero iure amet est autem aliquid dolor praesentium minima dolorum? Perspiciatis, repudiandae veniam cumque eligendi ad voluptates!
						</p>
					</div>
					</>}/>

				{/* Why Choose Us section */}
				<section className="choose-us mt-6">
					<HeaderDashed head1="WHY" head2="CHOOSE US" />
					<div className="pros mt-4">
						<div className="row row-gap-4">
							{/* Each article represents a benefit */}
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Quality Assurance:</h4>
								<p className="c-mm-gray mb-0 mt-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus!
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Convenience:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus!

								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Exceptional Customer Service:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus!

								</p>
							</div>
							</article>
						</div>
					</div>
				</section>

				{/* Subscription form for users */}
				<SubscriptionForm />
			</div>
		</motion.div>
	);
};

export default About;
