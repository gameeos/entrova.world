export default function InvitationH4Header({ title }: { title: string }) {
  return (
    <header className="flex justify-start items-center gap-4">
      <div className="bg-white w-1 h-4" />
      <h4 className="text-lg font-medium">{title}</h4>
    </header>
  );
}
