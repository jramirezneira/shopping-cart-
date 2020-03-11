
export const addToLocalStorageCart =  (value) => {
	var existing = localStorage.getItem("cart-proyectoJavierRamirez");
	existing = existing ? JSON.parse(existing) : {};
	existing[value] = (existing[value] || 0) + 1;
	localStorage.setItem("cart-proyectoJavierRamirez", JSON.stringify(existing));
};

export const getLocalStorageCart =  () => {
	var idproducts = localStorage.getItem("cart-proyectoJavierRamirez");
	idproducts = idproducts ? JSON.parse(idproducts) : {};
	return idproducts;

};

export const removeItemLocalStorageCart =  (key) => {
	var idproducts = localStorage.getItem("cart-proyectoJavierRamirez");
	idproducts = idproducts ? JSON.parse(idproducts) : {};
	delete idproducts[key];
	localStorage.setItem("cart-proyectoJavierRamirez", JSON.stringify(idproducts));
};


export const removeLocalStorageCart =  () => {
	localStorage.removeItem("cart-proyectoJavierRamirez");
};
