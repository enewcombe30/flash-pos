import TrashCan from "../../../svgs/TrashCan";
import { scrollbarStyles } from "../../../constants/styleConstants";
import usePreeditComponent from "./usePreeditComponent";
import { editProduct } from "../../../types/recipeTypes";

interface props {
  setProductToEdit: (editProduct: editProduct) => void;
}

export default function PreEditComponent({ setProductToEdit }: props) {
  const { handleRemoveOne, editedList } = usePreeditComponent();

  const renderProducts = () => {
    return editedList.map((recipe, index) => (
      <div
        key={index}
        className="w-[21.875rem] h-[4rem] bg-[#D9D9D9] mx-auto flex items-center justify-between px-4 cursor-pointer"
        onClick={() => setProductToEdit({ id: index, recipe })}
      >
        <div className="text-black font-bold flex items-center">
          {recipe.name}
          <span className="text-[#908D8D] text-sm italic ml-2">
            ({index + 1})
          </span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleRemoveOne(recipe.id)}
        >
          <TrashCan />
        </div>
      </div>
    ));
  };

  return (
    <>
      <div
        className="h-fit max-h-[26.875rem] mb-4 mx-8 overflow-scroll space-y-6 custom-scrollbar"
        style={scrollbarStyles}
      >
        {renderProducts()}
      </div>
    </>
  );
}
