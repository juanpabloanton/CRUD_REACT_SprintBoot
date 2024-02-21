export function HandleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // Si la respuesta no es exitosa, arrojar un error con el mensaje de error
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        // Si la respuesta es exitosa, devolver los datos
        return data;
    });
}
