import ReactLoading from 'react-loading';

function Loading(props) {
	return (
		<div className="d-flex justify-content-center align-items-center relative h-screen w-screen bg-dark opacity-75">
			<ReactLoading type="spinningBubbles" color="#007bff" height={100} width={100} />
		</div>
	);
}

export default Loading;
