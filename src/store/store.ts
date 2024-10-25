import { configureStore } from '@reduxjs/toolkit';
import logInReducer from './auth/login/logInSlice';
import userDataReducer from './auth/getUserById/getUserById.slice';
import logedInUserReducer from './auth/userData/getUserData.slice';
import usersReducer from './auth/users/usersSlice';
import removedusersReducer from './auth/removedUsers/removedUsersSlice';
import blockusersReducer from './auth/blockUser/block-user.slice';
import blockedusersReducer from './auth/getBlockedUsersList/getBlockedUser.slice';

import reportsReducer from './reports/getReports/report.slice';
import deleteReportsReducer from './reports/deleteReports/deleteReports.slice';
import deleteReportWithAssociatedReducer from './reports/deleteReportswithItsImages/deleteReportwithImage.slice';
import getSharedVotesReducer from './sharedVotes/getSharedVotes/getSharedVotes.slice';
import getUploadsReducer from './uploads/upload.slice';
import getSharedUploadsReducer from './sharedUplaods/sharedUploads.slice';
import getVotesReducer from './votes/votes.slice';
import getTotalStaticsReducer from './statics/getTotal.statics';
import getLastMonthStaticsReducer from './statics/getLastMonth.slice';
import getLastWeekStaticsReducer from './statics/getLastWeek.slice';
import getLastDayStaticsReducer from './statics/getLastDay.statics.slice';
import sendNotificationReducer from './sendNotifications/sendNotifications.slice';
import getTotalPointReducer from './statics/totalPointStaics';
import enhancementUsersReducers from './auth/enhancementsUsers/enhancementUsers.slice';
import enhancementReducer from './enhancement/enhancement.slice';
import getEnhancementByIdReducer from './enhancement/getEnhancementByLevel.slice';
import uploadHistoryReducer from './uploadHistory/uploadHistory.slice';
import getRemovedUploadsReducer from './uploads/deletedUploads.slice';
import deleteImageReducer from './uploads/removeUpload.slice';
import searchUploadReducer from './uploads/searchedUploas.slice';
import createSubAdminReducer from './auth/createSubAdmin/create-new-sub-admin.slice';
import toastReducer from './toast/toast.slice';

const store = configureStore({
  reducer: {
    logIn: logInReducer,
    userData: userDataReducer,
    user: logedInUserReducer,
    users: usersReducer,
    removedUsers: removedusersReducer,
    blockUser: blockusersReducer,
    reports: reportsReducer,
    deleteReport: deleteReportsReducer,
    deleteReportWithAssociated: deleteReportWithAssociatedReducer,
    sharedvotes: getSharedVotesReducer,
    uploads: getUploadsReducer,
    shareduploads: getSharedUploadsReducer,
    votes: getVotesReducer,
    totalstatics: getTotalStaticsReducer,
    monthstatics: getLastMonthStaticsReducer,
    weekstatics: getLastWeekStaticsReducer,
    daystatics: getLastDayStaticsReducer,
    toast: toastReducer,
    sendNotification: sendNotificationReducer,
    blockedUsersList: blockedusersReducer,
    enhancementUsers: enhancementUsersReducers,
    enhancement: enhancementReducer,
    uploadHistory: uploadHistoryReducer,
    userPoints: getTotalPointReducer,
    getEnhancement: getEnhancementByIdReducer,
    removedUploads: getRemovedUploadsReducer,
    searchUpload: searchUploadReducer,
    subadmin: createSubAdminReducer,
    deleteImage: deleteImageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
