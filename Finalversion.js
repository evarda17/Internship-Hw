class MusicGenre {
    constructor(name) {
        this.artists = [];
        this.history = {
            Rock: 'ROCK MUSIC, the main variety of popular music, originated around 1954; It is characterized by the use of electric musical instruments (for example, electric guitars) and emphasis on clearly expressed rhythm and loudness of sound.\n',
            Rap: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
            Hip_hop: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
            Jazz: "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, and developed from roots in blues and ragtime. Jazz is seen by many as " + "America's classical " + "music.\n",
            Instrumental: 'instrumental history',
            Folk: 'folk history'
        };

        Object.defineProperty(this, 'genreName', {
            value: name,
            writable: false
        });
    }

    getGenreName() {
        return this.genreName;
    }

    addArtist(artistName) {
        if(artistName !== '' && artistName !== null && artistName !== undefined) {
            this.artists.push(artistName);
        } else {
            console.log('Please input valid artist')
        }          
    }

    getArtistsList() {
        return this.artists;
    }

    getHistory() {
        return this.history[this.genreName];
    }

    toString() {
        return this.getHistory(); 
        console.log('Popular artists of this genre are: ' + this.getArtistsList());   
    }

    
};

class ValidInstruments {
    static IsValidInstrument(input) {
        const AllInstruments = ['guitar','piano'];
        for(let i = 0; i <= AllInstruments.length; i++) {
            if(input === AllInstruments[i] )
                return true;
        }
        return false;
    }
}; 

class Instrumental extends MusicGenre {

    constructor(input) {
        super(input || 'Instrumental');
        // super.history[input || 'Instrumental'] = "some info";
        this.Instrument = []; // Instruments
    }

    addInstrument(input) {
        if(ValidInstruments.IsValidInstrument(input)) {
            this.Instrument.push(input);
        }
        else {
            console.log('Invalid instrument\n');
        }
    }
    getInstruments() {
    	return super.AllInstruments;
    }

    addArtist(artist) {
   		super.addArtist(artist);
     }

    toString() {
        console.log(super.toString());
        return this.Instrument;  // just return this.Instrument and log it outside of class
    }
};

class FolkInstrumental extends Instrumental {
    constructor() {
        super('Folk')
        this.origin = 'A folk instrument is a musical instrument that developed among common people and usually does not have a known inventor.'
    }


    toString() {
        console.log(this.origin + super.getHistory() + '\n');
        return super.toString();
    }
};

let inputText = 'Instrumental';
let Instrument = 'piano';
let obj = new Instrumental(inputText);
obj.addArtist('Someone');
obj.addInstrument(Instrument);
console.log('You just added ' + obj.toString() + ' instrument');