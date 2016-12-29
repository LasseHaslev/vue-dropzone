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

                class="DropUpload" :class="{
                    'DropUpload--drag': dragOver
                }" method="post" action="" enctype="multipart/form-data">

                <slot></slot>
            </form>
            <input v-if="multiple" @change="inputChanged" class="DropUpload__file" type="file" name="files[]" multiple />
            <input v-else @change="inputChanged" class="DropUpload__file" type="file" name="file" />
        </div>
    `,
    mixins: [ BaseDropzone ],
}
