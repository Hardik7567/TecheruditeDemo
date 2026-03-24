import { StyleSheet } from 'react-native';

export const eventCommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
});
export const renderItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    gap: 10,
  },

  imageView: {
    width: 90,
    height: 100,
    borderRadius: 5,
  },
  detailsView: {
    flex: 1,
  },
  topView: {
    flex: 0.8,
    gap: 5,
    width: '100%',
  },
  title: {
    fontSize: 16,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
  },
  city: {
    fontSize: 12,
    fontWeight: '300',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  tagList: {
    flex: 0.7,
  },
  renderTag: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
  },
  tagtitle: {
    fontSize: 12,
    fontWeight: '300',
  },
  actionView: {
    flex: 0.3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
