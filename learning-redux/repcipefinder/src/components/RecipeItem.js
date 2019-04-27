import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';

class RecipeItem extends Component {
    render() {
        let { recipe } = this.props;

        return (
            <div className="recipe-item">
                {
                    this.props.favoriteButton ?
                        this.props.favoriteRecipes.includes(recipe) ?
                        <div 
                        className="star"
                        >
                            &#9733;
                        </div>
                        :
                        <div 
                        className="star"
                        onClick={() => this.props.favoriteRecipe(recipe)}
                        >
                            &#9734;
                        </div>
                    :
                    <div></div>
                }
                
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4>{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img 
                src={recipe.thumbnail} 
                alt={recipe.title} 
                className="recipe-img"
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, { favoriteRecipe })(RecipeItem);