export interface InvitationRecord {
  address: `0x${string}`;
  avatar: string;
  buyTotal: number;
  inviteType: string;
  inviterAddress: `0x${string}`;
  inviterName: string;
  level: number;
  points: number;
  registerDate: number;
  taskComplete: boolean;
  userName: string;
}

export interface UserInfo {
  inviteCode: string;
}

export interface UserStatistics {
  inviteesBuyTotal: number;
  points: number;
  successInvitations: number;
  totalInvitations: number;
  unExchangePoints: number;
  userId: number;
}

export interface ListData<T> {
  last: boolean;
  list: T[];
  page: number;
  paging: boolean;
  total: number;
  totalPage: number;
}

export interface RankingData {
  avatar: string;
  invitations: number;
  points: number;
  ranking: number;
  userName: string;
  address: string;
}

export interface InvitationRecord {
  address: string;
  avatar: string;
  buyTotal: number;
  inviteType: string;
  inviterAddress: string;
  inviterName: string;
  level: number;
  points: number;
  registerDate: number;
  taskComplete: false;
  userName: string;
}
