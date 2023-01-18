import { createAction, props } from '@ngrx/store'
import { User } from '../../models/user.model'

export const setAuthenticatedUser = createAction(
    '[AUTH] SET USER',
    props<{ authenticatedUser: User }>()
);

export const unsetAuthenticatedUser = createAction('[AUTH] UNSET USER');
export const updateAuthenticatedUser = createAction(
    '[AUTH] UPDATE USER',
    props<{ first_name: string; last_name: string }>()
)