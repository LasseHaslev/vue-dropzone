import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use( VueResource );
import DropZone from './Dropzone.vue'

new Vue({
    el: 'body',

    events: {
        'FileUploaded'( fileObject ) {
            console.log( fileObject );
        }
    },

    components: { DropZone }
})
