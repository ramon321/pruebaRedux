export const editarProyecto = (propiedad, valor) => {
	const data = {};
	data[propiedad] = valor;

	return {
		type: 'EDITAR_PROYECTO',
		data
	};
}
