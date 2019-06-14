class Homepage extends React.Component {
	render(){
		return (<div>
                    <p>"Hi"</p>
                    <a href="/cards">Card Page</a><br></br>
                    <img src="static/img/balloonicorn.jpg"></img>
                </div>)
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));