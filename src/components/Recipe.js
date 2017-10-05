import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Recipe.css'

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	height: 0,
        	formEditable: false
        }
    }

    componentDidMount() {
    	const el = ReactDOM.findDOMNode(this);
    	const height = el.querySelector('.ingredients').scrollHeight;
    	this.setState({height});
    }

    componentWillUpdate(nextProps, nextState) {
    	const {activeTab} = this.props;

    	if (activeTab !== nextProps.activeTab) {
	    	const el = ReactDOM.findDOMNode(this);
	    	const height = el.querySelector('.ingredients').scrollHeight;
	    	this.setState(prev => (
		    	{
		    		height: height,
		    	}
    		));
    	}
    }

    handleEditBtn = (e) => {
    	const {formEditable} = this.state;
    	const {togglePanelCollapsible, index} = this.props;
    	const toggleAccordion = () => {
    		togglePanelCollapsible();
			this.setState(prev => (
				{
					formEditable: !prev.formEditable
				}
			));
    	}

    	if (formEditable) {
    		console.log('Saved the data in item of index ' + index);
	    	toggleAccordion();
    	}
    	else {
    		toggleAccordion();
    	}
        
    };

    render() {
    	const { height, formEditable } = this.state;
    	const { index, activeTab, name, ingredients, handleTitleClick } = this.props;
    	const isActive = activeTab === index;
    	const classActive = isActive ? 'active' : '';
    	const inlineStyle = {
    		height: isActive ? `${height}px` : '0px'
    	};

        return (
            <div className={"Recipe " + classActive}>
            	<div className="name" onClick={handleTitleClick}>
            		{name}
        		</div>
        		<div className="ingredients" style={inlineStyle}>
        			<div className="ingredients-inner">
        				<h2 className="ingredient__title">Ingredients:</h2>
        				{ingredients.map((ingredient, index) => 
        					(
        						<input key={index} type="text" defaultValue={ingredient} disabled={!formEditable}/>
	    					)	
	    				)}		
	    				<button onClick={this.handleEditBtn}>{formEditable ? 'Save' : 'Edit'}</button>
	    				<button>Delete</button>
        			</div>
        		</div>
            </div>
        );
    }
}

export default Recipe;
