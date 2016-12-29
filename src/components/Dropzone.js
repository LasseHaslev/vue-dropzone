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
            <input v-if="multiple" @change="inputChanged" style="visibility:hidden; position:aboslute;top: -99999; left:-9999999;" type="file" name="files[]" multiple />
            <input v-else @change="inputChanged" style="visibility:hidden; position:aboslute;top: -99999; left:-9999999;" type="file" name="file" />
        </div>
    `,
    mixins: [ BaseDropzone ],
}
