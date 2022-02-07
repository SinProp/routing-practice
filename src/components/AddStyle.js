const AddStyle = (props) => {
    const {word, fontColor, backgroundColor} = props;
    if (isNaN(word)) {
    return <h1 style = {{color: fontColor, backgroundColor: backgroundColor}}>
        {word}    
        </h1>    
    } else {
        return <h1>Number is: {word}</h1>;
    }
    
    
}
export default AddStyle;

