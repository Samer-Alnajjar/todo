import { useState } from 'react';

const useForm = (props) => {
	const [item, setItem] = useState({});

	const handleInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.target.reset();
		await props.handleSubmit(item);
		const items = {};
		setItem({ items });
	};

	return [item, handleInputChange, handleSubmit];
};

export default useForm;