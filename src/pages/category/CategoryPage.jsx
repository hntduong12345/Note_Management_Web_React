import React from "react";

export default function CategoryPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Categories</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your knowledge folders
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </header>

      {/* Category Grid */}
      <div className="flex-1 px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || FolderOpen;
            const count = getNotesCount(cat.name);
            return (
              <div
                key={cat.id}
                className="flex flex-col p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: cat.color }} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {count} {count === 1 ? "note" : "notes"}
                </p>
                <Link
                  href="/dashboard"
                  className="text-xs font-medium text-[#3b82f6] hover:underline mt-auto"
                >
                  {"View Notes →"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Category Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30">
          <div className="w-full max-w-sm p-6 bg-card rounded-xl border border-border shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">
                New Category
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Category name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Icon
                </label>
                <div className="flex gap-2">
                  {iconOptions.map((opt) => {
                    const OptIcon = iconMap[opt.key];
                    return (
                      <button
                        key={opt.key}
                        onClick={() => setNewIcon(opt.key)}
                        className={`p-2 rounded-lg border transition-colors ${
                          newIcon === opt.key
                            ? "border-primary bg-secondary"
                            : "border-border hover:bg-secondary"
                        }`}
                        aria-label={opt.label}
                      >
                        <OptIcon className="w-4 h-4 text-foreground" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Color
                </label>
                <div className="flex gap-2">
                  {colorOptions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setNewColor(c)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        newColor === c
                          ? "border-foreground scale-110"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: c }}
                      aria-label={`Color ${c}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddCategory}
                className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity mt-2"
              >
                Create Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
