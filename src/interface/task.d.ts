export interface Task {
  id: string;
  desc: React.ReactNode;
  tickets: number;
  status?: "claimed" | "claimable";
  action: "REDIRECT" | "CLAIM";
  redirect: string | null;
  claimed: boolean;
}

export interface TaskGroup {
  title: string;
  icon: string;
  notice?: string;
  tasks: Task[];
}

export interface TaskCluster {
  title: string;
  notice?: string;
  groups: TaskGroup[];
}

export interface UserTask {
  id: string;
  status: "PUBLISHED" | "UNPUBLISHED" | "ENDED";
  type: string;
  target: string[];
  title: string | null;
  desc: string | null;
  notice: string | null;
  points: number;
  link: string | null;
  action: "CLAIM" | "REDIRECT";
  redirect: string | null;
  payload: Record<string, unknown>;
  userId?: number;
  claimed?: boolean;
}
