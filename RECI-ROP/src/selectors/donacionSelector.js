export const getDonacion = async () => {
    try {
        const resp = await fetch('http://localhost:4000/Donacion', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        const donacion= await resp.json();
        return donacion;
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar el historial');
    }
}