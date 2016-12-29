import AxiosUploader from './Classes/AxiosUploader';
export default {

    props: {
        url: {
            type: String,
            default: null,
            required: true,
        },

        name: {
            type: String,
            default: 'file',
        },

        multiple: {
            type: Boolean,
            default: true,
        },

        'prevent-click': {
            type: Boolean,
            default: false,
        },

    },

    watch: {
        'dragOver'( value ) {
            this.$emit( 'state-change', value );
        }
    },

    data() {
        return {
            uploader: new AxiosUploader( this.url ),
            droppedFiles: false,

            dragOver: false,
        }
    },

    methods: {

        getInput() {
            return this.$el.querySelector( 'input[type=file]' );
        },

        onClick() {
            if ( ! this.preventClick ) {
                var input = this.getInput();
                input.click();
            }
        },

        submit() {

            if ( ! this.droppedFiles.length ) {
                throw 'No files selected';
                return;
            }

            if ( ! this.multiple ) {
                return this.uploadFile( this.droppedFiles[0] );
            }

            for (var i = 0, len = this.droppedFiles.length; i < len; i++) {
                var file = this.droppedFiles[ i ];
                this.uploadFile( file );
            }

        },

        uploadFile( file ) {
            var data = this.prepareFileForUpload( file );
            var self = this;
            this.uploader.upload( data ).then( function( request ) {
                self.$emit( 'upload', file );
            } ).catch( function( reason ) {
                self.$emit( 'error', reason )
            } );
        },

        prepareFileForUpload( file ) {

            var input = this.getInput();
            var ajaxData = new FormData();

            ajaxData.append( input.getAttribute( 'name' ), file );
            return ajaxData;
            console.log(ajaxData);

        },

        isAdvancedUpload() {
            var div = document.createElement('div');
            return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
        },

        inputChanged() {
            var input = this.getInput();
            this.addFiles( input.files );
        },


        drop( evt ) {
            console.log(evt.dataTransfer.files);
            this.addFiles( evt.dataTransfer.files );
            this.removeDragOver();
        },

        addFiles( fileList ) {
            this.droppedFiles = fileList;
            this.submit();
        },

        addDragOver() {
            this.dragOver = true;
        },

        removeDragOver() {
            this.dragOver = false;
        },

    },

}
