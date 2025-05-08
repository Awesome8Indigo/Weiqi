export interface ToggleSwitchProps {
  options: string[];
  defaultOption?: string;
  buttonPadding_X?: number;
  buttonPadding_Y?: number;
  containerWidth?: number;
  containerHeight?: number;
  fontsize?: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  group: string;
  containerColor?: string;
}

export default function ToggleSwitch({
  group,
  options,
  defaultOption,
  buttonPadding_X,
  buttonPadding_Y,
  containerWidth,
  containerHeight,
  fontsize,
  orientation,
  className,
  containerColor,
}: ToggleSwitchProps) {
  return (
    <div
      className={`${className} grid gap-2 rounded-xl bg-gray-200`}
      style={{
        width:           containerWidth  ? `${containerWidth + (buttonPadding_X??0)*2}px`  : 'auto',
        height:          containerHeight ? `${containerHeight + (buttonPadding_Y??0)*2}px` : 'auto',
        maxWidth:        '100vw',
        maxHeight:       '100vh',
        gridAutoFlow:    orientation === 'horizontal' ? 'column' : 'row',
        alignItems:      'center',
        justifyContent:  'center',
        backgroundColor: containerColor,
      }}
    >
      {options.map((opt) => {
        const id = `${group}-${opt}`;
        return (
          <div key={opt}>
            <input
              type="radio"
              name={group}
              id={id}
              value={opt}
              className="peer hidden"
              defaultChecked={opt === defaultOption}
            />
            <label
              htmlFor={id}
              className="block cursor-pointer rounded peer-checked:bg-blue-500 peer-checked:text-white px-4 py-2"
              style={{
                padding: `${buttonPadding_Y ?? 0}px ${buttonPadding_X ?? 0}px`,
                fontSize: fontsize ? `${fontsize}px` : undefined,
              }}
            >
              {opt}
            </label>
          </div>
        );
      })}
    </div>
  );
}