
class Genre {
    constructor() {
        this.genreNames = genreNames;
        this.artists = {};
    }

    getGenreName(){
        return this.genreNames;
    }
    addArtist(input) {
        if(input !== '' && input !== null && input !== undefined) {
            this._artists.push(input);
            //return this._artists[input]
        }
        else {
            console.log('Invalid input')
        }
    }
    
    genreHistory(genreInput) {
        var history = {};
        return history[genreInput];

        }

    toString(inputGenre) {
        console.log('You chose the ' + inputGenre + ' genre.\n');
        console.log(this.genreHistory(inputGenre)); 
        console.log( 'Popular artists of ' + inputGenre + ' genre are: \n' + this._artists[inputGenre]);
     }
    hasInfo(string) {
        if (string === this._name /*|| string=== this._artists*/ || string in this.genreHistory(inputGenre)){
            return true 
        }

        return false
    };
};
class InstrumentalGenre extends Genre{
    constructor(inputGenre) {
        super(inputGenre)
        this.genreNames = ['Rap','Classical', 'Funk']
        this.artists = {}

        




        var newVar = inputGenre
        var artistVar = new Array(this.instrumentsOfGenre(newVar));
        console.log('\nIn this genre more common instruments are:\n');
        //console.log(artistVar);
        console.log(this.instrumentsOfGenre(newVar))
    }
    instrumentsOfGenre(userInput) {
        var commonInstruments = {Rap:['Sampler',' Music sequencer',' Drums',' Bass guitar'],Classical: ['Violin','Cello','Fortepiano'], Funk: ['Bass guitar','Drums','Clavinet'] }
            return commonInstruments[userInput];
    }  


    addInstrument(inputText){
        if (inputText !== '' && inputText !== null && inputText !== undefined) {
            this._instruments.push(inputText);
            return this._instruments
        }
        else {
            console.log('Invalid input for instruments')
        }


    }


}

/*class folkInstrumental extends instrumentalGenre{
	constructor(genreName)



}*/

var inputText = 'Classical';
    var obj = new Genre(inputText);
    obj.toString(inputText);
    var obj1 = new instrumentalGenre(inputText);


/*class folkInstrumental extends instrumentalGenre {
    constructor() {
        
    }*/






