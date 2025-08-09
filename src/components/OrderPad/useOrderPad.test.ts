import useOrderPad from "./useOrderPad";
import { Recipe } from "../../types/recipeTypes";
import { renderHook, act } from "@testing-library/react";
import * as reactRedux from "react-redux";

jest.mock("react-redux");

describe("useOrderPad", () => {
  const burger: Recipe = {
    name: "Burger",
    costPrice: 3.0,
    salePrice: 5.99,
    subDivisionId: 1,
    version: 1,
    id: 1,
    RecipeIngredient: [],
    recipeAllergens: [],
    recipeDietaryTags: [],
  };
  const fries: Recipe = {
    name: "Fries",
    costPrice: 1.0,
    salePrice: 2.99,
    subDivisionId: 1,
    version: 1,
    id: 2,
    RecipeIngredient: [],
    recipeAllergens: [],
    recipeDietaryTags: [],
  };

  let mockDispatch: jest.Mock;
  let mockUseSelector: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (reactRedux.useDispatch as unknown as jest.Mock).mockReturnValue(
      mockDispatch
    );
    mockUseSelector = reactRedux.useSelector as unknown as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("groups items by id and counts occurrences", () => {
    mockUseSelector.mockImplementation((selector: any) =>
      selector({
        orders: {
          items: [burger, burger, fries],
        },
      })
    );

    const { result } = renderHook(() => useOrderPad());
    const grouped = result.current.grouped;

    expect(grouped[burger.id.toString()].count).toBe(2);
    expect(grouped[fries.id.toString()].count).toBe(1);
    expect(grouped[burger.id.toString()].item).toEqual(burger);
  });

  it("returns an empty object if items is empty", () => {
    mockUseSelector.mockImplementation((selector: any) =>
      selector({
        orders: {
          items: [],
        },
      })
    );

    const { result } = renderHook(() => useOrderPad());
    expect(result.current.grouped).toEqual({});
  });

  it("dispatches removeItem when handleRemove is called", () => {
    mockUseSelector.mockImplementation((selector: any) =>
      selector({
        orders: {
          items: [burger],
        },
      })
    );

    const { result } = renderHook(() => useOrderPad());
    act(() => {
      result.current.handleRemove(burger);
    });
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("dispatches removeAllItems after long press", () => {
    mockUseSelector.mockImplementation((selector: any) =>
      selector({
        orders: {
          items: [burger, burger],
        },
      })
    );

    window.alert = jest.fn();

    jest.useFakeTimers();
    const { result } = renderHook(() => useOrderPad());
    act(() => {
      result.current.handleMouseDown(burger);
      jest.advanceTimersByTime(700);
    });
    expect(mockDispatch).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
