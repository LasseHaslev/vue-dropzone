# @lassehaslev/vue-dropzone
> Drag and drop upload for vue.

## Installation
Run ```npm install @lassehaslev/vue-dropzone --save``` in your project folder

## Usage
``` js
import Vue from 'vue';

import { DropzoneInstall } from '@lassehaslev/vue-dropzone';
import DropZone from '@lassehaslev/vue-dropzone'

Vue.use( DropzoneInstall );

<template>
    <!-- The dropzone component creates a dropzone -->
    <!-- over the selected element -->
    <drop-zone url="/api/create/new/file">
        <div style="height: 130px; width:100%;">
            Drop files here to upload
        </div>
    </drop-zone>
</template>
<script>
export default {
    components: { DropZone }
    events: {
        'FileUploaded'( image ) {
            console.log( image )
        }
    }
}
</script>
});

```


## Development
``` bash
# Clone package
git clone https://github.com/LasseHaslev/vue-dropzone

# install dependencies
npm install

# serve with hot reload at http://localhost:3000/
gulp watch

# build for production with minification
gulp --production
```

## License

MIT, dawg
