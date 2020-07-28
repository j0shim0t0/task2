import React, {useState} from 'react'

export default props => {
	const [value, setValue] = useState({id: "", firstName: "", lastName: "", email: "", phone: ""});
	const [toggle, setToggle] = useState(true);
	const [disabled, setDisabled] = useState(true);
    const valueChangeHandler = (param) => (event) => {
    	//debugger
    	param === "id" ? value[param] = +event.target.value : value[param] = event.target.value;
        setValue(value);
        activateButton();
    }

    function activateButton(){
    	for(let key in value){
    		if (value[key] == ""){
    			setDisabled(true);
    			return
    		}
    	}
    	setDisabled(false);
    	//document.getElementById("addButton").removeAttribute("disabled");
    }

    function toggleForm(){
    	const elem = document.getElementById("addElement");
    	if (toggle === true){
    		elem.style.display = "block";
    		setToggle(false);
    	} else {
    		elem.style.display = "none";
    		setToggle(true);
    	}
    	console.log("открываем");
    }

	return(
		<div>
			<button type="submit" className="btn btn-primary mb-2" onClick={() => toggleForm()}>Добавить</button>
			<div className="form-inline" id="addElement" style={{display: 'none'}}>
			  <input type="text" className="form-control mb-2 mr-sm-2 col-1" id="inlineFormInput1" placeholder="ID" onChange={valueChangeHandler("id")}/>
			  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInput2" placeholder="FirstName" onChange={valueChangeHandler("firstName")}/>
			  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInput3" placeholder="LastName" onChange={valueChangeHandler("lastName")}/>
			  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInput4" placeholder="Email" onChange={valueChangeHandler("email")}/>
			  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInput5" placeholder="Phone" onChange={valueChangeHandler("phone")}/>

			  <button type="submit" className="btn btn-primary mb-2" id="addButton" onClick={() => props.addElem(value)} disabled={disabled}>Добавить в таблицу</button>
			</div>
		</div>
	)
}