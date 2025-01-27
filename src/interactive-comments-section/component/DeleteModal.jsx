export default function DeleteModal() {
  return (
    <div className="delete-modal">
      <h2 className="delete-modal_title">Delete comment</h2>
      <p className="delete-modal_content">
        Are you sure you want to delete this comment? This will remove the
        comment and can 't be undone.
      </p>
      <div className="delete-modal_btns">
        <button className="delete-modal_btn no font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70">
          No, cancel
        </button>
        <button className="delete-modal_btn yes font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70">
          Yes, delete
        </button>
      </div>
    </div>
  );
}
