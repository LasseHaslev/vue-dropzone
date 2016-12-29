import {Dropzone} from '../index';
export default {
    template: `
        <section class="section">
            <div class="container">
                <h1 class="title">Normal dropzone</h1>
                <dropzone @state-change="onStateChanged" @upload="onUpload" @error="onError" url="http://localhost:1337/api/images" ref="dropzone">
                    <div style="width: 300px; height:300px;" :style="{ 'background-color': color }">&nbsp;</div>
                </dropzone>
            </div>

            <div v-for="file in files">
                {{ file.name }}
            </div>
        </section>
    `,

    data() {
        return {
            color: '#FF0000',
            files: [],
        }
    },

    methods: {
        onStateChanged( enter ) {
            this.color = enter ? '#0000FF' : '#FF0000';
        },
        onUpload( file ) {
            this.files.push( file );
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
