import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { useState } from "react";
import styles from "./Post.module.css";
import { format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"


export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    "Post muito bacana, hein?!"
  ])

  const publisheDateFormattted = format(publishedAt,  "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    ADDsUFFIX: true,
  })

  const [newCommentText, setNewCommentText] = useState('')
  
  function handleCreateNemComment() {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function onDeleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment ==! commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publisheDateFormattted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
      {content.map(line => {
        if(line.type === 'paragraph'){
          return <p key={line.content}>{line.content}</p>;
        } else if (line.type === 'link') {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
      })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNemComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
            </button>
        </footer>
      </form>
      <div>
        {
          comments.map(comment => {
            return <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={onDeleteComment}/>
          })
        }
      </div>
    </article>
  );
}
