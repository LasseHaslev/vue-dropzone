import {Dropzone} from '../index';
export default {
    template: `
        <section class="section">
            <div class="container">
                <h1 class="title">Normal dropzone</h1>
                <dropzone url="">
                    <div style="width: 300px; height:300px; background-color:red">&nbsp;</div>
                </dropzone>
            </div>
        </section>
    `,
    components: {
        Dropzone,
    },
}
