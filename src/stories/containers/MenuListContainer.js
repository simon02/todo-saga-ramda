import React from 'react';
import MenuList from '../MenuList';
import { connect } from 'react-redux';
import { select } from '../../features/menu/menuSlice';
import { getMenuWithTaskTotals } from '../../features/tasks/selectors';

const MenuListContainer = (props) => {
  return <MenuList {...props} />;
};

const mapStateToProps = (state) => ({
  menuItems: getMenuWithTaskTotals(state),
  selected: state.menu.selected,
});

export default connect(mapStateToProps, {
  onSelect: select,
})(MenuListContainer);
