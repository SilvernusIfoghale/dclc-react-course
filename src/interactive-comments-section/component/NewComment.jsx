import { useState } from "react";

export default function NewComment({
  currentUser,
  handleSubmit,
  placeholder = "Add comment...",
  initialText = "",
  isEdit = false,
  buttonText,
}) {
  const [text, setText] = useState(initialText);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form
      className={isEdit ? "edit-comment" : "new-comment-container"}
      onSubmit={onSubmit}
    >
      <textarea
        className="new-comment"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {!isEdit && (
        <img
          className="new-comment-avatar"
          src={`./images/avatars/image-${currentUser.username}.png`}
          alt={currentUser.username}
        />
      )}

      <button
        className="submit font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}
