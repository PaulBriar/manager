import React from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './CardSection';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends React.Component {

  renderDescription() {
    const { library, expanded } = this.props;
    const { descStyle } = styles;

    if (expanded) {
      return (
        <CardSection>
          <Text style={ descStyle }>
            {library.item.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => { 
          this.props.selectLibrary(id), 
          LayoutAnimation.spring()
          }
        }
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  };
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.item.id === state.selectedLibraryId;

  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);