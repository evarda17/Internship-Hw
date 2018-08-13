class Genre{
	

	static history(genre){
		let genreHistory = {Rap: 'Rapping can be traced back to its African roots.',  
               Classical: 'According to Burgh the roots of Western classicas music lie in ancient Egyptian art music.', 
               Funk: 'This music genre originated in African-American communities.'}
        return genreHistory[genre];
           };

        
    static popularArtist(genre){
    	let Artist = { 
    				Rap: ['Drake','Jay-Z','Kendrick Lamar'],
    				Classical: ['Niccolo Paganini','Robert Schuman', 'Yo-Yo Ma'],
    				Funk: ['Prince', 'James Brown', 'Earth'],	
    			}
    	return Artist[genre];
    	};


    constructor(genre){
    	this.history === this.constructor.history;
    	this.popularArtist === this.constructor.popularArtist;
    	this.has_info === this.constructor.has_info;
    	this.genre =genre;   

    	 }
    getGenre(genre){
    	return this.genre;

    }

    getArtists(genre){
    	return popularArtist[genre];
    }

	addArtist(input) {
		//couldn't do addArtist
		let artistList = []
		artistList = this.constructor.popularArtist(genre);
        if(input !== '' && input !== null && input !== undefined) {
            artistList.push(input);
         	console.log( `You successfully added ${input} artist to the list of popular artists of ${this.genre} genre`);
        	return(artistList);
        } 

        else {
            console.log('Invalid input')
        }
    
    }
    setGenrename(genre) {
    	console.log('Cannot set a genre')
    	//make writable property false, so that genre will not be set from outside?
    }
    toString(genre) {
    	console.log('You chose the ' + this.genre + ' genre.\n');
        console.log(this.constructor.history(this.genre)); 
        console.log( 'Popular artists of ' + this.genre + ' genre are: \n' + this.constructor.popularArtist(this.genre));
    }
	

};

class AllInstruments{
	static IsValid(inputText){
		let AllInstruments = ['accordion','banjo','cello','clarinet','drums','flute','guitar','harp','organ','viola', 'piano','tuba'];
		if(AllInstruments.includes(inputText)){
			return true;
		}
		return false;
	}
}

class InstrumentalGenre extends Genre{
	constructor(inputText){
	super(inputText);
	this.instruments = ['piano','harpsichord', 'organ'];
	}

	addInstrument(inputText){
		if(AllInstruments.IsValid(inputText)){
			this.instruments.push(inputText);
			//return;
		}
		else {console.log('Invalid input for instruments')};

	}

	toString(){
		console.log(this.instruments);
	}

};

class FolkInstrumental extends InstrumentalGenre {
		constructor(inputText) {
			super(inputText);
			this.origin = 'Some believe that folk music originated as art music that was changed and probably debased by oral transmission, while reflecting the character of the society that produced it.';

		}

		toString() {
			console.log(this.origin);
		}




}
let genre = 'Rap';
let obj = new Genre(genre);
let name = obj.getGenre();
obj.addArtist("Artist");
obj.toString();
