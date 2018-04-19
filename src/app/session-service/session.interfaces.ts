export class Session {
    id?: string;
    idGoogle?: string;
    // alias?: string;alias
    name?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    country?: string;
    city?: string;

    constructor(params?) {
        // googleSession
        if (params && params.Eea) {
            this.idGoogle = params.Eea;
            this.name = params.ofa;
            // this.name = googleSession.ig;
            this.email = params.U3;
            this.avatar = params.Paa;
        }
        if (params && !params.Eea) {
            this.id = params.id;
            this.idGoogle = params.idGoogle;
            this.name = params.name;
            this.email = params.email;
            this.phone = params.phone;
            this.avatar = params.avatar;
            this.country = 'Chile';
            this.city = params.city;
        }
    }

    getId() {
        return this.id;
    }

}
