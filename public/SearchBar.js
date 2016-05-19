import React from 'react';
class SearchBar extends React.Component {
	render(){
		return <div>
				<input ref={(input) => this.search = input} onChange={this.onChange.bind(this)} className='searchbox' />
    			<button type="submit" className='searchbutton'>Search</button>
    			</div>
	}

	onChange(e){
   		console.log('This is working', this.search.value);
	}

}


export default SearchBar
