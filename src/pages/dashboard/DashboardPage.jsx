/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, LayoutGrid, List } from "lucide-react";
import NoteCard from "../../components/ui/NoteCard";

export default function DashboardPage() {
  //Mock date data
  const yesterday = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d;
  };

  const now = () => new Date();

  const [notes, setNote] = useState([
    {
      id: 1,
      title: "React Router Navigation",
      content: "How to use useNavigate instead of router.push in React apps.",
      category: "Frontend",
      updatedAt: yesterday(),
      createdAt: yesterday(),
      tags: [
        { name: "react" },
        { name: "routing" },
        { name: "navigationdddddd" },
        { name: "Test" },
        { name: "navigation" },
        { name: "navigation" },
        { name: "navigation" },
        { name: "navigation" },
      ],
    },
    {
      id: 2,
      title: "Tailwind Input Styling",
      content: "Fix input height using h-* instead of padding.",
      category: "CSS",
      updatedAt: yesterday(),
      createdAt: yesterday(),
      tags: [{ name: "tailwind" }, { name: "css" }, { name: "ui" }],
    },
    {
      id: 3,
      title: "Authentication Flow",
      content: "Implement login, register, and forgot password screens.",
      category: "Backend",
      updatedAt: yesterday(),
      createdAt: yesterday(),
      tags: [{ name: "auth" }, { name: "security" }, { name: "jwt" }],
    },
    {
      id: 4,
      title: "Sidebar Layout",
      content: "Create a collapsible sidebar with active route highlight.",
      category: "UI",
      updatedAt: yesterday(),
      createdAt: yesterday(),
      tags: [{ name: "layout" }, { name: "sidebar" }, { name: "design" }],
    },
    {
      id: 5,
      title: "Search Optimization",
      content: "Filter notes by title, content, category, and tags.",
      category: "Utilities",
      updatedAt: yesterday(),
      createdAt: yesterday(),
      tags: [{ name: "search" }, { name: "filter" }, { name: "performance" }],
    },
  ]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("updatedAt");
  const [viewMode, setViewMode] = useState("grid");

  const navigate = useNavigate();

  const filteredNotes = useMemo(() => {
    let filtered = notes;
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q) ||
          n.tags.some((t) => t.name.toLowerCase().includes(q)),
      );
    }
    return filtered.sort((a, b) => new Date(b[sortBy]) - new Date(a[sortBy]));
  }, [notes, search, sortBy]);

  return (
    <div className="flex flex-col h-full">
      {/* Top Bar */}
      <header className="flex items-center gap-4 px-8 py-4 border-b border-border bg-card h-[5rem]">
        {/* Search */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-[1rem] top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[85%] h-[1.6rem] pl-10 px-[2.4rem] py-[0.5rem] ml-[0.6rem] rounded-lg border border-border bg-background
                       text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring transition-colors"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center border border-border overflow-hidden mr-[1rem]">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 transition-colors ${
              viewMode === "grid"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 transition-colors ${
              viewMode === "list"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>

        {/* New Note */}
        <button
          onClick={() => navigate("/notes/new")}
          className="flex items-center gap-2 px-4 py-2 mr-[1rem] h-[2.4rem] w-[6.4rem] rounded-lg bg-primary 
                     text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity justify-center"
        >
          <Plus className="w-4 h-4" />
          New Note
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 p-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-[1rem]">
          <h1 className="text-[1.6rem] font-bold text-foreground ml-[1rem]">
            Recent Notes
          </h1>
          <div className="flex items-center gap-2 mr-[1rem]">
            <span className="text-xs text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-[600] text-foreground bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="updatedAt">Last Modified</option>
              <option value="createdAt">Date Created</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <p className="text-sm">
              {search
                ? "No notes match your search."
                : "No notes yet. Create your first note!"}
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
