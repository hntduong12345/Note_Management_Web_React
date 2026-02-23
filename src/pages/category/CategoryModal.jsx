/* eslint-disable no-unused-vars */
import { X } from "lucide-react";
import PropTypes from "prop-types";

export default function CategoryModal({
  cateName,
  setCateName,
  icon,
  setIcon,
  handleCreateCategory,
  handleCloseModal,
}) {
  return (
    <div className="fixed inset-[0%] z-50 flex items-center justify-center bg-foreground/50">
      <div className="w-[25rem] max-w-sm p-[1.5rem] bg-card rounded-md border border-border">
        {/* Top Part */}
        <div className="flex items-center justify-between mb-[1rem]">
          <h2 className="text-[1.4rem] font-[600] text-foreground">
            New Category
          </h2>
          {/* X button */}
          <button
            className="text-muted-foreground hover:text-foreground bg-transparent border-0 cursor-pointer"
            onClick={handleCloseModal}
          >
            <X className="w-[1.2rem] h-[1.2rem]" />
          </button>
        </div>

        {/* Body Part */}
        <div className="flex flex-col gap-[1rem]">
          <div>
            <label className="text-[1rem] font-[500] text-foreground mb-[0.25rem] block">
              Name
            </label>
            <input
              type="text"
              placeholder="Category name"
              value={cateName}
              onChange={(e) => setCateName(e.target.value)}
              className="w-[94%] px-[0.75rem] py-[0.5rem] rounded-lg border border-border bg-card text-foreground
                         text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <div>
            <label className="text-[1rem] font-[500] text-foreground mb-[0.5rem] block">
              Icon
            </label>
            <input
              type="file"
              accept="image/*"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="w-[94%] px-[0.75rem] py-[0.5rem] rounded-lg border border-border bg-card text-foreground
                         text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <button
            onClick={handleCreateCategory}
            className="w-full py-[0.6rem] rounded-lg bg-primary text-primary-foreground text-sm
                       font-[600] hover:opacity-90 transition-opacity mt-[0.5rem]"
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
}

CategoryModal.propTypes = {
  cateName: PropTypes.string,
  setCateName: PropTypes.func,
  icon: PropTypes.string,
  setIcon: PropTypes.func,
  handleCreateCategory: PropTypes.func,
  handleCloseModal: PropTypes.func,
};
