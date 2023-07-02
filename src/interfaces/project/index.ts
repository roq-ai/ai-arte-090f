import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  description: string;
  artist_id?: string;
  admin_id?: string;
  created_at?: any;
  updated_at?: any;

  user_project_artist_idTouser?: UserInterface;
  user_project_admin_idTouser?: UserInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  artist_id?: string;
  admin_id?: string;
}
