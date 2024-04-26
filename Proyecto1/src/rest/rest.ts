async function obtenerDatos(): Promise<void> {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }
      const datos = await respuesta.json();
      console.log('Datos recibidos:', datos);
      return datos;
    } catch (error: unknown) { 
      console.error('Error:', (error as Error).message);
    }
  }
  
