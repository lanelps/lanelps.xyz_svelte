export const parseFormData = (data: FormData) => {
	const newData: object = {};

	for (const key of data.keys()) {
		newData[key] = data.get(key);
	}

	return newData;
};
