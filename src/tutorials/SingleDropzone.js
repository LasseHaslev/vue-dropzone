import {Dropzone} from '../index';
export default {
    template: `
        <section class="section">
            <div class="container">
                <h1 class="title">Single dropzone</h1>
                <dropzone :multiple="false" @state-change="onStateChanged" @upload="onUpload" @error="onError" url="http://localhost:1337/api/images" ref="dropzone">
                    <div style="width: 300px; height:300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
    " :style="{ 'background-color': color, 'background-image': 'url(' + image + ')' }">&nbsp;</div>
                </dropzone>
            </div>
        </section>
    `,

    data() {
        return {
            color: '#FF0000',
            image: null,
            files: [],
        }
    },

    methods: {
        onStateChanged( enter ) {
            this.color = enter ? '#0000FF' : '#FF0000';
        },
        onUpload( response, file ) {
            this.files.push( file );
            this.getFileContent( file );
        },
        getFileContent( file ) {
            var reader = new FileReader();
            var self = this;
            reader.addEventListener("load", function () {
                self.image = reader.result;
            }, false);
            reader.readAsDataURL( file );
        },
        onError( response ) {
            console.log('Error');
            console.log(response);
        },
    },

    components: {
        Dropzone,
    },
}
