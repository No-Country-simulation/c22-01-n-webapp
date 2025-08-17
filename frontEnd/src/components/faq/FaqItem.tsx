interface FaqItemProps {
	question: string;
	answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
	return (
		<li>
			<h3 className="text-xl font-semibold text-cyan-600 mb-1">{question}</h3>
			<p className="text-gray-600">{answer}</p>
		</li>
	);
};

export default FaqItem;
