const api_key = "wEu5B7ly30CTYmvmYyIap4jtLj7cpHeKZgqdidTV"

async function displayMarsPhotos(date) {
    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=wEu5B7ly30CTYmvmYyIap4jtLj7cpHeKZgqdidTV`)

        if (!response.ok){
            throw new Error(`Error! status: ${response.status}`)
        }
        
        console.log("Successful")

        const data = await response.json();
        const imgContainer = document.getElementById("img-container")
        imgContainer.innerHTML = "";

        if (data.photos.length === 0) {
            imgContainer.innerHTML = "<p>No photos available for this date.</p>";
            return;
        }

        data.photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.img_src;
            img.alt = "Mars Rover Photo";
            img.style.width = "200px";
            imgContainer.appendChild(img);
        });


    }catch(error) {
        console.log("Failed to fetch photos")
    }
}

displayMarsPhotos("2013-02-01")