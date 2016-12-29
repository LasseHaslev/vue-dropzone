# @lassehaslev/vue-dropzone
> Drop upload with Vue2

## Install
Run ```npm install @lassehaslev/vue-dropzone --save``` in your project folder

## Usage
```js
import {Dropzone} from '@lassehaslev/vue-dropzone';
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
```

#### Build your own
```js
import BaseDropzone from './BaseDropzone';
export default {
    template: `
        <div>
            <form 
                @dragover.stop.prevent="addDragOver"
                @dragenter.stop.prevent="addDragOver"

                @dragleave.stop.prevent="removeDragOver"
                @dragend.stop.prevent="removeDragOver"
                @drop.stop.prevent="drop"

                @submit.prevent="submit"

                @click="onClick"

                method="post" action="" enctype="multipart/form-data">

                <slot></slot>
            </form>
            <input v-if="multiple" @change="inputChanged" style="visibility:hidden; position:aboslute;top: -99999; left:-9999999;" type="file" :name="name" multiple />
            <input v-else @change="inputChanged" style="visibility:hidden; position:aboslute;top: -99999; left:-9999999;" type="file" :name="name" />
        </div>
    `,
    mixins: [ BaseDropzone ],
}
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
