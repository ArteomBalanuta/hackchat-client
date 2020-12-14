import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Root domain selector for the MainMenu component state
 */
const selectMainMenuDomain = (state) => state.mainMenu || initialState;

/**
 * Main menu status
 */
const makeSelectMainMenuStatus = () =>
  createSelector(selectMainMenuDomain, (substate) => substate.mainMenuOpen);

/**
 * Users menu status
 */
const makeSelectUsersMenuStatus = () =>
  createSelector(selectMainMenuDomain, (substate) => substate.usersModalOpen);

/**
 * Join menu status
 */
const makeSelectChannelsModalStatus = () =>
  createSelector(
    selectMainMenuDomain,
    (substate) => substate.channelsModalOpen,
  );

/**
 * Join menu status
 */
const makeSelectJoinMenuStatus = () =>
  createSelector(selectMainMenuDomain, (substate) => substate.joinModalOpen);

/**
 * Join menu channel to join
 */
const makeSelectJoinMenuChannel = () =>
  createSelector(selectMainMenuDomain, (substate) => substate.joinModalChannel);

/**
 * Locale menu status
 */
const makeSelectLocaleMenuStatus = () =>
  createSelector(selectMainMenuDomain, (substate) => substate.localeModelOpen);

export {
  selectMainMenuDomain,
  makeSelectMainMenuStatus,
  makeSelectUsersMenuStatus,
  makeSelectChannelsModalStatus,
  makeSelectJoinMenuStatus,
  makeSelectJoinMenuChannel,
  makeSelectLocaleMenuStatus,
};
