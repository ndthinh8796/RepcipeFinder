import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render() {

        return (
            <div>
                <h4 className="link">
                    {
                        this.props.favoriteRecipes.length > 0 ?
                        <Link to='/favorites' >Favorites</Link>
                        :
                        <div></div>
                    }
                    
                </h4>
                {
                    this.props.recipes.map((recipe, index) => {
                        return(
                            <RecipeItem 
                            key={index} 
                            recipe={recipe} 
                            favoriteButton={true}/>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);