console.log("The script has started execution now!")

function changePicture(){
    let pictureDiv = document.getElementById("personal-picture")

    pictureDiv.innerHTML = `
    <h3>New Image has Arrived</h3>
    <img src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg" alt="Picture of me" height="200px">
    `
}