// import { Pin } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NoteCard({ note, viewMode }) {
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
      className={`block no-underline text-inherit ${viewMode === "list" ? "w-full" : ""}`}
    >
      <div className="flex flex-col h-full p-5 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
        {/* Category & Pin */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: "#64748b" }}
          >
            {note.category}
          </span>
          {/* {note.pinned && <Pin className="w-3.5 h-3.5 text-muted-foreground" />} */}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground mb-1.5 line-clamp-2 text-pretty">
          {note.title}
        </h3>

        {/* Preview */}
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1">
          {note.content}
        </p>

        {/* Tags + Date */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 flex-wrap">
            {note.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full text-card"
                style={{ backgroundColor: tag.color }}
              >
                {tag.name}
              </span>
            ))}
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
