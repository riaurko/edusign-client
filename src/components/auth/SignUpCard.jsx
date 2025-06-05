const SignUpCard = () => {
	return (
		<div className="max-w-xl mx-auto p-8 bg-primary-background-light dark:bg-primary-background-dark rounded-4xl shadow-lg shadow-dark/10 hover:shadow-dark/15 transition-shadow duration-100">
			{/* Heading */}
			<h2 className="text-4xl font-bold text-center text-primary dark:text-primary-light mb-8">
				Sign Up
			</h2>
			{/* Form */}
			<form className="max-w-5/6 mx-auto space-y-2">
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">First Name</span>
					<input
						type="text"
						name="firstName"
						className="bg-blue-50 p-2 border border-blue-300 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="Steve"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Last Name</span>
					<input
						type="text"
						name="lastName"
						className="bg-blue-50 p-2 border border-blue-300 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="Potter"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Email</span>
					<input
						type="email"
						name="email"
						className="bg-blue-50 p-2 border border-blue-300 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="steve.potter@example.com"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Password</span>
					<input
						type="text"
						name="password"
						className="bg-blue-50 p-2 border border-blue-300 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="********"
					/>
				</label>
				<div className="text-center mt-6">
					<button
						type="submit"
						className="w-full py-3 text-xl text-light font-medium bg-primary hover:bg-primary-dark rounded-xl cursor-pointer"
					>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpCard;
