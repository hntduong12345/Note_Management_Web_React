import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import DefaultObj from "../../assets/default_object.png";
import CategoryModal from "./CategoryModal";

export default function CategoryPage() {
  //Mock Data
  const mockCategories = [
    {
      id: "cat_frontend",
      name: "Frontend",
      icon: "",
      color: "#3b82f6", // blue
    },
    {
      id: "cat_backend",
      name: "Backend",
      icon: "",
      color: "#10b981", // green
    },
    {
      id: "cat_ui",
      name: "UI / UX",
      icon: "",
      color: "#8b5cf6", // purple
    },
    {
      id: "cat_devops",
      name: "DevOps",
      icon: "",
      color: "#f59e0b", // amber
    },
    {
      id: "cat_personal",
      name: "Personal",
      icon: "",
      color: "#ec4899", // pink
    },
    {
      id: "cat_learning",
      name: "Learning",
      icon: "",
      color: "#ef4444", // red
    },
  ];

  const mockNotes = [
    { id: 1, category: "Frontend" },
    { id: 2, category: "Frontend" },
    { id: 3, category: "Backend" },
    { id: 4, category: "UI / UX" },
    { id: 5, category: "UI / UX" },
    { id: 6, category: "UI / UX" },
    { id: 7, category: "Personal" },
  ];

  const getNotesCount = (categoryName) =>
    mockNotes.filter((n) => n.category === categoryName).length;

  const [categories, setCategories] = useState(mockCategories);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const [cateName, setCateName] = useState("");
  const [icon, setIcon] = useState("");

  const handleCreateCategory = async () => {};

  return (
    <div className="flex flex-col h-full pt-[1.4rem] px-[2rem]">
      {/* Header Part */}
      <header className="flex items-center justify-between ">
        <div>
          <h1 className="text-[1.6rem] text-foreground">Categories</h1>
          <p className="text-sm text-muted-foreground mt-[0.2rem]">
            Manage your note collections
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-[0.6rem] py-[0.3rem] rounded-lg
                     bg-primary text-primary-foreground text-[0.8rem] font-[700]
                     hover:opacity-85 transition-opacity"
          onClick={() => setShowModal(!showModal)}
        >
          <Plus className="w-[1rem] mr-[0.4rem] font-[700]" />
          Add Category
        </button>
      </header>

      {/* Body Part */}
      <div className="flex-1 px-8 pb-8 mt-[2rem]">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
          {/* Loop the Categories  */}
          {categories.map((category) => {
            const count = getNotesCount(category.name);
            return (
              <div
                key={category.id}
                className="flex flex-col p-[1.5rem] bg-card rounded-xl border border-border
                           hover:shadow-md transition-shadow"
              >
                <div
                  className="flex items-center justify-center w-[3rem] h-[3rem] rounded-xl mb-[1rem]"
                  style={{ background: "white" }}
                >
                  <img
                    src={category.icon == "" ? DefaultObj : category.icon}
                    className="w-[2.4rem] h-[2.4rem]"
                  />
                </div>
                <h3 className="text-base font-[600] text-foreground mb-[0.3rem]">
                  Category Name
                </h3>
                <p className="text-[0.75rem] text-muted-foreground mb-[1rem]">
                  {count} {count === 1 ? "note" : "notes"}
                </p>
                {/* <Link
                  to={"/dashboard"}
                  className="text-[0.75rem] font-[500] text-[#3b82f6] hover:underline mt-auto"
                >
                  {"View Notes →"}
                </Link> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add modals */}
      {showModal && (
        <CategoryModal
          cateName={cateName}
          setCateName={setCateName}
          icon={icon}
          setIcon={setIcon}
          handleCreateCategory={handleCreateCategory}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
