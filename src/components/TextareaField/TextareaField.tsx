import React from "react";
import "./style.scss";

interface Props {
  label: boolean;
  placeholderText: boolean;
  error: boolean;
  description2: boolean;
  textareaLabel: string;
  descriptionText: string;
  placeholderText1: string;
  addHint: string;
  className: any;
}

export const TextareaField = ({
  label = true,
  placeholderText = true,
  error = true,
  description2 = true,
  textareaLabel = "Label",
  descriptionText = "Description",
  placeholderText1 = "Placeholder ",
  addHint = "Hint",
  className,
}: Props): JSX.Element => {
  return (
    <div className={`textarea-field ${className}`}>
      <div className="div">
        {label && <div className="label">{textareaLabel}</div>}

        {description2 && <div className="description">{descriptionText}</div>}

        <div className="text-wrapper">Description</div>

        <div className="textarea">
          {placeholderText && (
            <div className="placeholder">{placeholderText1}</div>
          )}

          <img
            className="drag"
            alt="Drag"
            src="https://c.animaapp.com/uo4WqgtB/img/drag-1.svg"
          />
        </div>

        {error && <div className="hint">{addHint}</div>}
      </div>
    </div>
  );
};
