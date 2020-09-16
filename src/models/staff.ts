import { RoleModel } from "./role";
import { ContentfulComparable } from "./comparable";

export interface StaffModel extends ContentfulComparable {
  profilePicture: {
    fluid: any
  }
  roles: RoleModel[]
  name: string
  biography: {
    biography: string
  }
}

export interface ContentfulStaffResponse {
  allContentfulStaffMember: {
    nodes: StaffModel[]
  }
}