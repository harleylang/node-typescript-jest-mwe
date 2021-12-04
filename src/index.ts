const pigLatinTranslator = ({
    word
}:{
    word: string;
}) => {

    let oink = word.slice(1) + word.slice(0,1) + 'eh';

    return oink;

};

export default pigLatinTranslator;
