import TaskGroup from "@/components/task-group";
import { listTaskClusters } from "../action";
import NoticeTooltip from "@/components/notice-tooltip";

export default async function TaskCenterPage() {
  const clusters = await listTaskClusters();

  return (
    <>
      {clusters.map(({ title, notice, groups }) => (
        <div className="mt-8 lg:mt-16 first:mt-0" key={title}>
          <header className="flex gap-4 items-center mb-4 lg:mb-8 xl:mb-12">
            <h2 className="text-2xl font-medium lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {title}
            </h2>
            {notice && <NoticeTooltip notice={notice} />}
          </header>
          <div className="flex flex-col gap-4">
            {groups.map(({ title, tasks, icon, notice }) => (
              <TaskGroup
                key={title}
                title={title}
                tasks={tasks}
                icon={icon}
                notice={notice}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
