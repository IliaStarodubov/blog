export const removePostAsync = (requestServer, id: string) => () =>
	requestServer('removePost', id);
