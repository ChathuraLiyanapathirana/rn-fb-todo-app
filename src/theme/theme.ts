import {StyleSheet} from 'react-native';
import {align} from './align';
import {color} from './color';

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: color.white,
    paddingVertical: align.padding.md,
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: align.itemHeight,
    backgroundColor: color.white_dull,
    paddingHorizontal: align.padding.lg,
    marginVertical: align.margin.sm,
  },
  todoItemSwipe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: align.itemHeight,
    backgroundColor: color.danger,
    paddingHorizontal: align.padding.lg,
    marginVertical: align.margin.sm,
  },
  todoItemText: {
    fontSize: align.font.md,
  },
  todoItemSmallText: {
    fontSize: align.font.xs,
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: color.Secondary,
    width: align.itemHeight,
    height: align.itemHeight,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatButton: {
    backgroundColor: color.Secondary,
    width: align.width / 4,
    padding: align.padding.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  floatButtonIcon: {
    color: color.white,
    fontSize: align.font.lg,
  },
  flatButtonIcon: {
    color: color.white,
    fontSize: align.font.md,
  },
  inputField: {
    backgroundColor: color.white_dull,
    paddingHorizontal: align.padding.md,
    marginVertical: align.margin.sm,
    marginHorizontal: align.margin.md,
  },
  formButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: align.margin.md,
  },
  checkBoxLabel: {
    fontSize: align.font.sm,
  },
});

export default style;
