

async function obtenerDatos(){
    const url = "https://jsonplaceholder.typicode.com/posts"

    try{
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.error("Error:", e);
    }
} 

obtenerDatos();