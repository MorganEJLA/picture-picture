const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// async function to prompt user to select a media stream and then pass to 
//our element.

async function selectedMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {

    }
}

button.addEventListener("click", async() => {
    // Disable the button when clicked
    button.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//On Load

selectedMediaStream();