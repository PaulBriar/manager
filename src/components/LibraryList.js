import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {
  renderItem(library) {
    return <ListItem library={library} />;
  };

  keyExtractor(library) {
    return library.id.toString();
  }

  render() {
    return (
      <FlatList 
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  };
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);