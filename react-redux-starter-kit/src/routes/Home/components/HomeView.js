import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div className={classes.imageList}>
    <div>
	    <div id="drop_zone" className={classes.dropzone}>
		    + Add screen images here to begin with prototyping!
		</div>
	</div>
  </div>
)

setTimeout(() => {
	var dropZone = document.getElementById('drop_zone')
	dropZone.addEventListener('dragover', handleDragOver, false)
	dropZone.addEventListener('drop', handleFileSelect, false)	
}, 1000)

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

let screenId = 0;

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                var id = screenId++,
                    imageName = escape(theFile.name);

                console.log(imageName)
                console.log(e.target.result)

                // scope.screens[id] = {
                //     id: id,
                //     imageName: imageName,
                //     writeImageData: (function () {
                //         write(e.target.result, imageName);
                //     })(),
                //     hotspots: []
                // };
                // scope.set(scope.screens);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}



export default HomeView
