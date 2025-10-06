import React from "react";
import "./TextareaField.scss";

interface TextareaProps {
  label?: string;
  description?: string;
  placeholder?: string;
  hint?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  showPlaceholder?: boolean;
  showHint?: boolean;
  error?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  label = "Label",
  description = "Description",
  placeholder = "Placeholder",
  hint = "Hint",
  showLabel = true,
  showDescription = true,
  showPlaceholder = true,
  showHint = true,
  error = false,
  className = "",
  value,
  onChange,
}: TextareaProps): JSX.Element => {
  return (
    <div className={`textarea-field ${className}`}>
      <div className="textarea-field__container">
        {showLabel && <label className="textarea-field__label">{label}</label>}

        {showDescription && (
          <p className="textarea-field__description">{description}</p>
        )}

        <div className="textarea-field__wrapper">
          <textarea
            className="textarea-field__input"
            placeholder={showPlaceholder ? placeholder : ""}
            value={value}
            onChange={onChange}
            rows={4}
          />
          <img
            className="textarea-field__drag-icon"
            alt="Drag to resize"
            src="https://c.animaapp.com/uo4WqgtB/img/drag-1.svg"
          />
        </div>

        {showHint && (
          <span
            className={`textarea-field__hint ${
              error ? "textarea-field__hint--error" : ""
            }`}
          >
            {hint}
          </span>
        )}
      </div>
    </div>
  );
};
