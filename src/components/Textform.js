import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked "+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase','success');
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked "+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase','success');
  }
  const handleCleClick=()=>{
    // console.log("Uppercase was clicked "+text);
    setText(text.replace(text,""));
    props.showAlert('Clear text successfully','success');
  }
  const handleExtraClick=()=>{
    let newtext=text.replace(/\s+/g,' ').trim();
    setText(newtext);
    props.showAlert('Extra spaces removed successfully','success');
  }
  const handleCopyClick=()=>{
    // var text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied!","success");
  }

  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText]=useState('');
  // text='Updated text' //wrong way to update state
  // setText("new text")  //right way to update state
    return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}> 
      <h1 className="mb-2">{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#594f86':'white',
    color:props.mode==='dark'?'white':'black'}} value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCleClick}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleExtraClick}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Manipulated Text</h2>
      <p>no. of characters are {text.length} and words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
      <h2>Preview</h2>
      <p>{text.length===0?'Enter text here to preview it':text}</p>
    </div>
    </>
  );
}
