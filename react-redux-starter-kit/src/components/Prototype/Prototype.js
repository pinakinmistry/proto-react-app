import React from 'react'
import classes from './Prototype.scss'

export const Prototype = (props) => {
  return(<div>
    <div className={classes.imageList}>
        <div id="drop_zone" className={classes.dropzone} onDragOver={handleDragOver} onDrop={handleFileSelect}>
          + Add screen images here to begin with prototyping!
      </div>
    </div>
    <button className='btn btn-default' onClick={props.addAllImages.bind(props.images)}>
      +
    </button>
  </div>)
}

// {props.images.map((image) => {
//       <img src={image.imageData} />
//     })}

// Prototype.propTypes = {
//   counter: React.PropTypes.number.isRequired,
//   doubleAsync: React.PropTypes.func.isRequired,
//   increment: React.PropTypes.func.isRequired
// }


function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

let screenId = 0;

export let images = []

function handleFileSelect(evt) {
  evt.stopPropagation()
  evt.preventDefault()

  let files = evt.dataTransfer.files

  //requestForFile(() => { console.log('callback for requestForFile')})

  for (let i = 0, f; f = files[i]; i++) {
    if (!f.type.match('image.*')) {
        continue
    }

    let reader = new FileReader()
    reader.onload = (function (theFile) {
      return function (e) {
        let id = screenId++,
          imageName = escape(theFile.name);

        console.log(imageName)
        images.push({
          id: id,
          imageName: imageName,
          imageData: e.target.result,
          hotspots: []
        })
        console.log(images)
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}




// //FS Module
// /**
//  *
//  */
//     // Note: The file system has been prefixed as of Google Chrome 12:
//     window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
//     var fileSystem = null;
//     var reader;
//     var progress = document.querySelector('.percent');
//     var progress_bar = document.getElementById('progress_bar');
//     var templateFile = '';

//     /**
//      *
//      * @param callback
//      * @param fileName
//      */
//     function requestForFile(callback, fileName) {
//         var fileName = fileName || 'tempdata'; //if no fileName passed, it is temp data file that we have to work on!!!
//         window.webkitStorageInfo.requestQuota(
//             PERSISTENT,
//             10 * 1024 * 1024,
//             function (grantedBytes) {
//                 window.requestFileSystem(PERSISTENT, grantedBytes, function (fs) {
//                     fileSystem = fs;
//                     fileSystem.root.getFile(fileName, {
//                         create: true,
//                         exclusive: false
//                     }, function (fileEntry) {
//                         if (fileName == "tempdata") { //Read it only if it is temp data as user may want to work on it
//                             read(fileName, callback);
//                         }
//                     }, errorHandler);
//                 }, errorHandler);
//             },
//             function (e) {
//                 console.log('Error', e);
//             });
//     }

//     /**
//      *
//      * @param fileName
//      * @param callback
//      * @param image
//      */
//     function read(fileName, callback, image) {
//         fileSystem.root.getFile(fileName, {
//             create: false
//         }, function (fileEntry) {
//             fileEntry.file(function (file) {
//                 var reader = new FileReader();
//                 reader.onloadend = function (e) {
//                     console.log(fileName + ' content: "' + this.result + '"');
//                     if (callback) {
//                         callback(this.result || '{}');
//                     } else {
//                         image.imageData = this.result;
//                     }
//                 };
//                 reader.readAsText(file);
//             }, errorHandler);
//         }, errorHandler);
//     }

//     /**
//      *
//      * @param data
//      * @param fileName
//      */
//     function write(data, fileName) {
//         var fileName = fileName || 'tempdata';
//         //remove file first. didn't find a way to clear/overwrite file content.
//         remove(fileName);

//         //and the recreate it so that its empty.
//         window.webkitStorageInfo.requestQuota(
//             PERSISTENT,
//             100 * 1024 * 1024,
//             function (grantedBytes) {
//                 window.requestFileSystem(PERSISTENT, grantedBytes, function (fs) {
//                     fileSystem = fs;
//                     fileSystem.root.getFile(fileName, {
//                         create: true,
//                         exclusive: false
//                     }, function (fileEntry) {
//                         fileEntry.createWriter(function (fileWriter) {

//                             fileWriter.onwriteend = function (e) {
//                                 console.log('Write completed.');
//                             };
//                             fileWriter.onerror = function (e) {
//                                 console.log('Write failed: ' + e.toString());
//                             };

//                             // Create a new Blob and write it to log.txt.
//                             if (fileName == 'tempdata') {
//                                 var blob = new Blob([JSON.stringify(data)], {
//                                     type: 'text/plain'
//                                 });
//                             } else {
//                                 var blob = new Blob([data], {
//                                     type: 'text/plain'
//                                 });
//                             }

//                             fileWriter.write(blob);
//                             console.log(blob);

//                         }, errorHandler);
//                     }, errorHandler);
//                 }, errorHandler);
//             },
//             function (e) {
//                 console.log('Error', e);
//             });
//     }

//     /**
//      *
//      * @param fileName
//      */
//     function remove(fileName) {
//         fileSystem.root.getFile(fileName, {}, function (fileEntry) {
//             fileEntry.remove(function () {
//                 console.log('File removed.');
//             }, errorHandler);
//         }, errorHandler);
//     }

//     /**
//      *
//      * @param e
//      */
//     function errorHandler(e) {
//         var msg = '';

//         switch (e.code) {
//             case FileError.QUOTA_EXCEEDED_ERR:
//                 msg = 'QUOTA_EXCEEDED_ERR';
//                 break;
//             case FileError.NOT_FOUND_ERR:
//                 msg = 'NOT_FOUND_ERR';
//                 break;
//             case FileError.SECURITY_ERR:
//                 msg = 'SECURITY_ERR';
//                 break;
//             case FileError.INVALID_MODIFICATION_ERR:
//                 msg = 'INVALID_MODIFICATION_ERR';
//                 break;
//             case FileError.INVALID_STATE_ERR:
//                 msg = 'INVALID_STATE_ERR';
//                 break;
//             default:
//                 msg = 'Unknown Error';
//                 break;
//         }
//         ;

//         console.log('Error: ' + msg);
//     }

//     /**
//      *
//      */
//     function readFile() {
//         templateFile = '';
//         var xmlhttp = new XMLHttpRequest();
//         xmlhttp.onreadystatechange = function () {
//             if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
//                 templateFile = xmlhttp.responseText;
//             }
//         }
//         xmlhttp.open("GET", "appTemp.js", true);
//         xmlhttp.send();
//     }

//     /**
//      *
//      * @param scope
//      */
//     function addSavetoFileButton(scope) {

//         for (var image in scope.images) {
//             scope.screens[image].imageData = scope.images[image].imageData;
//         }

//         console.log(templateFile);
//         console.log(scope.screens);

//         Downloadify.create('downloadFile', {
//             filename: function () {
//                 return scope.appName+'.html';
//             },
//             data: templateFile + 'var data = ' + JSON.stringify(scope.screens) + '</script></body></html>',
//             onComplete: function () {
//                 alert('Your File Has Been Saved!');
//             },
//             onCancel: function () {
//                 alert('You have cancelled the saving of this file.');
//             },
//             onError: function () {
//                 console.log(this.data.toString());
//                 alert('You must put something in the File Contents or there will be nothing to save!');
//             },
//             swf: 'components/downloadify/downloadify.swf',
//             downloadImage: 'components/downloadify/download.png',
//             width: 100,
//             height: 30,
//             transparent: true,
//             append: false
//         });
//     }

//     /**
//      *
//      * @param evt
//      */
//     function updateProgress(evt) {
//         // evt is an ProgressEvent.
//         if (evt.lengthComputable) {
//             var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
//             // Increase the progress bar length.
//             if (percentLoaded < 100) {
//                 progress.style.width = percentLoaded + '%';
//                 progress.textContent = percentLoaded + '%';
//             }
//         }
//     }

//     /**
//      *
//      * @param evt
//      * @param scope
//      */
//     function handleImportFile(evt, scope) {
//         // Reset progress indicator on new file selection.
//         progress.style.width = '0%';
//         progress.textContent = '0%';

//         reader = new FileReader();
//         reader.onerror = errorHandler;
//         reader.onprogress = updateProgress;
//         reader.onabort = function (e) {
//             alert('File read cancelled');
//         };
//         reader.onloadstart = function (e) {
//             progress_bar.style.visibility = '';
//             progress_bar.className = 'loading';
//         };
//         reader.onload = function (e) {
//             // Ensure that the progress bar displays 100% at the end.
//             progress.style.width = '100%';
//             progress.textContent = '100%';
//             //setTimeout("document.getElementById('progress_bar').className='';", 2000);
//             console.log("Import File: " + e.target.result);
//             scope.loadScreen(e.target.result);
//             write(JSON.parse(e.target.result));
//             progress_bar.style.visibility = 'hidden';
//         }

//         // Read in the import file as a binary string.
//         reader.readAsBinaryString(evt.target.files[0]);
//     }

//     /**
//      *
//      * @param evt
//      * @param scope
//      */
//     function handleFileSelect(evt, scope) {
//         evt.stopPropagation();
//         evt.preventDefault();

//         var files = evt.dataTransfer.files; // FileList object.

//         var screens = [];

//         // Loop through the FileList and render image files as thumbnails.
//         for (var i = 0, f; f = files[i]; i++) {

//             // Only process image files.
//             if (!f.type.match('image.*')) {
//                 continue;
//             }

//             var reader = new FileReader();

//             // Closure to capture the file information.
//             reader.onload = (function (theFile) {
//                 return function (e) {
//                     // Render thumbnail.
//                     var id = screenId++,
//                         imageName = escape(theFile.name);

//                     screens.push({
//                         id: id,
//                         imageName: imageName,
//                         writeImageData: (function () {
//                             write(e.target.result, imageName);
//                         })(),
//                         hotspots: []
//                     })
//                     //scope.set(scope.screens);
//                 };
//             })(f);

//             // Read in the image file as a data URL.
//             reader.readAsDataURL(f);
//         }
//     }

//     /**
//      *
//      * @param evt
//      */
//     function handleDragOver(evt) {
//         evt.stopPropagation();
//         evt.preventDefault();
//         evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
//     }




export default Prototype
