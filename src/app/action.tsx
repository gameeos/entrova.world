"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { TaskCluster, TaskGroup, UserTask } from "../interface";

const extractAndPushTaskToGroupList = ({
  userTasks,
  groups,
  taskId,
  defaultGroupTitle,
  icon,
}: {
  userTasks: UserTask[];
  groups: TaskGroup[];
  taskId: string;
  defaultGroupTitle: string;
  icon: string;
}) => {
  const task = userTasks.find((task) => task.id === taskId);
  if (task) {
    groups.push({
      title: task.title ?? defaultGroupTitle,
      icon,
      notice: task.notice ? task.notice : undefined,
      tasks: [
        {
          id: task.id,
          desc: task.desc,
          tickets: task.points === -1 ? 10 : task.points,
          action: task.action,
          redirect: task.redirect,
          claimed: task.claimed ?? false,
        },
      ],
    });
  }
};

const extractAndPushTaskToGroup = ({
  userTasks,
  taskId,
  group,
}: {
  userTasks: UserTask[];
  taskId: string;
  group: TaskGroup;
}) => {
  const targetTask = userTasks.find((task) => task.id === taskId);
  if (targetTask) {
    group.tasks.push({
      id: targetTask.id,
      desc: targetTask.desc,
      tickets: targetTask.points,
      action: targetTask.action,
      redirect: targetTask.redirect,
      claimed: targetTask.claimed ?? false,
    });
  }
};

export const listTaskClusters = async (): Promise<TaskCluster[]> => {
  const session = await getServerSession(authOptions);
  let response;
  if (session === null) {
    response = await fetch("https://gameplus.ai/api/v2/tasks", {
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    });
  } else {
    const { userId } = session;
    response = await fetch(`https://gameplus.ai/api/v2/users/${userId}/tasks`, {
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    });
  }

  let tasks: UserTask[] = await response.json();
  tasks = tasks
    .filter((task) => task.status === "PUBLISHED")
    .map((task) => {
      const redirect = task.redirect;
      if (redirect === null || session === null) {
        return task;
      }
      const { userId } = session;
      return {
        ...task,
        redirect: redirect.replace("{userId}", userId),
      };
    });
  const dailyTaskGroups: TaskGroup[] = [];

  extractAndPushTaskToGroupList({
    userTasks: tasks,
    groups: dailyTaskGroups,
    taskId: "9793bc84-fd23-4a16-9584-4d1ce6044d38",
    defaultGroupTitle: "Assets Reward",
    icon: "/images/task-center/icons/assets-reward.png",
  });
  extractAndPushTaskToGroupList({
    userTasks: tasks,
    groups: dailyTaskGroups,
    taskId: "c3f763cb-212a-4f05-a796-a430c8f84a12",
    defaultGroupTitle: "Daily Check-In",
    icon: "/images/task-center/icons/daily-check-in.png",
  });

  const socialTasks = tasks.filter(
    (task) => task.type === "TWITTER" && task.target[0] === "LikeRetweet"
  );
  if (socialTasks.length > 0) {
    socialTasks.forEach((task) => {
      dailyTaskGroups.push({
        title: task.title ?? "X Interaction: Like, Retweet, Comment",
        icon: "/images/task-center/icons/social-meida.png",
        notice: task.notice ? task.notice : undefined,
        tasks: [
          {
            id: task.id,
            desc: task.desc,
            tickets: task.points,
            action: task.action,
            redirect: task.redirect,
            claimed: task.claimed ?? false,
          },
        ],
      });
    });
  }

  const onetimeTaskGroups: TaskGroup[] = [];

  const bindInvitationLinkTask = tasks.find(
    (task) => task.id === "8f2d9dfb-89d5-4f9a-a128-7c05e8bcdfa7"
  );
  if (bindInvitationLinkTask) {
    onetimeTaskGroups.push({
      title: "Bind Invitation Link",
      icon: "/images/task-center/icons/invitation-link.png",
      tasks: [
        {
          id: bindInvitationLinkTask.id,
          desc: "bind-invitation-form",
          tickets: bindInvitationLinkTask.points,
          action: bindInvitationLinkTask.action,
          redirect: bindInvitationLinkTask.redirect,
          claimed: bindInvitationLinkTask.claimed ?? false,
        },
      ],
    });
  }

  extractAndPushTaskToGroupList({
    userTasks: tasks,
    groups: onetimeTaskGroups,
    taskId: "63fd0460-b973-4cbb-9ba3-624b2a5990f2",
    defaultGroupTitle: "Registration Reward",
    icon: "/images/task-center/icons/registration.png",
  });

  const xTaskGroup: TaskGroup = {
    title: "Bind X",
    icon: "/images/task-center/icons/bind-x.png",
    tasks: [],
  };

  extractAndPushTaskToGroup({
    userTasks: tasks,
    taskId: "99acf0c7-05c0-4d05-9c90-b89a831ac2ff",
    group: xTaskGroup,
  });
  extractAndPushTaskToGroup({
    userTasks: tasks,
    taskId: "01338798-f541-483b-a3a5-8aa6802e3bc4",
    group: xTaskGroup,
  });
  extractAndPushTaskToGroup({
    userTasks: tasks,
    taskId: "964ffe3c-1b73-4841-b122-eb7f5c39d6d0",
    group: xTaskGroup,
  });

  onetimeTaskGroups.push(xTaskGroup);

  const joinCommunityGroup: TaskGroup = {
    title: "Join the Community",
    icon: "/images/task-center/icons/join-community.png",
    tasks: [],
  };
  extractAndPushTaskToGroup({
    userTasks: tasks,
    taskId: "04461ec1-9679-4774-8f40-91a7755238f9",
    group: joinCommunityGroup,
  });
  extractAndPushTaskToGroup({
    userTasks: tasks,
    taskId: "6b3406b9-6e20-4dff-b1cc-ba6476071084",
    group: joinCommunityGroup,
  });

  onetimeTaskGroups.push(joinCommunityGroup);

  const surveyTasks = tasks.filter((task) => task.type === "SURVEY");
  if (surveyTasks.length > 0) {
    const surveyTaskGroup: TaskGroup = {
      title: "Participate in our Survey",
      icon: "/images/task-center/icons/survey.png",
      tasks: surveyTasks.map((task) => ({
        id: task.id,
        desc: task.desc,
        tickets: task.points,
        action: task.action,
        redirect: task.redirect,
        claimed: task.claimed ?? false,
      })),
    };
    onetimeTaskGroups.push(surveyTaskGroup);
  }

  const clusters: TaskCluster[] = [
    {
      title: "Daily Tasks",
      notice:
        "The Game Plus team will continue to upgrade our Daily Tasks. Please look forward to new exciting missions.",
      groups: dailyTaskGroups,
    },
    {
      title: "One-Time Tasks",
      groups: onetimeTaskGroups,
    },
  ];

  return clusters;
};
