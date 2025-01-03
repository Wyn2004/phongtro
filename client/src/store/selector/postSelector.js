import { createSelector } from 'reselect';

const selectorPostState = state => state.post;

export const getNewPost = createSelector([selectorPostState], postSelector => postSelector.newPost);
