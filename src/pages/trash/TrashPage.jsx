import React, { useState } from "react";

export default function TrashPage() {
  const mockTrashedNotes = [
    {
      id: "trash_1",
      title: "React Performance Optimization",
      content:
        "Learn how to optimize React applications using memo, useCallback, useMemo and proper component structure to avoid unnecessary re-renders.",
      trashedAt: "2026-02-20",
    },
    {
      id: "trash_2",
      title: "DevOps Deployment Checklist",
      content:
        "Steps for deploying production apps: environment variables, CI/CD setup, Docker configuration, Nginx reverse proxy and SSL setup.",
      trashedAt: "2026-02-18",
    },
    {
      id: "trash_3",
      title: "UI Design Inspiration Ideas",
      content:
        "Modern SaaS dashboard inspiration with clean spacing, subtle shadows, soft colors, and accessible typography patterns.",
      trashedAt: "2026-02-15",
    },
    {
      id: "trash_4",
      title: "Meeting Notes - Project Planning",
      content:
        "Discussed roadmap milestones, feature prioritization, sprint goals, and team responsibilities for Q2 delivery.",
      trashedAt: "2026-02-10",
    },
  ];
  const [trashedNotes, setTrashedNotes] = useState(mockTrashedNotes);

  const restoreNote = () => {};

  return (
    <div className="flex flex-col h-full px-[2rem] py-[1rem]">
      {/* Header */}
      <header className="flex items-center justify-between mb-[2rem]">
        <div>
          <h1 className="text-[1.6rem] font-[600] text-foreground">Trash</h1>
          <p className="text-[1rem] text-muted-foreground mt-[0.3rem]">
            Temporary deleted notes storage
          </p>
        </div>
        {/* <p>Empty Trash</p> Temporary comment option */}
      </header>

      {/* Trash List */}
      <div className="flex flex-col px-8 pb-8">
        {trashedNotes == null ? (
          <div className="flex flex-col items-center justify-center py-[5rem] text-muted-foreground">
            <p className="text-[1rem]">Trash is empty</p>
          </div>
        ) : (
          <div className="bg-card rounded-[0.5rem] border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_150px_180px] px-[1.5rem] py-[0.75rem] border-b border-border bg-secondary/50">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Note Title
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Deleted Date
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                Actions
              </span>
            </div>

            {/* Table Rows */}
            {trashedNotes.map((note) => (
              <div
                key={note.id}
                className="grid grid-cols-[1fr_150px_180px] items-center px-[1.5rem] py-[0.75rem] border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {note.title}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    {note.content.slice(0, 50)}...
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {note.trashedAt}
                </span>
                <div className="flex items-center justify-end gap-[1rem]">
                  <button
                    onClick={() => restoreNote(note.id)}
                    className="text-sm font-medium text-[#3b82f6] hover:underline bg-transparent border-0"
                  >
                    Restore
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
