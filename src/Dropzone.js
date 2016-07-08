import VueResource from 'vue-resource';
import DropzoneComponent from './Dropzone.vue';

var install = function( Vue ) {
    Vue.use( VueResource );
}
export default DropzoneComponent;
export {
    install as DropzoneInstall,
}
