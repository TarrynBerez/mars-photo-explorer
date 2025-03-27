const api_key = "wEu5B7ly30CTYmvmYyIap4jtLj7cpHeKZgqdidTV"
const imgContainer = document.getElementById("img-container")

document.getElementById("load-photos").addEventListener("click", () => {
    const date = document.getElementById("date-input").value;
    displayMarsPhotos(date);
    imgContainer.innerHTML = "";
})


async function displayMarsPhotos(date) {

    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=wEu5B7ly30CTYmvmYyIap4jtLj7cpHeKZgqdidTV`)
        if (!response.ok){
            throw new Error(`Error! status: ${response.status}`)
        }
        
        console.log("Successful")

        const data = await response.json();
        imgContainer.innerHTML = "";

        // Gets eat photo
        data.photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.img_src;
            img.alt = "Mars Rover Photo";
            img.style.width = "auto";
            imgContainer.appendChild(img);
        });


    } catch(error) {
        console.log("Failed to fetch photos")

        // Prints Error Message
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Failed to load mars rover photos. Please enter a valid date.";
        imgContainer.appendChild(errorMessage)
    }
}

