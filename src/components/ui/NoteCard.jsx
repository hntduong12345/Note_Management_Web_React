/* eslint-disable no-unused-vars */
// import { Pin } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function NoteCard({ note, viewMode }) {
  const MAX_TAGS = viewMode === "grid" ? 3 : 6;
  const [hiddenCount, setHiddenCount] = useState(note.tags.length - MAX_TAGS);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) return "Today";
    if (diffDays < 7) {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  return (
    <Link
      to={`/notes/${note.id}`}
      className={`block no-underline text-inherit ${viewMode === "list" ? "w-full" : ""} m-[1rem]`}
    >
      <div className="flex flex-col h-full p-5 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
        {/* Category & Pin */}
        <div className="flex items-center justify-between mb-3 mt-[1.6rem] mx-[1rem]">
          <span
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: "#64748b" }}
          >
            {note.category}
          </span>
          {/* {note.pinned && <Pin className="w-3.5 h-3.5 text-muted-foreground" />} */}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground mb-1.5 line-clamp-2 text-pretty mx-[1rem] mt-[1rem]">
          {note.title}
        </h3>

        {/* Preview */}
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1 mx-[1rem] mt-[0.6rem]">
          {note.content}
        </p>

        {/* Tags + Date */}
        <div className="flex items-center justify-between m-[1rem]">
          <div className="flex items-center gap-2 max-w-full overflow-hidden">
            <div className="flex items-center gap-1.5 overflow-hidden whitespace-nowrap max-w-full">
              {note.tags.slice(0, MAX_TAGS).map((tag) => (
                <span
                  key={tag.name}
                  className=" inline-block
                            max-w-[4.2rem]
                            truncate
                            text-[12px]
                            font-medium
                            rounded-full
                            text-card
                            px-2 py-1
                            mx-[0.3rem] p-[0.3rem]"
                  style={{ background: "grey" }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            {hiddenCount > 0 && (
              <span className="text-[12px] text-muted-foreground font-[700] rounded-full">
                +{hiddenCount} more
              </span>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground whitespace-nowrap ml-2">
            {formatDate(note.updatedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

NoteCard.propTypes = {
  note: PropTypes.object,
  viewMode: PropTypes.string,
};
