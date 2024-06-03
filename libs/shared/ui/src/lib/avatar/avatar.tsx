import styles from './avatar.module.css';

export interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <div className={styles['avatar']}>
      <img className={styles['avatar_image']} src={props.src} alt={props.alt}/>
      <div className={styles['avatar_tooltip']}>{props.alt}</div>
    </div>
  );
}

export default Avatar;
