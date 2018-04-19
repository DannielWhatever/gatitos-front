export interface CatForAdoption {
    id: string;
    name: string;
    genre: string;
    age: number;
    picture: string;
    description?: string;
    author: AuthorPub;
    publishedDate: string;

}

export interface AuthorPub {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    country: string;
    city: string;
}

export class CatAge {

    constructor(private months: number) {
    }

    getValue() {
        return this.months;
    }

    getAge() {
        return this.months === 1 ? this.months + ' mes'
            : this.months < 12 ? this.months + ' meses'
            : this.months === 12 ? '1 año'
            : Math.floor(this.months / 12) + ' años';
    }

}
