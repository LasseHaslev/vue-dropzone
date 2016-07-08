import Vue from 'vue'
import { DropzoneInstall } from './Dropzone';
import DropZone from './Dropzone'

Vue.use( DropzoneInstall );


new Vue({
    el: 'body',

    events: {
        'FileUploaded'( fileObject ) {
            console.log( fileObject );
        }
    },

    components: { DropZone }
})
