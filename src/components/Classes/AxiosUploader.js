import axios from 'axios';
export default class {
    constructor( url ) {
        this.url = url;
    }

    upload( file ) {
        console.log('upload');
        return new Promise((resolve, reject) => {
            axios.post( this.url, file )
            .then( response => {
                console.log('Hello world');
                resolve( response.data );
            } )
            .catch( error => {
                reject( error.response.data );
            } );
        });
    }
}
