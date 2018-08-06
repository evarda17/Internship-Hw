/*
Create another class which extends music genre, class which represents instrumental genre:
Should have list of instruments which are usually used by the musicians of this genre
Only valid instruments can be added to the list (***)
Create another class which extends  instrumental genre, object which represents folk instrumental genre:
Folk instrumental genre has an origin which represents the country which it came from.*/
class Genre {
    constructor(inputText) {
        const names = inputText;
        this._artists = {Rap: ['Drake','Jay-Z','Kendrick Lamar'], Classical: ['Niccolo Paganini','Robert Schuman', 'Yo-Yo Ma'], Funk: ['Prince', 'James Brown', 'Earth']};
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
    var history = {Rap: 'Rapping can be traced back to its African roots.',  
                    Classical: 'According to Burgh the roots of Western classicas music lie in ancient Egyptian art music.', 
                    Funk: 'This music genre originated in African-American communities.'}
        return history[genreInput]

        }

    toString(inputGenre) {
        console.log('You chose the ' + inputGenre + ' genre.\n');
        console.log(this.genreHistory(inputGenre)); 
        console.log( 'Popular artists of' + inputGenre + ' genre are: \n' + this._artists[inputGenre]);
     }
    hasInfo(string) {
        if (string === this._name /*|| string=== this._artists*/ || string in this.genreHistory(inputGenre)){
            return true 
        }

        return false
    };
};
class instrumentalGenre extends Genre{
    constructor(inputGenre) {
        super(inputGenre)
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






