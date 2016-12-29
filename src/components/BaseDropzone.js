export default {

    props: {
        url: {
            type: String,
            default: null,
            required: true,
        },

        multiple: {
            type: Boolean,
            default: false,
        },

        'prevent-click': {
            type: Boolean,
            default: false,
        },

    },

    data() {
        return {
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

            for (var i = 0, len = this.droppedFiles; i < len; i++) {
                var file = this.droppedFiles[ i ];
                this.uploadFile( file );
            }

        },

        uploadFile( file ) {
            var data = this.prepareFileForUpload( file );
            this.$http.post( this.url, data ).then( function( request ) {
                this.$dispatch( 'FileUploaded', request.data.data );
            } ).catch( function( reason ) {
                this.$dispatch( 'FileUploadError', reason.data )
            } );
        },

        prepareFileForUpload( file ) {

            var input = this.getInput();
            var ajaxData = new FormData();

            // ajaxData.
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
            this.addFiles( evt.dataTransfer.files );
            this.removeDragOver();
        },

        addFiles( fileList ) {
            this.$set( 'droppedFiles', fileList );
            this.submit();
        },

        addDragOver() {
            this.$set( 'dragOver', true );
        },

        removeDragOver() {
            this.$set( 'dragOver', false );
        },

    },

}
