import { useRef, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "./keyboardStyles.css";

interface KeyboardInstance {
  setInput: (input: string) => void;
  setOptions: (options: { layoutName: string }) => void;
  options: { layoutName: string };
}

interface KeyboardProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
  className?: string;
  layout?: "default" | "shift" | "numbers" | "symbols";
  theme?: string;
}

export default function VirtualKeyboard({
  value,
  onChange,
  onSubmit,
  onCancel,
  className = "",
  layout = "default",
  theme = "hg-theme-dark",
}: KeyboardProps) {
  const keyboardRef = useRef<KeyboardInstance | null>(null);

  useEffect(() => {
    if (keyboardRef.current) {
      keyboardRef.current.setInput(value);
    }
  }, [value]);

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      handleShift();
    } else if (button === "{enter}") {
      onChange(value + "\n");
    } else if (button === "{bksp}") {
      onChange(value.slice(0, -1));
    } else if (button === "{space}") {
      onChange(value + " ");
    } else if (button === "{tab}") {
      onChange(value + "\t");
    } else if (button === "{back}") {
      onCancel?.();
    } else if (button === "{submit}") {
      onSubmit?.();
    } else {
      onChange(value + button);
    }
  };

  const handleShift = () => {
    const currentLayout = keyboardRef.current?.options?.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";
    keyboardRef.current?.setOptions({
      layoutName: shiftToggle,
    });
  };

  return (
    <div className={`virtual-keyboard ${className}`}>
      <Keyboard
        keyboardRef={(r: unknown) =>
          (keyboardRef.current = r as KeyboardInstance)
        }
        layoutName={layout}
        onKeyPress={onKeyPress}
        theme={theme}
        layout={{
          default: [
            "1 2 3 4 5 6 7 8 9 0 {bksp}",
            "Q W E R T Y U I O P",
            "A S D F G H J K L {enter}",
            "{shift} Z X C V B N M < > {shift}",
            "{back} {space} {submit}",
          ],
          shift: [
            "! @ # $ % ^ & * ( ) {bksp}",
            "q w e r t y u i o p",
            "a s d f g h j k l {enter}",
            "{shift} z x c v b n m , . {shift}",
            "{back} {space} {submit}",
          ],
          numbers: [
            "1 2 3 4 5 6 7 8 9 0",
            '- / : ; ( ) $ & @ "',
            "{bksp} . , ? ! ' {enter}",
            "{shift} {space} {shift}",
          ],
          symbols: [
            "[ ] { } # % ^ * + =",
            "_ \\ | ~ < > € £ ¥ •",
            "{bksp} . , ? ! ' {enter}",
            "{shift} {space} {shift}",
          ],
        }}
        display={{
          "{bksp}": "⌫",
          "{enter}": "↵",
          "{shift}": "⇧",
          "{space}": " ",
          "{tab}": "⇥",
          "{back}": "Back",
          "{submit}": "Submit",
        }}
      />
    </div>
  );
}
