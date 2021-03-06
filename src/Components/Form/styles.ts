import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldContainer: {
    marginBottom: 15,
    flex: 1,
    flexDirection: 'column',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  radio: {
    marginVertical: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 0,
    alignItems: 'center',
  },
  tagCloseIcon: {
    top: '0%',
    right: '-10%',
    position: 'absolute',
  },
  tagText: {
    fontSize: 17,
    lineHeight: 18,
    top: 1.5,
    marginRight: 2,
  },
  tag: {
    backgroundColor: '#EFDEF9',
    padding: 7,
    borderRadius: 4,
  },
  tagContainer: {
    height: 50,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
