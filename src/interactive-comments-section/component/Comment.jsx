import { nanoid } from "nanoid";
import { useState } from "react";
import NewComment from "./NewComment";
import Reply from "./Reply";

export default function Comment(props) {
  const [score, setScore] = useState(props.score);
  const [disableUpvote, setDisableUpvote] = useState(false);
  const [disableDownvote, setDisableDownvote] = useState(false);
  const [backendReplies, setBackendReplies] = useState(props.replies);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  let starterScore = props.score;
  const isCurrentUser = props.user.username === props.currentUser.username;
  const isReplying =
    props.activeComment &&
    props.activeComment.id === props.id &&
    props.activeComment.type === "replying";
  const isEditing =
    props.activeComment &&
    props.activeComment.id === props.id &&
    props.activeComment.type === "editing";

  const handleScoreChange = (e) => {
    if (e.target.classList.contains("minus-btn")) {
      setScore((prevScore) => prevScore - 1);
      if (score - starterScore < 1) {
        setDisableDownvote(true);
        setDisableUpvote(false);
        starterScore = props.score;
      }
    }
    if (e.target.classList.contains("plus-btn")) {
      setScore((prevScore) => prevScore + 1);
      if (starterScore - score < 1) {
        setDisableUpvote(true);
        setDisableDownvote(false);
        starterScore = props.score;
      }
    }
  };

  const createReply = async (text) => {
    return {
      content: text,
      createdAt: "Just now",
      id: nanoid(),
      replyingTo: props.user.username,
      score: 1,
      user: props.currentUser,
    };
  };

  const addReply = (text) => {
    createReply(text).then((reply) => {
      setBackendReplies([reply, ...backendReplies]);
    });
    props.setActiveComment(null);
  };

  const deleteReply = (replyId) => {
    for (let i = 0; i < backendReplies.length; i++) {
      const updatedBackendReplies = backendReplies.filter(
        (backendReply) => backendReply.id !== replyId
      );
      setBackendReplies(updatedBackendReplies);
    }
  };

  const updateReply = (text, replyId) => {
    const updatedBackendReplies = backendReplies.map((backendReply) => {
      if (backendReply.id === replyId) {
        return { ...backendReply, content: text };
      }
      return backendReply;
    });
    setBackendReplies(updatedBackendReplies);
    props.setActiveComment(null);
  };

  return (
    <div className="comment-container">
      <div className="comment">
        <div className="comment-heading">
          <img
            className="w-8 mr-[0.9rem]"
            src={props.user.image.png}
            alt="avatar"
          />

          <p className="font-bold text-comment_Color-Dark_blue mr-[0.9rem]">
            {props.user.username}
          </p>
          {props.user.username === props.currentUser.username && (
            <p className="mr-[0.9rem] bg-comment_Color-Moderate_blue text-white text-xs font-bold py-[0.15rem] px-2 rounded-[4px]">
              you
            </p>
          )}
          <p className="mr-[0.9rem]">{props.createdAt}</p>
        </div>
        <div className="editing">
          {!isEditing && <p className="comment-content">{props.content}</p>}
          {isEditing && (
            <NewComment
              currentUser={props.currentUser}
              handleSubmit={(text) => {
                props.updateComment(text, props.id);
              }}
              initialText={props.content}
              isEdit
              buttonText="update"
            />
          )}
        </div>
        <div className="comment-votes">
          <button
            className="plus-btn font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px]"
            disabled={disableUpvote}
            onClick={handleScoreChange}
          >
            <span className={`plus-btn plus-icon`}>
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                  fill="#C5C6EF"
                />
              </svg>
            </span>
          </button>
          <p
            className="font-bold text-comment_Color-Moderate_blue bg
          -comment_Color-Very_light_gray h-10 flex items-center justify-center"
          >
            {score}
          </p>
          <button
            disabled={disableDownvote}
            className="minus-btn font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] "
            onClick={handleScoreChange}
          >
            <span className={`minus-btn minus-icon`}>
              <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                  fill="#C5C6EF"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="comment-footer">
          {isCurrentUser ? (
            <div className="toggled-btns">
              <button
                className="delete-btn font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70"
                onClick={() => {
                  setShowDeleteModal(true);
                }}
              >
                <span className="delete-icon">
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="#ED6368"
                    />
                  </svg>
                </span>
                Delete
              </button>
              <button
                className="edit-btn font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70"
                onClick={() => {
                  props.setActiveComment({ id: props.id, type: "editing" });
                }}
              >
                <span className="edit-icon">
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                      fill="#5357B6"
                    />
                  </svg>
                </span>
                Edit
              </button>
            </div>
          ) : (
            <button
              className="reply-btn font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70"
              onClick={() =>
                props.setActiveComment({ id: props.id, type: "replying" })
              }
            >
              <span className="reply-icon">
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                    fill="#5357B6"
                  />
                </svg>
              </span>
              Reply
            </button>
          )}
        </div>
      </div>
      {isReplying && (
        <div>
          <NewComment
            currentUser={props.currentUser}
            placeholder={`Replying to @${props.user.username}`}
            handleSubmit={(text) =>
              addReply(`@${props.user.username}, ${text}`)
            }
            buttonText="reply"
          />
        </div>
      )}
      {props.replies && (
        <div className="ml-4 border-l-4 border-[#67727e1a] ">
          {backendReplies.map((reply) => (
            <div className="reply" key={reply.id}>
              <Reply
                key={reply.id}
                currentUser={props.currentUser}
                activeComment={props.activeComment}
                setActiveComment={props.setActiveComment}
                addReply={addReply}
                deleteReply={deleteReply}
                updateReply={updateReply}
                {...reply}
              />
            </div>
          ))}
        </div>
      )}
      {showDeleteModal && (
        <div className="delete-modal-container">
          <div className="delete-modal">
            <h2 className="delete-modal_title">Delete comment</h2>
            <p className="delete-modal_content">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <div className="delete-modal_btns">
              <button
                className="delete-modal_btn no font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70"
                onClick={() => {
                  setShowDeleteModal(false);
                }}
              >
                No, cancel
              </button>
              <button
                className="delete-modal_btn yes font-bold text-comment_Color-Moderate_blue text-[1rem] border-none bg-white py-2 px-4 rounded-[10px] hover:opacity-70"
                onClick={() => {
                  props.deleteComment(props.id);
                }}
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
