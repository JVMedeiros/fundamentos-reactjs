import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.commentContentHeader}>
            <div>
              <strong className={styles.author}>João Medeiros</strong>
              <time
                className={styles.published}
                dateTime="2023-12-27 08:13:50"
                title="27 de dezembro de 2023 às 8h13"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.commentBoxFooter}>
          <button
            className={styles.commentBoxButton}
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
