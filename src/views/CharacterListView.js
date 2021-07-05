import React from "react";
import { connect } from "react-redux";
import { getChars } from "../actions";
import { charsReducer } from '../reducers/starWarsReducer';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    return (
      //   // return something here to indicate that you are fetching data
      <div>
        {this.props.isFetching && <p>Loading...</p>}
        {this.props.characters && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        )}
      </div>
    );
    // if (this.props.isFetching) {
    //   return (<React.Fragment>
    //           "Loading..."

    //     </React.Fragment>)

    // } else (null)
    // if (this.props.characters) {
    // return (
    //   <div className="CharactersList_wrapper">
    //     <CharacterList characters={this.props.characters} />
    //   </div>
    // );
    // } else (null)
    //  ( <h1>HI</h1>)
  }
}
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,

});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
