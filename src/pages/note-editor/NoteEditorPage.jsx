/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Save, Tag, X, AlertCircle } from "lucide-react";

export default function NoteEditorPage() {
  //   const navigate = useNavigate();
  //   const [newNote, setNewNote] = useState({});
  //   const [categories, setCategories] = useState(["Personal", "Test", "Test2"]);
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  //   const [category, setCategory] = useState("Personal");
  //   const [tags, setTags] = useState([]);
  //   const [tagInput, setTagInput] = useState("");
  //   const [saved, setSaved] = useState(true);

  //   const wordCount = useMemo(() => {
  //     if (!content.trim()) return 0;
  //     return content.trim().split(/\s+/).length;
  //   }, [content]);

  //   const handleTitleChange = (val) => {
  //     setTitle(val);
  //     setSaved(false);
  //   };

  //   const handleContentChange = (val) => {
  //     setContent(val);
  //     setSaved(false);
  //   };

  //   const handleAddTag = (e) => {
  //     if (e.key === "Enter" && tagInput.trim()) {
  //       e.preventDefault();
  //       //Get random color code
  //       //Temporary hard code
  //       const colors = [
  //         "#ef4444",
  //         "#f59e0b",
  //         "#22c55e",
  //         "#3b82f6",
  //         "#8b5cf6",
  //         "#ec4899",
  //       ];
  //       const newTag = {
  //         name: tagInput.trim(),
  //         color: colors[tags.length % colors.length],
  //       };
  //       if (
  //         !tags.find((t) => t.name.toLowerCase() === newTag.name.toLowerCase())
  //       ) {
  //         setTags([...tags, newTag]);
  //         setSaved(false);
  //       }
  //       setTagInput("");
  //     }
  //   };

  //   const removeTag = (name) => {
  //     setTags(tags.filter((t) => t.name !== name));
  //     setSaved(false);
  //   };

  //   const handleSave = () => {
  //     //Call add note api
  //     const note = addNote({ title, content, category, tags });
  //     setSaved(true);
  //     navigate(`/notes/${note.id}`);
  //   };

  //   //Call get categories api
  //   const categoryNames = categories
  //     .filter((c) => c.name !== "All Notes")
  //     .map((c) => c.name);

  console.log("Temp");

  // ----- MOCK DATA (for UI testing only) -----
  //Get the note id in url params to check that is that create or edit note?
  const { noteId } = useParams();

  const mockSaved = false;

  // ----- STATE USING MOCK -----

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [saved, setSaved] = useState(mockSaved);
  const [tagInput, setTagInput] = useState("");

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

  const categoryNames = [
    "Frontend",
    "Backend",
    "UI",
    "Database",
    "DevOps",
    "Personal",
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-8 py-3 border-b border-border bg-card h-[5rem]">
        <div className="flex items-center gap-2 text-sm text-muted-foreground ml-[1rem]">
          {!saved && <AlertCircle className="w-4 h-4" />}
          <span>{saved ? "All changes saved" : "Unsaved changes"}</span>
        </div>
        <button
          //   onClick={handleSave}
          className="flex items-center gap-2 px-[1.2rem] py-[0.6rem] rounded-lg bg-primary text-primary-foreground
                     text-sm font-[600] hover:opacity-90 transition-opacity mr-[1rem]"
        >
          <Save className="w-4 h-4 mr-[0.6rem]" />
          Save Note
        </button>
      </header>

      {/* Editor Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Editor */}
        <div className="flex-1 pt-[2rem] pl-[2rem] overflow-auto">
          <input
            type="text"
            placeholder="Untitled Note"
            value={title}
            // onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full text-[2.2rem] font-light text-foreground placeholder:text-muted-foreground/50
                       bg-transparent border-none focus:outline-none mb-4"
          />
          <textarea
            placeholder="Start typing your thoughts..."
            value={content}
            // onChange={(e) => handleContentChange(e.target.value)}
            className="w-full min-h-[60vh] text-sm text-muted-foreground leading-relaxed bg-transparent border-none focus:outline-none resize-none"
          />
        </div>

        {/* Right Sidebar - Note Details */}
        <aside className="w-[260px] border-l border-border bg-secondary/30 p-6 overflow-auto min-h-screen pt-[1rem] px-[1rem]">
          <h2 className="text-[1rem] font-[700] uppercase tracking-wider text-foreground mb-[0.8rem]">
            Note Details
          </h2>

          {/* Category */}
          <div className="mb-[1.6rem]">
            <label className="text-xs font-semibold text-[#3b82f6] mb-[0.8rem] block">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSaved(false);
              }}
              className="w-full px-[0.6rem] py-[0.4rem] rounded-lg border border-border bg-card text-sm 
                         text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
            >
              {categoryNames.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="mb-[1.6rem]">
            <label className="text-xs font-semibold text-[#3b82f6] mb-[0.8rem] block">
              Tags
            </label>
            <div className="flex flex-wrap gap-1.5 mb-[0.4rem]">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className="flex items-center gap-1 text-[12px] font-medium rounded-full text-card mr-[0.4rem] mb-[0.4rem] pl-[0.4rem] pr-[0.3rem] py-[0.1rem]"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.name}
                  <button
                    // onClick={() => removeTag(tag.name)}
                    className=" flex items-center justify-center hover:opacity-70 bg-transparent border-0"
                  >
                    <X
                      className="w-[0.6rem] h-[0.6rem] ml-[0.2rem]"
                      style={{ backgroundColor: tag.color, color: "white" }}
                    />
                  </button>
                </span>
              ))}
            </div>
            <div className="relative">
              <Tag className="absolute left-[0.4rem] top-[50%] -translate-y-1/2 w-[1rem] h-[1rem] text-muted-foreground" />
              <input
                type="text"
                placeholder="Add a tag..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                // onKeyDown={handleAddTag}
                className="w-[80%] pl-9 px-[1.6rem] py-[0.6rem] rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>
          </div>

          {/* Metadata */}
          <div className="border-t border-border pt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between mt-[1.2rem]">
              <span className="text-xs font-[700] text-[#3b82f6]">Created</span>
              <span className="text-xs text-foreground">
                {new Date().toLocaleDateString("en-GB")}
              </span>
            </div>
            <div className="flex items-center justify-between mt-[0.8rem]">
              <span className="text-xs font-[700] text-[#3b82f6]">
                Word Count
              </span>
              <span className="text-xs text-foreground">{wordCount}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
