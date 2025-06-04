import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Accordion = ({
	title = "Lorem ipsum dolor sit amet?",
	description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-primary-background-light dark:bg-primary-background-dark px-8 py-6 rounded-2xl space-y-6">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h4 className="text-2xl font-semibold">{title}</h4>
				<FaPlus
					size={20}
					className={`fill-primary ${
						isOpen ? "rotate-135" : "rotate-0"
					} transition-transform duration-200`}
				/>
			</div>
			{isOpen ? <p className="text-lg">{description}</p> : null}
		</div>
	);
};

export default Accordion;
