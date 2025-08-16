interface ContainerProps {
	children: React.ReactNode;
}

const PageContainer = (props: ContainerProps) => {
	const { children } = props;

	return <div className="w-full p-5 mx-auto bg-white">{children}</div>;
};

export default PageContainer;
