import axios from 'axios';
export default class {
    constructor( url ) {
        this.url = url;
    }

    upload( file ) {
        return new Promise((resolve, reject) => {
            axios.post( this.url, file )
            .then( response => {
                resolve( response.data );
            } )
            .catch( error => {
                reject( error.response.data );
            } );
        });
    }
}
