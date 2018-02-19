import { APIResource } from './api.types';
import { schema } from 'normalizr';
import { getAPIResourceGuid } from '../selectors/api.selectors';

export const UserSchema = new schema.Entity('user', {}, {
  idAttribute: getAPIResourceGuid
});

export interface CfUser {
  organizations: APIResource<any>[];
  managed_organizations: APIResource<any>[];
  billing_managed_organizations: APIResource<any>[];
  audited_organizations: APIResource<any>[];

  spaces: APIResource<any>;
  managed_spaces: APIResource<any>;
  audited_spaces: APIResource<any>;
  cfGuid?: string;
  guid: string;
}

export interface UserRoleInOrg {
  orgManager: boolean;
  billingManager: boolean;
  auditor: boolean;
  user: boolean;
}
