import React, {Component} from 'react';
import Recipe from './Recipe';

export default class RecipesBook extends Component {
    constructor(props) {
        super(props)

        const {demoBook, recipeBook} = this.props;
    
        this.state = { 
            data: (recipeBook === null) ? demoBook : recipeBook,
            activeTab: 0,
            recipePanelCollapsible: true
        }
    };

    handleTitleClick = (index) => {
        const {recipePanelCollapsible} = this.state;
        if (recipePanelCollapsible) {
            this.setState(prev => (
                {
                    activeTab: prev.activeTab === index ? -1 : index,
                }
            ));
        }
        else {
            return;
        }
    };

    togglePanelCollapsible = (e) => {
        this.setState(prev => (
            {
                recipePanelCollapsible: !prev.recipePanelCollapsible
            }
        ));
    }


    render() {
        const {activeTab, recipePanelCollapsible} = this.state;
        const {data} = this.state;        

        return (
            <div className="Book">
                {data.map( (recipe, index) => 
                    (
                        <Recipe 
                            key={index}
                            activeTab={activeTab}
                            recipePanelCollapsible={recipePanelCollapsible}
                            index={index}
                            {...recipe}
                            handleTitleClick={this.handleTitleClick.bind(null, index)}
                            togglePanelCollapsible={this.togglePanelCollapsible}
                        />
                    )
                )}
            </div>
        )
    }
}



