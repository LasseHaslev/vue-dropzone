<template>
    <div id="app">
        <div id="app">
            <section class="section">
                <div class="container">
                    <h3 class="title is-1">
                        <a href="https://github.com/LasseHaslev/vue-dropzone">
                            @lassehaslev/vue-dropzone
                        </a>
                    </h3>
                </div>
            </section>

            <single-dropzone></single-dropzone>
            <normal-dropzone></normal-dropzone>

            <div class="hero is-primary">
                <div class="hero-body">
                    <div class="container is-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NormalDropzone from './tutorials/NormalDropzone';
import SingleDropzone from './tutorials/SingleDropzone';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SingleDropzone,
        NormalDropzone,
    }
}
</script>
